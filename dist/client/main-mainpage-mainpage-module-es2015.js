(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-mainpage-mainpage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainpage/profileSettings/profilesettings.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainpage/profileSettings/profilesettings.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"userProfile\">\r\n  <div *ngIf=\"showUsernameModal\">\r\n    <div class=\"backdrop-container\" (click)=\"onShowUsernameModal(false)\">\r\n    </div>\r\n    <div class=\"modal-container\">\r\n      <div class=\"modal-title\">\r\n        <h4>\r\n          Change username\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-content-text\">\r\n        <input class=\"modal-input\" [placeholder]=\"userProfile.username\" [(ngModel)]=\"editedUsername\" />\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <div>\r\n          <button class=\"button-success\" (click)=\"onShowUsernameModal(false)\">Cancel</button>\r\n          <button class=\"button-danger\" (click)=\"saveUsername()\">To register</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"showNameModal\">\r\n    <div class=\"backdrop-container\" (click)=\"onShowNameModal(false)\">\r\n    </div>\r\n    <div class=\"modal-container\">\r\n      <div class=\"modal-title\">\r\n        <h4>\r\n          Change name\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-content-text\">\r\n        <input class=\"modal-input\" [placeholder]=\"userProfile.name\" [(ngModel)]=\"editedName\" />\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <div>\r\n          <button class=\"button-success\" (click)=\"onShowNameModal(false)\">Annuler</button>\r\n          <button class=\"button-danger\" (click)=\"saveName()\">Enregister</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"showSurnameModal\">\r\n    <div class=\"backdrop-container\" (click)=\"onShowSurnameModal(false)\">\r\n    </div>\r\n    <div class=\"modal-container\">\r\n      <div class=\"modal-title\">\r\n        <h4>\r\n          Change surname\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-content-text\">\r\n        <input class=\"modal-input\" [placeholder]=\"userProfile.surname\" [(ngModel)]=\"editedSurname\" />\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <div>\r\n          <button class=\"button-success\" (click)=\"onShowSurnameModal(false)\">Annuler</button>\r\n          <button class=\"button-danger\" (click)=\"saveSurname()\">Enregister</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"showPhoneModal\">\r\n    <div class=\"backdrop-container\" (click)=\"onShowPhoneModal(false)\">\r\n    </div>\r\n    <div class=\"modal-container\">\r\n      <div class=\"modal-title\">\r\n        <h4>\r\n          Change phone number\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-content-text\">\r\n        <input class=\"modal-input\" [placeholder]=\"userProfile.Phone\" [(ngModel)]=\"editedPhone\" />\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <div>\r\n          <button class=\"button-success\" (click)=\"onShowPhoneModal(false)\">Annuler</button>\r\n          <button class=\"button-danger\" (click)=\"savePhone()\">Enregister</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"showAddressModal\">\r\n    <div class=\"backdrop-container\" (click)=\"onShowAddressModal(false)\">\r\n    </div>\r\n    <div class=\"modal-container\">\r\n      <div class=\"modal-title\">\r\n        <h4>\r\n          Change address\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-content-text\">\r\n        <input class=\"modal-input\" [placeholder]=\"userProfile.address\" [(ngModel)]=\"editedAddress\" />\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <div>\r\n          <button class=\"button-success\" (click)=\"onShowAddressModal(false)\">Close</button>\r\n          <button class=\"button-danger\" (click)=\"saveAddress()\">To register</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"showPasswordModal\">\r\n    <div class=\"backdrop-container\" (click)=\"onShowPasswordModal(false)\">\r\n    </div>\r\n    <div class=\"modal-container\">\r\n      <div class=\"modal-title\">\r\n        <h4>\r\n          Change password\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-content-text\">\r\n        <div>\r\n\r\n          <input class=\"modal-input\" type=\"password\" placeholder=\"old Password\" [(ngModel)]=\"editedOldPassword\"\r\n            (focus)=\"resetErrorMsg()\" />\r\n          <input class=\"modal-input\" type=\"password\" placeholder=\"new password\" [(ngModel)]=\"editedNewPassword\"\r\n            (focus)=\"resetErrorMsg()\" />\r\n          <input class=\"modal-input\" type=\"password\" placeholder=\"re-enter new password\" (focus)=\"resetErrorMsg()\"\r\n            [(ngModel)]=\"editedReNewPassword\" />\r\n          <div style=\"display: flex;padding-top: 10px;justify-content: center;align-items: center;\">\r\n            <h5 style=\"font-size: 14px;font-weight: 400;color:#f03d25\">{{editPasswordError}}</h5>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <div>\r\n          <button class=\"button-success\" (click)=\"onShowPasswordModal(false)\">Close</button>\r\n          <button class=\"button-danger\" (click)=\"savePassword()\">To register          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-12 col-md-12\">\r\n    <div class=\"profile-box\">\r\n      <div class=\"profile-info-container\">\r\n        <div style=\"display: flex;justify-content: center;align-items: center;\">\r\n          <div class=\"image-container\">\r\n            <div class=\"edit-image-container\">\r\n              <i class=\"far fa-edit edit-image-icon\" (click)=\"uploadImage.click()\"></i>\r\n            </div>\r\n            <div class=\"profile-image\" [style.background-image]=\"'url('+userProfile.profileImg+')'\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"display: flex;justify-content: center;align-items: center;padding-top: 10px;\">\r\n          <h4 class=\"user-name\">\r\n            {{userProfile.surname}} {{userProfile.name}}\r\n          </h4>\r\n        </div>\r\n        <div style=\"display: flex;justify-content: center;align-items: center;\">\r\n          <h4 class=\"field-title\">\r\n            Member since: <span class=\"field-content\">{{transformDateJoin(userProfile.joinDate)}}</span>\r\n          </h4>\r\n        </div>\r\n        <div style=\"margin-top: 20px;\">\r\n          <div class=\"field-container\">\r\n            <h4 class=\"field-title\">\r\n              Username: <span class=\"field-content\">{{userProfile.username}}</span>\r\n              <i class=\"far fa-edit edit-icon\" (click)=\"onShowUsernameModal(true)\"></i>\r\n            </h4>\r\n\r\n          </div>\r\n          <div class=\"field-container\">\r\n            <h4 class=\"field-title\">\r\n              name: <span class=\"field-content\">{{userProfile.name}}</span>\r\n              <i class=\"far fa-edit edit-icon\" (click)=\"onShowNameModal(true)\"></i>\r\n            </h4>\r\n\r\n          </div>\r\n          <div class=\"field-container\">\r\n            <h4 class=\"field-title\">\r\n              Surname: <span class=\"field-content\">{{userProfile.surname}}</span>\r\n              <i class=\"far fa-edit edit-icon\" (click)=\"onShowSurnameModal(true)\"></i>\r\n            </h4>\r\n          </div>\r\n          <div class=\"field-container\">\r\n            <h4 class=\"field-title\">\r\n              Password: <span class=\"field-content\">*********</span>\r\n              <i class=\"far fa-edit edit-icon\" (click)=\"onShowPasswordModal(true)\"></i>\r\n            </h4>\r\n          </div>\r\n          <div class=\"field-container\">\r\n            <h4 class=\"field-title\">\r\n              Phone: <span class=\"field-content\">{{userProfile.tel}}</span>\r\n              <i class=\"far fa-edit edit-icon\" (click)=\"onShowPhoneModal(true)\"></i>\r\n            </h4>\r\n\r\n          </div>\r\n          <div class=\"field-container\">\r\n            <h4 class=\"field-title\">\r\n              Address: <span class=\"field-content\">{{userProfile.address}}</span>\r\n              <i class=\"far fa-edit edit-icon\" (click)=\"onShowAddressModal(true)\"></i>\r\n            </h4>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <input type=\"file\" #uploadImage style=\"display: none;\" (change)=\"uploadFileHandler($event.target.files[0])\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/main/mainpage/mainpage.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/mainpage/mainpage.module.ts ***!
  \**************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _mainpage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainpage.service */ "./src/app/main/mainpage/mainpage.service.ts");
