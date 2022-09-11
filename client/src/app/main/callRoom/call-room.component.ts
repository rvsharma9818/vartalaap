import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Howl } from 'howler';
import { BehaviorSubject } from 'rxjs';
import { CallRoomService } from './call-room.service';


declare var Peer: any;


@Component({
    selector: 'app-mainpage',
    templateUrl: './call-room.component.html',
    styleUrls: ['./call-room.component.css']
})

export class CallRoomComponent implements OnInit {
    peer = new Peer(undefined);
    myPeerId;
    roomId: any;
    isVideoCall: any;
    userCallDes: any
    connectedUser: any
    ringinSound: Howl;
    callState: string;
    isCaller: boolean;
    callStatus: boolean;
    isCameraOpen: boolean;
    isOtherUserCameraOpen: boolean;
    isMicroOpen: boolean;
    pauseResumeCameraStream: BehaviorSubject<boolean>;
    pauseResumeMicroStream: BehaviorSubject<boolean>;
    stopCallStream: BehaviorSubject<boolean>;

    myVideo: any;
    userVideo: any;
    callWindow;
    time: number = 0;
    interval;
    constructor(private callRoomService: CallRoomService, private router: ActivatedRoute) {
        this.stopCallStream = new BehaviorSubject(null);
        this.pauseResumeMicroStream = new BehaviorSubject(null);
        this.pauseResumeCameraStream = new BehaviorSubject(null);
        this.isCameraOpen = false;
        this.isMicroOpen = true;

        this.callStatus = true;
        this.callState = 'Mise en relation...'
        this.ringinSound = new Howl({
            src: ['/assets/audio/isringing.mp3'],
            loop: true

        });

    }
    ngOnInit() {
        this.isVideoCall = this.router.snapshot.queryParamMap.get('video') == 'true';
        this.isCameraOpen = this.isVideoCall;
        this.isOtherUserCameraOpen = false;
        this.roomId = this.router.snapshot.paramMap.get('id');
        this.isCaller = this.router.snapshot.queryParamMap.get('iscaller') == 'true';

        this.userVideo = document.getElementById('otherUserVideo')
        this.userVideo.addEventListener('loadedmetadata', () => {
            this.userVideo.play()
        })
        this.myVideo = document.getElementById('userVideo')
        this.myVideo.addEventListener('loadedmetadata', () => {
            this.myVideo.play()
        })



        this.peer.on('open', id => {
            this.callRoomService.startCall(this.roomId, id)
        })
        this.callRoomService.userDisconnectFromRoom()
            .subscribe(() => {
                this.stopTimer()
                this.stopCallStream.next(true)
                this.callStatus = false;
                this.callState = 'Call Ended'
                this.isOtherUserCameraOpen = false;
            })
        this.callRoomService.onCallEnded()
            .subscribe(res => {
                // this.ringinSound.stop() 
                this.isOtherUserCameraOpen = false;
                if (this.time > 0) {
                    this.stopTimer();
                    this.callStatus = false;
                    this.callState = 'Call Ended...'
                    if (this.isCaller) {
                        this.callRoomService.getConversationByUsers(this.userCallDes._id)
                            .subscribe((response: any) => {
                                this.callRoomService.logCall(response.conversation._id, true, this.isVideoCall)
                                    .subscribe()

                            })
                    }
                } else {
                    this.callStatus = false;
                    this.callState = 'Call Ended...'
                    if (this.isCaller) {
                        this.callRoomService.getConversationByUsers(this.userCallDes._id)
                            .subscribe((response: any) => {
                                this.callRoomService.logCall(response.conversation._id, false, false)
                                    .subscribe()

                            })
                    }
                }
                this.stopCallStream.next(true)


            })
        const userIds = this.roomId.split('-')
        this.callRoomService.onCallState()
            .subscribe(state => {

                if (state) {

                    this.callStatus = true;
                    this.callState = 'its ringing...'
                    //this.ringinSound.play()

                }
                else {
                    this.callState = 'No answer                    '
                    this.stopCallStream.next(true)
                    this.callStatus = false;
                    if (this.isCaller)
                        this.callRoomService.getConversationByUsers(this.userCallDes._id)
                            .subscribe((response: any) => {
                                this.callRoomService.logCall(response.conversation._id, false, false)
                                    .subscribe()

                            })
                }
            })
        this.callRoomService.getConnectUser()
            .subscribe((response: any) => {
                console.log(response)
                this.connectedUser = response.user
                this.callRoomService.getUserById(this.connectedUser._id == userIds[1] ? userIds[0] : userIds[1])
                    .subscribe((response: any) => {
                        this.userCallDes = response
                        if (this.isCaller)
                            this.callRoomService.callUser(this.connectedUser._id, this.userCallDes._id, this.isVideoCall)
                        else {
                            this.startTimer()
                            this.isOtherUserCameraOpen = this.isVideoCall

                        }
                    })

            })

        this.callRoomService.onCameraStateChanged()
            .subscribe((action: boolean) => {
                this.isOtherUserCameraOpen = action
                this.isVideoCall = this.isCameraOpen || action
            })
        this.createCall()

    }
    endCall() {
        if (this.time > 0) {
            this.stopTimer()
        }
        this.callStatus = false;
        this.callState = 'Call Ended'
        this.isOtherUserCameraOpen = false;
        this.callRoomService.endCall(this.userCallDes, false)
        this.callRoomService.endCall(this.userCallDes, true)
        this.stopCallStream.next(true)
        if (this.isCaller) {
            this.callRoomService.getConversationByUsers(this.userCallDes._id)
                .subscribe((response: any) => {
                    this.callRoomService.logCall(response.conversation._id, true, this.isVideoCall)
                        .subscribe()

                })
        }


    }
    onOpenAndCloseCamera(status: boolean) {
        this.isCameraOpen = status
        this.pauseResumeCameraStream.next(this.isCameraOpen)
        this.callRoomService.userOpenCloseCamera(this.userCallDes._id, status)
        this.isVideoCall = this.isOtherUserCameraOpen || status;
    }
    onOpenAndCloseMicro(status: boolean) {
        this.isMicroOpen = status
        this.pauseResumeMicroStream.next(this.isMicroOpen)
    }
    closeCallWindow() {
        this.callRoomService.setOpenCallWindow(true)
    }
    createCall() {

        this.myVideo.muted = true;
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(stream => {
                if (!this.isVideoCall) stream.getVideoTracks().forEach(track => track.enabled = false)

                this.pauseResumeCameraStream
                    .subscribe(action => {
                        if (action !== null) {

                            stream.getVideoTracks().forEach(track => track.enabled = action)
                        }
                    })
                this.pauseResumeMicroStream
                    .subscribe(action => {
                        if (action !== null) {
                            stream.getAudioTracks().forEach(track => track.enabled = action)
                        }
                    })
                this.stopCallStream
                    .subscribe(res => {
                        if (res) {
                            stream.getTracks().forEach(track => track.stop())
                            this.myVideo.remove()
                            this.userVideo.remove()

                        }
                    })

                this.myVideo.srcObject = stream

                this.peer.on('call', call => {
                    call.answer(stream)
                    call.on('stream', userVideoStream => {
                        this.userVideo.srcObject = userVideoStream
                    })
                })
                this.callRoomService.userJoiningRoom()
                    .subscribe(userId => {
                        this.startTimer();
                        this.connectToNewUser(userId, stream)
                        this.isOtherUserCameraOpen = this.isVideoCall

                    })
            })
    }
    connectToNewUser(userId, stream) {
        const call = this.peer.call(userId, stream)
        call.on('stream', userVideoStream => {
            this.userVideo.srcObject = userVideoStream

        })
        call.on('close', () => {
            console.log('call ended')
        })
    }
    startTimer() {
        this.interval = setInterval(() => {
            if (this.time === 0) {
                this.time++;
            } else {
                this.time++;
            }
            this.callState = this.transform(this.time)
        }, 1000);
    }
    transform(value: number) {
        const minutes: number = Math.floor(value / 60);
        const seconds = (value - minutes * 60)
        const minutesStr = minutes < 10 ? '0' + minutes : minutes
        const secondsStr = seconds < 10 ? '0' + seconds : seconds
        return `${minutesStr}:${secondsStr}`
    }
    pauseTimer() {
        clearInterval(this.interval);
    }
    stopTimer() {
        clearInterval(this.interval)
        this.time = 0
    }
}