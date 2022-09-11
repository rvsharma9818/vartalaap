(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-callRoom-call-room-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/callRoom/call-room.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/callRoom/call-room.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"containerSelfVideo\" [style.background-color]=\"isCameraOpen ? 'rgb(28, 30, 33)' : 'transparent'\">\r\n  <video id=\"userVideo\" class=\"selfVideoPlayer\" [style.display]=\"isCameraOpen ? 'inline' : 'none'\" height=\"200px\"\r\n    width=\"200px\">\r\n    <source>\r\n  </video>\r\n</div>\r\n<div class=\"containerUserVideo\">\r\n  <video class=\"userVideoPlayer\" id=\"otherUserVideo\" [style.display]=\"isOtherUserCameraOpen ? 'inline' : 'none'\">\r\n    <source>\r\n  </video>\r\n</div>\r\n<div *ngIf=\"userCallDes\" class=\"main-div\">\r\n  <div class=\"row\" style=\"height: 100%;\">\r\n    <div class=\"col-12\" style=\"height: 100%; padding-top: 200px;\">\r\n      <div *ngIf=\"!isOtherUserCameraOpen\" class=\"user-info-container\">\r\n        <img [src]=\"userCallDes.profileImg\" class=\"user-image\" />\r\n      </div>\r\n      <div *ngIf=\"!isOtherUserCameraOpen\">\r\n        <div style=\" margin-top: 30px;\" class=\"user-info-container\">\r\n          <p style=\"font-weight: 800;font-size: 18px;\" [style.color]=\"isCameraOpen? 'white': 'black'\">\r\n            {{userCallDes?.surname}} {{userCallDes?.name}}.</p>\r\n        </div>\r\n        <div class=\"user-info-container\">\r\n          <p style=\"color: #999999;\">{{callState}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"main-buttons-container\" [style.margin-top]=\"isOtherUserCameraOpen ? '190px':'0'\">\r\n        <div *ngIf=\"callStatus\" class=\"buttons-bar-container\">\r\n          <div class=\"button-control-container\" [style.border-color]=\"!isCameraOpen? '#999999' : '#0084ff'\"\r\n            [style.background-color]=\"isCameraOpen? '#0084ff' : 'white' \">\r\n            <i [ngClass]=\"isCameraOpen? 'fas fa-video media-control-icon media-active' : 'fas fa-video-slash media-control-icon'\"\r\n              (click)=\"onOpenAndCloseCamera(!isCameraOpen)\"></i>\r\n          </div>\r\n          <div class=\"button-control-container\" style=\"margin: 30px 30px;\"\r\n            [style.border-color]=\"!isMicroOpen? '#999999' : '#0084ff'\"\r\n            [style.background-color]=\"isMicroOpen? '#0084ff' : 'white'\">\r\n            <i [ngClass]=\"isMicroOpen? 'fas fa-microphone media-control-icon media-active' : 'fas fa-microphone-slash media-control-icon'\"\r\n              (click)=\"onOpenAndCloseMicro(!isMicroOpen)\"></i>\r\n\r\n          </div>\r\n          <div class=\"button-control-container\" style=\"background-color: #f03d25;\">\r\n            <i class=\" fas fa-phone endcall-icon\" (click)=\"endCall()\"></i>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!callStatus\" class=\"call-ended-container\">\r\n          <div class=\"call-ended-buttons-container\">\r\n            <div class=\"recompose-button-container\">\r\n              <i class=\" fas fa-phone recompose-icon\" (click)=\"endCall()\"></i>\r\n            </div>\r\n            <p style=\"max-width:80px;\">Redial the number</p>\r\n\r\n          </div>\r\n          <div class=\"call-ended-buttons-container\">\r\n            <div class=\"close-button-container\">\r\n              <i class=\"fas fa-times close-icon\" (click)=\"closeCallWindow()\"></i>\r\n            </div>\r\n            <p>Close</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/main/callRoom/call-room.component.css":
/*!*******************************************************!*\
  !*** ./src/app/main/callRoom/call-room.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-div {\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n.containerUserVideo {\r\n  width: 35vw;\r\n  height: 100%;\r\n  position: absolute;\r\n  padding: 0;\r\n  margin: 0;\r\n  left: calc(50vw - 17.5vw);\r\n  top: 0px;\r\n  z-index: -900;\r\n  overflow: hidden;\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n}\r\n\r\n.user-image {\r\n  height: 100px;\r\n  width: 100px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.main-buttons-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  height: 60%;\r\n}\r\n\r\n.call-ended-buttons-container {\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  height: 100%;\r\n}\r\n\r\n.recompose-button-container {\r\n  width: 44px;\r\n  border-radius: 50%;\r\n  padding: 11px;\r\n  border: 1px solid #0084ff;\r\n  margin: auto;\r\n}\r\n\r\n.close-button-container {\r\n  width: 44px;\r\n  border-radius: 50%;\r\n  padding: 11px 14px 11px 14px;\r\n  border: 1px solid #f03d25;\r\n  margin: auto;\r\n}\r\n\r\n.call-ended-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n.button-control-container {\r\n  border-radius: 50%;\r\n  height: 50px;\r\n  border: 1px solid transparent;\r\n  width: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.buttons-bar-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n/* rgb(28, 30, 33); */\r\n\r\n.userVideoPlayer {\r\n  min-height: 100%;\r\n  margin-right: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.containerSelfVideo {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: flex-end;\r\n  padding: 0;\r\n  margin: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: -1000;\r\n\r\n}\r\n\r\n.close-icon {\r\n  font-size: 20px;\r\n  color: #f03d25;\r\n  cursor: pointer;\r\n}\r\n\r\n.user-info-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.recompose-icon {\r\n  font-size: 20px;\r\n  color: #0084ff;\r\n  cursor: pointer;\r\n}\r\n\r\n.endcall-icon {\r\n  font-size: 20px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.media-control-icon {\r\n  font-size: 20px;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  color: #999999;\r\n}\r\n\r\n.media-active {\r\n\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jYWxsUm9vbS9jYWxsLXJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsUUFBUTtFQUNSLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0VBQ1QsUUFBUTtFQUNSLFNBQVM7RUFDVCxjQUFjOztBQUVoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NhbGxSb29tL2NhbGwtcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyVXNlclZpZGVvIHtcclxuICB3aWR0aDogMzV2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxlZnQ6IGNhbGMoNTB2dyAtIDE3LjV2dyk7XHJcbiAgdG9wOiAwcHg7XHJcbiAgei1pbmRleDogLTkwMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4udXNlci1pbWFnZSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubWFpbi1idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcbi5jYWxsLWVuZGVkLWJ1dHRvbnMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucmVjb21wb3NlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAxMXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZmY7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDExcHggMTRweCAxMXB4IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwM2QyNTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jYWxsLWVuZGVkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tY29udHJvbC1jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmJ1dHRvbnMtYmFyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiByZ2IoMjgsIDMwLCAzMyk7ICovXHJcblxyXG4udXNlclZpZGVvUGxheWVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lclNlbGZWaWRlbyB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IC0xMDAwO1xyXG5cclxufVxyXG5cclxuLmNsb3NlLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2YwM2QyNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLWluZm8tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWNvbXBvc2UtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMDA4NGZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmVuZGNhbGwtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZWRpYS1jb250cm9sLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4ubWVkaWEtYWN0aXZlIHtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/main/callRoom/call-room.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main/callRoom/call-room.component.ts ***!
  \******************************************************/
/*! exports provided: CallRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallRoomComponent", function() { return CallRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _call_room_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call-room.service */ "./src/app/main/callRoom/call-room.service.ts");






let CallRoomComponent = class CallRoomComponent {
    constructor(callRoomService, router) {
        this.callRoomService = callRoomService;
        this.router = router;
        this.peer = new Peer(undefined);
        this.time = 0;
        this.stopCallStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.pauseResumeMicroStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.pauseResumeCameraStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.isCameraOpen = false;
        this.isMicroOpen = true;
        this.callStatus = true;
        this.callState = 'Mise en relation...';
        this.ringinSound = new howler__WEBPACK_IMPORTED_MODULE_3__["Howl"]({
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
        this.userVideo = document.getElementById('otherUserVideo');
        this.userVideo.addEventListener('loadedmetadata', () => {
            this.userVideo.play();
        });
        this.myVideo = document.getElementById('userVideo');
        this.myVideo.addEventListener('loadedmetadata', () => {
            this.myVideo.play();
        });
        this.peer.on('open', id => {
            this.callRoomService.startCall(this.roomId, id);
        });
        this.callRoomService.userDisconnectFromRoom()
            .subscribe(() => {
            this.stopTimer();
            this.stopCallStream.next(true);
            this.callStatus = false;
            this.callState = 'Call Ended';
            this.isOtherUserCameraOpen = false;
        });
        this.callRoomService.onCallEnded()
            .subscribe(res => {
            // this.ringinSound.stop() 
            this.isOtherUserCameraOpen = false;
            if (this.time > 0) {
                this.stopTimer();
                this.callStatus = false;
                this.callState = 'Call Ended...';
                if (this.isCaller) {
                    this.callRoomService.getConversationByUsers(this.userCallDes._id)
                        .subscribe((response) => {
                        this.callRoomService.logCall(response.conversation._id, true, this.isVideoCall)
                            .subscribe();
                    });
                }
            }
            else {
                this.callStatus = false;
                this.callState = 'Call Ended...';
                if (this.isCaller) {
                    this.callRoomService.getConversationByUsers(this.userCallDes._id)
                        .subscribe((response) => {
                        this.callRoomService.logCall(response.conversation._id, false, false)
                            .subscribe();
                    });
                }
            }
            this.stopCallStream.next(true);
        });
        const userIds = this.roomId.split('-');
        this.callRoomService.onCallState()
            .subscribe(state => {
            if (state) {
                this.callStatus = true;
                this.callState = 'its ringing...';
                //this.ringinSound.play()
            }
            else {
                this.callState = 'No answer                    ';
                this.stopCallStream.next(true);
                this.callStatus = false;
                if (this.isCaller)
                    this.callRoomService.getConversationByUsers(this.userCallDes._id)
                        .subscribe((response) => {
                        this.callRoomService.logCall(response.conversation._id, false, false)
                            .subscribe();
                    });
            }
        });
        this.callRoomService.getConnectUser()
            .subscribe((response) => {
            console.log(response);
            this.connectedUser = response.user;
            this.callRoomService.getUserById(this.connectedUser._id == userIds[1] ? userIds[0] : userIds[1])
                .subscribe((response) => {
                this.userCallDes = response;
                if (this.isCaller)
                    this.callRoomService.callUser(this.connectedUser._id, this.userCallDes._id, this.isVideoCall);
                else {
                    this.startTimer();
                    this.isOtherUserCameraOpen = this.isVideoCall;
                }
            });
        });
        this.callRoomService.onCameraStateChanged()
            .subscribe((action) => {
            this.isOtherUserCameraOpen = action;
            this.isVideoCall = this.isCameraOpen || action;
        });
        this.createCall();
    }
    endCall() {
        if (this.time > 0) {
            this.stopTimer();
        }
        this.callStatus = false;
        this.callState = 'Call Ended';
        this.isOtherUserCameraOpen = false;
        this.callRoomService.endCall(this.userCallDes, false);
        this.callRoomService.endCall(this.userCallDes, true);
        this.stopCallStream.next(true);
        if (this.isCaller) {
            this.callRoomService.getConversationByUsers(this.userCallDes._id)
                .subscribe((response) => {
                this.callRoomService.logCall(response.conversation._id, true, this.isVideoCall)
                    .subscribe();
            });
        }
    }
    onOpenAndCloseCamera(status) {
        this.isCameraOpen = status;
        this.pauseResumeCameraStream.next(this.isCameraOpen);
        this.callRoomService.userOpenCloseCamera(this.userCallDes._id, status);
        this.isVideoCall = this.isOtherUserCameraOpen || status;
    }
    onOpenAndCloseMicro(status) {
        this.isMicroOpen = status;
        this.pauseResumeMicroStream.next(this.isMicroOpen);
    }
    closeCallWindow() {
        this.callRoomService.setOpenCallWindow(true);
    }
    createCall() {
        this.myVideo.muted = true;
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(stream => {
            if (!this.isVideoCall)
                stream.getVideoTracks().forEach(track => track.enabled = false);
            this.pauseResumeCameraStream
                .subscribe(action => {
                if (action !== null) {
                    stream.getVideoTracks().forEach(track => track.enabled = action);
                }
            });
            this.pauseResumeMicroStream
                .subscribe(action => {
                if (action !== null) {
                    stream.getAudioTracks().forEach(track => track.enabled = action);
                }
            });
            this.stopCallStream
                .subscribe(res => {
                if (res) {
                    stream.getTracks().forEach(track => track.stop());
                    this.myVideo.remove();
                    this.userVideo.remove();
                }
            });
            this.myVideo.srcObject = stream;
            this.peer.on('call', call => {
                call.answer(stream);
                call.on('stream', userVideoStream => {
                    this.userVideo.srcObject = userVideoStream;
                });
            });
            this.callRoomService.userJoiningRoom()
                .subscribe(userId => {
                this.startTimer();
                this.connectToNewUser(userId, stream);
                this.isOtherUserCameraOpen = this.isVideoCall;
            });
        });
    }
    connectToNewUser(userId, stream) {
        const call = this.peer.call(userId, stream);
        call.on('stream', userVideoStream => {
            this.userVideo.srcObject = userVideoStream;
        });
        call.on('close', () => {
            console.log('call ended');
        });
    }
    startTimer() {
        this.interval = setInterval(() => {
            if (this.time === 0) {
                this.time++;
            }
            else {
                this.time++;
            }
            this.callState = this.transform(this.time);
        }, 1000);
    }
    transform(value) {
        const minutes = Math.floor(value / 60);
        const seconds = (value - minutes * 60);
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;
        const secondsStr = seconds < 10 ? '0' + seconds : seconds;
        return `${minutesStr}:${secondsStr}`;
    }
    pauseTimer() {
        clearInterval(this.interval);
    }
    stopTimer() {
        clearInterval(this.interval);
        this.time = 0;
    }
};
CallRoomComponent.ctorParameters = () => [
    { type: _call_room_service__WEBPACK_IMPORTED_MODULE_5__["CallRoomService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CallRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mainpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./call-room.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/callRoom/call-room.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./call-room.component.css */ "./src/app/main/callRoom/call-room.component.css")).default]
    })
], CallRoomComponent);



/***/ }),

/***/ "./src/app/main/callRoom/call-room.module.ts":
/*!***************************************************!*\
  !*** ./src/app/main/callRoom/call-room.module.ts ***!
  \***************************************************/
/*! exports provided: CallRoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallRoomModule", function() { return CallRoomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _call_room_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call-room.component */ "./src/app/main/callRoom/call-room.component.ts");
/* harmony import */ var _call_room_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call-room.service */ "./src/app/main/callRoom/call-room.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







