function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-callRoom-call-room-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/callRoom/call-room.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/callRoom/call-room.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainCallRoomCallRoomComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"containerSelfVideo\" [style.background-color]=\"isCameraOpen ? 'rgb(28, 30, 33)' : 'transparent'\">\r\n  <video id=\"userVideo\" class=\"selfVideoPlayer\" [style.display]=\"isCameraOpen ? 'inline' : 'none'\" height=\"200px\"\r\n    width=\"200px\">\r\n    <source>\r\n  </video>\r\n</div>\r\n<div class=\"containerUserVideo\">\r\n  <video class=\"userVideoPlayer\" id=\"otherUserVideo\" [style.display]=\"isOtherUserCameraOpen ? 'inline' : 'none'\">\r\n    <source>\r\n  </video>\r\n</div>\r\n<div *ngIf=\"userCallDes\" class=\"main-div\">\r\n  <div class=\"row\" style=\"height: 100%;\">\r\n    <div class=\"col-12\" style=\"height: 100%; padding-top: 200px;\">\r\n      <div *ngIf=\"!isOtherUserCameraOpen\" class=\"user-info-container\">\r\n        <img [src]=\"userCallDes.profileImg\" class=\"user-image\" />\r\n      </div>\r\n      <div *ngIf=\"!isOtherUserCameraOpen\">\r\n        <div style=\" margin-top: 30px;\" class=\"user-info-container\">\r\n          <p style=\"font-weight: 800;font-size: 18px;\" [style.color]=\"isCameraOpen? 'white': 'black'\">\r\n            {{userCallDes?.surname}} {{userCallDes?.name}}.</p>\r\n        </div>\r\n        <div class=\"user-info-container\">\r\n          <p style=\"color: #999999;\">{{callState}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"main-buttons-container\" [style.margin-top]=\"isOtherUserCameraOpen ? '190px':'0'\">\r\n        <div *ngIf=\"callStatus\" class=\"buttons-bar-container\">\r\n          <div class=\"button-control-container\" [style.border-color]=\"!isCameraOpen? '#999999' : '#0084ff'\"\r\n            [style.background-color]=\"isCameraOpen? '#0084ff' : 'white' \">\r\n            <i [ngClass]=\"isCameraOpen? 'fas fa-video media-control-icon media-active' : 'fas fa-video-slash media-control-icon'\"\r\n              (click)=\"onOpenAndCloseCamera(!isCameraOpen)\"></i>\r\n          </div>\r\n          <div class=\"button-control-container\" style=\"margin: 30px 30px;\"\r\n            [style.border-color]=\"!isMicroOpen? '#999999' : '#0084ff'\"\r\n            [style.background-color]=\"isMicroOpen? '#0084ff' : 'white'\">\r\n            <i [ngClass]=\"isMicroOpen? 'fas fa-microphone media-control-icon media-active' : 'fas fa-microphone-slash media-control-icon'\"\r\n              (click)=\"onOpenAndCloseMicro(!isMicroOpen)\"></i>\r\n\r\n          </div>\r\n          <div class=\"button-control-container\" style=\"background-color: #f03d25;\">\r\n            <i class=\" fas fa-phone endcall-icon\" (click)=\"endCall()\"></i>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!callStatus\" class=\"call-ended-container\">\r\n          <div class=\"call-ended-buttons-container\">\r\n            <div class=\"recompose-button-container\">\r\n              <i class=\" fas fa-phone recompose-icon\" (click)=\"endCall()\"></i>\r\n            </div>\r\n            <p style=\"max-width:80px;\">Redial the number</p>\r\n\r\n          </div>\r\n          <div class=\"call-ended-buttons-container\">\r\n            <div class=\"close-button-container\">\r\n              <i class=\"fas fa-times close-icon\" (click)=\"closeCallWindow()\"></i>\r\n            </div>\r\n            <p>Close</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/main/callRoom/call-room.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/main/callRoom/call-room.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainCallRoomCallRoomComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-div {\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n.containerUserVideo {\r\n  width: 35vw;\r\n  height: 100%;\r\n  position: absolute;\r\n  padding: 0;\r\n  margin: 0;\r\n  left: calc(50vw - 17.5vw);\r\n  top: 0px;\r\n  z-index: -900;\r\n  overflow: hidden;\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n}\r\n\r\n.user-image {\r\n  height: 100px;\r\n  width: 100px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.main-buttons-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  height: 60%;\r\n}\r\n\r\n.call-ended-buttons-container {\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  height: 100%;\r\n}\r\n\r\n.recompose-button-container {\r\n  width: 44px;\r\n  border-radius: 50%;\r\n  padding: 11px;\r\n  border: 1px solid #0084ff;\r\n  margin: auto;\r\n}\r\n\r\n.close-button-container {\r\n  width: 44px;\r\n  border-radius: 50%;\r\n  padding: 11px 14px 11px 14px;\r\n  border: 1px solid #f03d25;\r\n  margin: auto;\r\n}\r\n\r\n.call-ended-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n.button-control-container {\r\n  border-radius: 50%;\r\n  height: 50px;\r\n  border: 1px solid transparent;\r\n  width: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.buttons-bar-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n/* rgb(28, 30, 33); */\r\n\r\n.userVideoPlayer {\r\n  min-height: 100%;\r\n  margin-right: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.containerSelfVideo {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: flex-end;\r\n  padding: 0;\r\n  margin: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: -1000;\r\n\r\n}\r\n\r\n.close-icon {\r\n  font-size: 20px;\r\n  color: #f03d25;\r\n  cursor: pointer;\r\n}\r\n\r\n.user-info-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.recompose-icon {\r\n  font-size: 20px;\r\n  color: #0084ff;\r\n  cursor: pointer;\r\n}\r\n\r\n.endcall-icon {\r\n  font-size: 20px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.media-control-icon {\r\n  font-size: 20px;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  color: #999999;\r\n}\r\n\r\n.media-active {\r\n\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jYWxsUm9vbS9jYWxsLXJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsUUFBUTtFQUNSLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0VBQ1QsUUFBUTtFQUNSLFNBQVM7RUFDVCxjQUFjOztBQUVoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NhbGxSb29tL2NhbGwtcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyVXNlclZpZGVvIHtcclxuICB3aWR0aDogMzV2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxlZnQ6IGNhbGMoNTB2dyAtIDE3LjV2dyk7XHJcbiAgdG9wOiAwcHg7XHJcbiAgei1pbmRleDogLTkwMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4udXNlci1pbWFnZSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubWFpbi1idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuXHJcbi5jYWxsLWVuZGVkLWJ1dHRvbnMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucmVjb21wb3NlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAxMXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZmY7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDExcHggMTRweCAxMXB4IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwM2QyNTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jYWxsLWVuZGVkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tY29udHJvbC1jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmJ1dHRvbnMtYmFyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiByZ2IoMjgsIDMwLCAzMyk7ICovXHJcblxyXG4udXNlclZpZGVvUGxheWVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lclNlbGZWaWRlbyB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IC0xMDAwO1xyXG5cclxufVxyXG5cclxuLmNsb3NlLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2YwM2QyNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLWluZm8tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWNvbXBvc2UtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMDA4NGZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmVuZGNhbGwtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZWRpYS1jb250cm9sLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4ubWVkaWEtYWN0aXZlIHtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/callRoom/call-room.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/main/callRoom/call-room.component.ts ***!
    \******************************************************/

  /*! exports provided: CallRoomComponent */

  /***/
  function srcAppMainCallRoomCallRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallRoomComponent", function () {
      return CallRoomComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var howler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! howler */
    "./node_modules/howler/dist/howler.js");
    /* harmony import */


    var howler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _call_room_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./call-room.service */
    "./src/app/main/callRoom/call-room.service.ts");

    var CallRoomComponent = /*#__PURE__*/function () {
      function CallRoomComponent(callRoomService, router) {
        _classCallCheck(this, CallRoomComponent);

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

      _createClass(CallRoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.isVideoCall = this.router.snapshot.queryParamMap.get('video') == 'true';
          this.isCameraOpen = this.isVideoCall;
          this.isOtherUserCameraOpen = false;
          this.roomId = this.router.snapshot.paramMap.get('id');
          this.isCaller = this.router.snapshot.queryParamMap.get('iscaller') == 'true';
          this.userVideo = document.getElementById('otherUserVideo');
          this.userVideo.addEventListener('loadedmetadata', function () {
            _this.userVideo.play();
          });
          this.myVideo = document.getElementById('userVideo');
          this.myVideo.addEventListener('loadedmetadata', function () {
            _this.myVideo.play();
          });
          this.peer.on('open', function (id) {
            _this.callRoomService.startCall(_this.roomId, id);
          });
          this.callRoomService.userDisconnectFromRoom().subscribe(function () {
            _this.stopTimer();

            _this.stopCallStream.next(true);

            _this.callStatus = false;
            _this.callState = 'Call Ended';
            _this.isOtherUserCameraOpen = false;
          });
          this.callRoomService.onCallEnded().subscribe(function (res) {
            // this.ringinSound.stop() 
            _this.isOtherUserCameraOpen = false;

            if (_this.time > 0) {
              _this.stopTimer();

              _this.callStatus = false;
              _this.callState = 'Call Ended...';

              if (_this.isCaller) {
                _this.callRoomService.getConversationByUsers(_this.userCallDes._id).subscribe(function (response) {
                  _this.callRoomService.logCall(response.conversation._id, true, _this.isVideoCall).subscribe();
                });
              }
            } else {
              _this.callStatus = false;
              _this.callState = 'Call Ended...';

              if (_this.isCaller) {
                _this.callRoomService.getConversationByUsers(_this.userCallDes._id).subscribe(function (response) {
                  _this.callRoomService.logCall(response.conversation._id, false, false).subscribe();
                });
              }
            }

            _this.stopCallStream.next(true);
          });
          var userIds = this.roomId.split('-');
          this.callRoomService.onCallState().subscribe(function (state) {
            if (state) {
              _this.callStatus = true;
              _this.callState = 'its ringing...'; //this.ringinSound.play()
            } else {
              _this.callState = 'No answer                    ';

              _this.stopCallStream.next(true);

              _this.callStatus = false;
              if (_this.isCaller) _this.callRoomService.getConversationByUsers(_this.userCallDes._id).subscribe(function (response) {
                _this.callRoomService.logCall(response.conversation._id, false, false).subscribe();
              });
            }
          });
          this.callRoomService.getConnectUser().subscribe(function (response) {
            console.log(response);
            _this.connectedUser = response.user;

            _this.callRoomService.getUserById(_this.connectedUser._id == userIds[1] ? userIds[0] : userIds[1]).subscribe(function (response) {
              _this.userCallDes = response;
              if (_this.isCaller) _this.callRoomService.callUser(_this.connectedUser._id, _this.userCallDes._id, _this.isVideoCall);else {
                _this.startTimer();

                _this.isOtherUserCameraOpen = _this.isVideoCall;
              }
            });
          });
          this.callRoomService.onCameraStateChanged().subscribe(function (action) {
            _this.isOtherUserCameraOpen = action;
            _this.isVideoCall = _this.isCameraOpen || action;
          });
          this.createCall();
        }
      }, {
        key: "endCall",
        value: function endCall() {
          var _this2 = this;

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
            this.callRoomService.getConversationByUsers(this.userCallDes._id).subscribe(function (response) {
              _this2.callRoomService.logCall(response.conversation._id, true, _this2.isVideoCall).subscribe();
            });
          }
        }
      }, {
        key: "onOpenAndCloseCamera",
        value: function onOpenAndCloseCamera(status) {
          this.isCameraOpen = status;
          this.pauseResumeCameraStream.next(this.isCameraOpen);
          this.callRoomService.userOpenCloseCamera(this.userCallDes._id, status);
          this.isVideoCall = this.isOtherUserCameraOpen || status;
        }
      }, {
        key: "onOpenAndCloseMicro",
        value: function onOpenAndCloseMicro(status) {
          this.isMicroOpen = status;
          this.pauseResumeMicroStream.next(this.isMicroOpen);
        }
      }, {
        key: "closeCallWindow",
        value: function closeCallWindow() {
          this.callRoomService.setOpenCallWindow(true);
        }
      }, {
        key: "createCall",
        value: function createCall() {
          var _this3 = this;

          this.myVideo.muted = true;
          navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
          }).then(function (stream) {
            if (!_this3.isVideoCall) stream.getVideoTracks().forEach(function (track) {
              return track.enabled = false;
            });

            _this3.pauseResumeCameraStream.subscribe(function (action) {
              if (action !== null) {
                stream.getVideoTracks().forEach(function (track) {
                  return track.enabled = action;
                });
              }
            });

            _this3.pauseResumeMicroStream.subscribe(function (action) {
              if (action !== null) {
                stream.getAudioTracks().forEach(function (track) {
                  return track.enabled = action;
                });
              }
            });

            _this3.stopCallStream.subscribe(function (res) {
              if (res) {
                stream.getTracks().forEach(function (track) {
                  return track.stop();
                });

                _this3.myVideo.remove();

                _this3.userVideo.remove();
              }
            });

            _this3.myVideo.srcObject = stream;

            _this3.peer.on('call', function (call) {
              call.answer(stream);
              call.on('stream', function (userVideoStream) {
                _this3.userVideo.srcObject = userVideoStream;
              });
            });

            _this3.callRoomService.userJoiningRoom().subscribe(function (userId) {
              _this3.startTimer();

              _this3.connectToNewUser(userId, stream);

              _this3.isOtherUserCameraOpen = _this3.isVideoCall;
            });
          });
        }
      }, {
        key: "connectToNewUser",
        value: function connectToNewUser(userId, stream) {
          var _this4 = this;

          var call = this.peer.call(userId, stream);
          call.on('stream', function (userVideoStream) {
            _this4.userVideo.srcObject = userVideoStream;
          });
          call.on('close', function () {
            console.log('call ended');
          });
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this5 = this;

          this.interval = setInterval(function () {
            if (_this5.time === 0) {
              _this5.time++;
            } else {
              _this5.time++;
            }

            _this5.callState = _this5.transform(_this5.time);
          }, 1000);
        }
      }, {
        key: "transform",
        value: function transform(value) {
          var minutes = Math.floor(value / 60);
          var seconds = value - minutes * 60;
          var minutesStr = minutes < 10 ? '0' + minutes : minutes;
          var secondsStr = seconds < 10 ? '0' + seconds : seconds;
          return "".concat(minutesStr, ":").concat(secondsStr);
        }
      }, {
        key: "pauseTimer",
        value: function pauseTimer() {
          clearInterval(this.interval);
        }
      }, {
        key: "stopTimer",
        value: function stopTimer() {
          clearInterval(this.interval);
          this.time = 0;
        }
      }]);

      return CallRoomComponent;
    }();

    CallRoomComponent.ctorParameters = function () {
      return [{
        type: _call_room_service__WEBPACK_IMPORTED_MODULE_5__["CallRoomService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    CallRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mainpage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./call-room.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/callRoom/call-room.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./call-room.component.css */
      "./src/app/main/callRoom/call-room.component.css"))["default"]]
    })], CallRoomComponent);
    /***/
  },

  /***/
  "./src/app/main/callRoom/call-room.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/main/callRoom/call-room.module.ts ***!
    \***************************************************/

  /*! exports provided: CallRoomModule */

  /***/
  function srcAppMainCallRoomCallRoomModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallRoomModule", function () {
      return CallRoomModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _call_room_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./call-room.component */
    "./src/app/main/callRoom/call-room.component.ts");
    /* harmony import */


    var _call_room_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./call-room.service */
    "./src/app/main/callRoom/call-room.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var RoomRoutes = [{
      path: ':id',
      component: _call_room_component__WEBPACK_IMPORTED_MODULE_4__["CallRoomComponent"]
    }, {
      path: '**',
      redirectTo: '/chat/messenger'
    }];

    var CallRoomModule = function CallRoomModule() {
      _classCallCheck(this, CallRoomModule);
    };

    CallRoomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_call_room_component__WEBPACK_IMPORTED_MODULE_4__["CallRoomComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(RoomRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [_call_room_service__WEBPACK_IMPORTED_MODULE_5__["CallRoomService"]]
    })], CallRoomModule);
    /***/
  },

  /***/
  "./src/app/main/callRoom/call-room.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/main/callRoom/call-room.service.ts ***!
    \****************************************************/

  /*! exports provided: CallRoomService */

  /***/
  function srcAppMainCallRoomCallRoomServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallRoomService", function () {
      return CallRoomService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");

    var CallRoomService = /*#__PURE__*/function () {
      function CallRoomService(http, socket) {
        _classCallCheck(this, CallRoomService);

        this.http = http;
        this.socket = socket;
        this.closeCallWindow = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.socket.emit('connectuser', localStorage.getItem('token'), true);
      }

      _createClass(CallRoomService, [{
        key: "startCall",
        value: function startCall(roomId, userPeerId) {
          this.socket.emit('join-room', roomId, userPeerId);
        }
      }, {
        key: "userDisconnectFromRoom",
        value: function userDisconnectFromRoom() {
          var _this6 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this6.socket.on('user-disconnected-from-room', function (data) {
              console.log(data);
              observer.next(data);
            });

            return function () {
              return _this6.socket.disconnect();
            };
          });
          return observable;
        }
      }, {
        key: "getConversationByUsers",
        value: function getConversationByUsers(userid) {
          return this.http.get('https://vartlaaap.herokuapp.com/conversation/byusers/' + userid);
        }
      }, {
        key: "logCall",
        value: function logCall(conversationId, isAnsweredCall, isVideoCall) {
          return this.http.post('https://vartlaaap.herokuapp.com/conversation/call/' + conversationId, {
            isAnsweredCall: isAnsweredCall,
            isVideoCall: isVideoCall
          });
        }
      }, {
        key: "callUser",
        value: function callUser(callerUserId, receiverUserId, isVideoCall) {
          this.socket.emit('call-user', callerUserId, receiverUserId, isVideoCall);
        }
      }, {
        key: "onCallEnded",
        value: function onCallEnded() {
          var _this7 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this7.socket.on('call-ended', function (data) {
              console.log('hey call ended');
              observer.next(data);
            });

            return function () {
              return _this7.socket.disconnect();
            };
          });
          return observable;
        }
      }, {
        key: "onCameraStateChanged",
        value: function onCameraStateChanged() {
          var _this8 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this8.socket.on('onCameraStateChange', function (data) {
              observer.next(data);
            });

            return function () {
              return _this8.socket.disconnect();
            };
          });
          return observable;
        }
      }, {
        key: "userOpenCloseCamera",
        value: function userOpenCloseCamera(DestUserId, action) {
          this.socket.emit('cameraOpenClose', DestUserId, action);
        }
      }, {
        key: "onCallState",
        value: function onCallState() {
          var _this9 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this9.socket.on('user-call-state', function (data) {
              observer.next(data);
            });

            return function () {
              return _this9.socket.disconnect();
            };
          });
          return observable;
        }
      }, {
        key: "getUserById",
        value: function getUserById(userId) {
          return this.http.get("https://vartlaaap.herokuapp.com/user/".concat(userId));
        }
      }, {
        key: "getConnectUser",
        value: function getConnectUser() {
          return this.http.get('https://vartlaaap.herokuapp.com/user/bytoken');
        }
      }, {
        key: "endCall",
        value: function endCall(userCaller, fromCaller) {
          this.socket.emit('end-call', userCaller, fromCaller);
        }
      }, {
        key: "setOpenCallWindow",
        value: function setOpenCallWindow(bool) {
          this.closeCallWindow.next(bool);
        }
      }, {
        key: "userJoiningRoom",
        value: function userJoiningRoom() {
          var _this10 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this10.socket.on('userConnectedToRoom', function (data) {
              console.log(data);
              observer.next(data);
            });

            return function () {
              return _this10.socket.disconnect();
            };
          });
          return observable;
        }
      }]);

      return CallRoomService;
    }();

    CallRoomService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]
      }];
    };

    CallRoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CallRoomService);
    /***/
  }
}]);
//# sourceMappingURL=main-callRoom-call-room-module-es5.js.map