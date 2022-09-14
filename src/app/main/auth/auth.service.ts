import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Socket } from 'ngx-socket-io';


@Injectable()
export class AuthService {

    token: string;
    constructor(private http: HttpClient, private socket: Socket) {
        this.token = localStorage.getItem('token')

    }

    setSesstion(token) {
        this.token = token;
        localStorage.setItem('token', token)
        if (this.token) this.socket.emit('connectuser', this.token, window.location.href.includes('room'))


    }

    getToken() {
        return this.token;
    }

    userLogin(username: string, password: string) {

        return this.http.post('https://vartlaaap.herokuapp.com/user/login', { username, password }, {
            observe: 'response',
        })
    }

    userRegistration(data) {

        return this.http.post('https://vartlaaap.herokuapp.com/user', data, {
            observe: 'response',
        });
    }
}