const RoomRoutes = [
    {
        path: ':id',
        component: _call_room_component__WEBPACK_IMPORTED_MODULE_4__["CallRoomComponent"]
    },
    {
        path: '**',
        redirectTo: '/chat/messenger'
    }
];
let CallRoomModule = class CallRoomModule {
};
CallRoomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _call_room_component__WEBPACK_IMPORTED_MODULE_4__["CallRoomComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(RoomRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [_call_room_service__WEBPACK_IMPORTED_MODULE_5__["CallRoomService"]],
    })
], CallRoomModule);



/***/ }),

/***/ "./src/app/main/callRoom/call-room.service.ts":
/*!****************************************************!*\
  !*** ./src/app/main/callRoom/call-room.service.ts ***!
  \****************************************************/
/*! exports provided: CallRoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallRoomService", function() { return CallRoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");





let CallRoomService = class CallRoomService {
    constructor(http, socket) {
        this.http = http;
        this.socket = socket;
        this.closeCallWindow = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.socket.emit('connectuser', localStorage.getItem('token'), true);
    }
    startCall(roomId, userPeerId) {
        this.socket.emit('join-room', roomId, userPeerId);
    }
    userDisconnectFromRoom() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            this.socket.on('user-disconnected-from-room', (data) => {
                console.log(data);
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
    getConversationByUsers(userid) {
        return this.http.get('https://vartlaaap.herokuapp.com/conversation/byusers/' + userid);
    }
    logCall(conversationId, isAnsweredCall, isVideoCall) {
        return this.http.post('https://vartlaaap.herokuapp.com/conversation/call/' + conversationId, { isAnsweredCall, isVideoCall });
    }
    callUser(callerUserId, receiverUserId, isVideoCall) {
        this.socket.emit('call-user', callerUserId, receiverUserId, isVideoCall);
    }
    onCallEnded() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            this.socket.on('call-ended', (data) => {
                console.log('hey call ended');
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
    onCameraStateChanged() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            this.socket.on('onCameraStateChange', (data) => {
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
    userOpenCloseCamera(DestUserId, action) {
        this.socket.emit('cameraOpenClose', DestUserId, action);
    }
    onCallState() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            this.socket.on('user-call-state', (data) => {
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
    getUserById(userId) {
        return this.http.get(`https://vartlaaap.herokuapp.com/user/${userId}`);
    }
    getConnectUser() {
        return this.http.get('https://vartlaaap.herokuapp.com/user/bytoken');
    }
    endCall(userCaller, fromCaller) {
        this.socket.emit('end-call', userCaller, fromCaller);
    }
    setOpenCallWindow(bool) {
        this.closeCallWindow.next(bool);
    }
    userJoiningRoom() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            this.socket.on('userConnectedToRoom', (data) => {
                console.log(data);
                observer.next(data);
            });
            return () => this.socket.disconnect();
        });
        return observable;
    }
};
CallRoomService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] }
];
CallRoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CallRoomService);



/***/ })

}]);
//# sourceMappingURL=main-callRoom-call-room-module-es2015.js.map