/* harmony import */ var _profileSettings_profilesettings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profileSettings/profilesettings.component */ "./src/app/main/mainpage/profileSettings/profilesettings.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







const MainPageRoutes = [
    {
        path: 'settings',
        component: _profileSettings_profilesettings_component__WEBPACK_IMPORTED_MODULE_5__["ProfileSettingsComponent"],
    },
    {
        path: 'messenger',
        loadChildren: './messenger/messenger.module#MessengerModule',
    },
    {
        path: '**',
        redirectTo: 'messenger',
    },
];
let MainPageModule = class MainPageModule {
};
MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _profileSettings_profilesettings_component__WEBPACK_IMPORTED_MODULE_5__["ProfileSettingsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(MainPageRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        providers: [_mainpage_service__WEBPACK_IMPORTED_MODULE_4__["MainPageService"]],
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/main/mainpage/profileSettings/profilesettings.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/main/mainpage/profileSettings/profilesettings.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-box {\r\n  padding: 100px 0 20px 0;\r\n  box-shadow: 0 0px 10px rgba(0, 0, 0, .3);\r\n  height: 85vh;\r\n}\r\n\r\n.image-container {\r\n  box-shadow: 0 0px 10px rgba(0, 0, 0, .3);\r\n  border-radius: 50%;\r\n  position: relative;\r\n\r\n}\r\n\r\n.edit-image-icon {\r\n\r\n  font-size: 18px;\r\n  color: white;\r\n\r\n}\r\n\r\n.profile-image {\r\n  width: 150px;\r\n  height: 150px;\r\n  background-position: 50% 50%;\r\n  background-repeat: none;\r\n  background-size: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.edit-image-container {\r\n  position: absolute;\r\n  top: 75px;\r\n  display: flex;\r\n  visibility: hidden;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-bottom-left-radius: 100px;\r\n  border-bottom-right-radius: 100px;\r\n  left: 0;\r\n  width: 150px;\r\n  height: 75px;\r\n  background-color: rgba(0, 0, 0, .4);\r\n}\r\n\r\n.image-container:hover .edit-image-container {\r\n  visibility: visible;\r\n\r\n}\r\n\r\n.backdrop-container {\r\n\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 999;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.modal-footer {\r\n  display: flex;\r\n  margin-top: 30px;\r\n  align-items: flex-end;\r\n  padding: 0;\r\n}\r\n\r\n.button-success {\r\n\r\n  font-weight: 400;\r\n  outline: none;\r\n  font-size: 16px;\r\n  background-color: transparent;\r\n  color: rgb(0, 153, 255);\r\n  padding: 10px;\r\n  border: 0;\r\n\r\n}\r\n\r\n.button-danger {\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  border: 0;\r\n  outline: none;\r\n  color: #f03d25;\r\n  background-color: transparent;\r\n  padding: 10px;\r\n}\r\n\r\n.modal-container {\r\n  --width: 500px;\r\n  background-color: white;\r\n  border-radius: 8px;\r\n  min-height: 200px;\r\n  position: fixed;\r\n  top: 25vh;\r\n  left: calc(50vw - var(--width)/2);\r\n  padding: 20px 20px 0 20px;\r\n  z-index: 99999;\r\n  width: var(--width);\r\n\r\n}\r\n\r\n.modal-input {\r\n  padding: 10px 20px 10px 20px;\r\n  margin-top: 10px;\r\n  width: 100%;\r\n  outline: none;\r\n}\r\n\r\n.modal-input:focus {\r\n  border: 2px solid rgb(0, 153, 255);\r\n}\r\n\r\n.modal-content-text {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 40px;\r\n}\r\n\r\n.field-title {\r\n\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  margin: 0;\r\n}\r\n\r\n.field-content {\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  color: #999999;\r\n}\r\n\r\n.edit-icon {\r\n\r\n  margin-left: 10px;\r\n  font-size: 16px;\r\n  color: #0084ff;\r\n  cursor: pointer;\r\n}\r\n\r\n.field-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 20px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWlucGFnZS9wcm9maWxlU2V0dGluZ3MvcHJvZmlsZXNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsd0NBQXdDO0VBQ3hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsa0JBQWtCOztBQUVwQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyxPQUFPO0VBQ1AsWUFBWTtFQUNaLFlBQVk7RUFDWixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxtQkFBbUI7O0FBRXJCOztBQUVBOztFQUVFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixTQUFTOztBQUVYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtFQUNiLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUdBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnBhZ2UvcHJvZmlsZVNldHRpbmdzL3Byb2ZpbGVzZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtYm94IHtcclxuICBwYWRkaW5nOiAxMDBweCAwIDIwcHggMDtcclxuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gIGhlaWdodDogODV2aDtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuLmVkaXQtaW1hZ2UtaWNvbiB7XHJcblxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmVkaXQtaW1hZ2UtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogNzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lcjpob3ZlciAuZWRpdC1pbWFnZS1jb250YWluZXIge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcblxyXG59XHJcblxyXG4uYmFja2Ryb3AtY29udGFpbmVyIHtcclxuXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5idXR0b24tc3VjY2VzcyB7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHJnYigwLCAxNTMsIDI1NSk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDA7XHJcblxyXG59XHJcblxyXG4uYnV0dG9uLWRhbmdlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICNmMDNkMjU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuXHJcbi5tb2RhbC1jb250YWluZXIge1xyXG4gIC0td2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAyNXZoO1xyXG4gIGxlZnQ6IGNhbGMoNTB2dyAtIHZhcigtLXdpZHRoKS8yKTtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4O1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIHdpZHRoOiB2YXIoLS13aWR0aCk7XHJcblxyXG59XHJcblxyXG4ubW9kYWwtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAxNTMsIDI1NSk7XHJcbn1cclxuXHJcblxyXG4ubW9kYWwtY29udGVudC10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uZmllbGQtdGl0bGUge1xyXG5cclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5maWVsZC1jb250ZW50IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxuLmVkaXQtaWNvbiB7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzAwODRmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWVsZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/main/mainpage/profileSettings/profilesettings.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/mainpage/profileSettings/profilesettings.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsComponent", function() { return ProfileSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mainpage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mainpage.service */ "./src/app/main/mainpage/mainpage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




moment__WEBPACK_IMPORTED_MODULE_3__["locale"]('fr');
let ProfileSettingsComponent = class ProfileSettingsComponent {
    constructor(mainPageService) {
        this.mainPageService = mainPageService;
        this.showUsernameModal = false;
        this.showPhoneModal = false;
        this.showAddressModal = false;
        this.showSurnameModal = false;
        this.showNameModal = false;
        this.showPasswordModal = false;
        this.editPasswordError = '';
    }
    ngOnInit() {
        this.mainPageService.getConnectUser()
            .subscribe((response) => {
            this.userProfile = response.user;
        });
    }
    onShowUsernameModal(status) {
        this.showUsernameModal = status;
    }
    onShowNameModal(status) {
        this.showNameModal = status;
    }
    onShowPhoneModal(status) {
        this.showPhoneModal = status;
    }
    onShowAddressModal(status) {
        this.showAddressModal = status;
    }
    onShowSurnameModal(status) {
        this.showSurnameModal = status;
    }
    onShowPasswordModal(status) {
        this.showPasswordModal = status;
    }
    uploadFileHandler(file) {
        try {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.userProfile.profileImg = e.target.result;
            };
            reader.readAsDataURL(file);
            this.mainPageService.updateUserProfileImg(file)
                .subscribe((response) => {
                this.userProfile.profileImg = response.imageUrl;
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    saveUsername() {
        this.userProfile.username = this.editedUsername;
        this.mainPageService.updateUserInfo(this.userProfile)
            .subscribe();
        this.showUsernameModal = false;
    }
    saveName() {
        this.userProfile.name = this.editedName;
        this.mainPageService.updateUserInfo(this.userProfile)
            .subscribe();
        this.showNameModal = false;
    }
    saveSurname() {
        this.userProfile.surname = this.editedSurname;
        this.mainPageService.updateUserInfo(this.userProfile)
            .subscribe();
        this.showSurnameModal = false;
    }
    savePassword() {
        if (this.editedNewPassword == this.editedReNewPassword) {
            this.mainPageService.updateUserPassword(this.editedOldPassword, this.editedNewPassword)
                .subscribe(() => {
                this.showPasswordModal = false;
                this.editedOldPassword = this.editedNewPassword = this.editedReNewPassword = '';
            }, () => {
                this.editPasswordError = 'Old password is wrong';
            });
        }
        else {
            this.editPasswordError = "Passwords didn\'t match";
        }
    }
    transformDateJoin(date) {
        const _Date = new Date(date);
        const _nowDate = new Date();
        const nowYear = _nowDate.getFullYear();
        const year = +_Date.getFullYear();
        if (year == nowYear) {
            return moment__WEBPACK_IMPORTED_MODULE_3__(new Date(date)).format('DD MMMM');
        }
        return moment__WEBPACK_IMPORTED_MODULE_3__(new Date(date)).format('DD MMMM YYYY');
    }
    savePhone() {
        this.userProfile.tel = this.editedPhone;
        this.mainPageService.updateUserInfo(this.userProfile)
            .subscribe();
        this.showPhoneModal = false;
    }
    saveAddress() {
        this.userProfile.address = this.editedAddress;
        this.mainPageService.updateUserInfo(this.userProfile)
            .subscribe();
        this.showAddressModal = false;
    }
    resetErrorMsg() {
        this.editPasswordError = '';
    }
};
ProfileSettingsComponent.ctorParameters = () => [
    { type: _mainpage_service__WEBPACK_IMPORTED_MODULE_2__["MainPageService"] }
];
ProfileSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profilesettings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/mainpage/profileSettings/profilesettings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profilesettings.component.css */ "./src/app/main/mainpage/profileSettings/profilesettings.component.css")).default]
    })
], ProfileSettingsComponent);



/***/ })

}]);
//# sourceMappingURL=main-mainpage-mainpage-module-es2015.js.map