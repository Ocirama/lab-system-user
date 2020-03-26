(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tray-tray-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tray/tray.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tray/tray.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div ng class=\"buttons\">\r\n<button class=\"btn1\" mat-flat-button color=\"primary\"  (click)=\"swalCalibration()\">Kalibracija</button>\r\n<button class=\"btn1\" mat-flat-button color=\"primary\" (click)=\"this.selectedOption = true; this.selectedOption2 = false\"> Naujo padėklo svėrimas</button>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"selectedOption\">\r\n <div >Naujo padėklo svėrimas</div>\r\n  <label>Skenuokite padėklą :</label>\r\n  <input tabIndex=\"1\" matInput [(ngModel)]=\"trays.trayId\" name=\"trayId\">\r\n  <label>Sverkite padėklą :</label>\r\n  <input tabIndex=\"2\" matInput [(ngModel)]=\"trays.trayWeight\" name=\"trayWeight\">\r\n  <button mat-button class=\"btn btn-secondary\" (click)=\"onSubmit(trays)\" type=\"button\"></button>\r\n</div>\r\n\r\n<div  class=\"container-fluid\" *ngIf=\"selectedOption2\">\r\n\r\n  <div>Kalibracija</div>\r\n  <label >Skenuokite padėklą :</label>\r\n  <input tabIndex=\"1\" (focus)=\"trays.trayId = null\" (focusout)=\"childFunction(trays)\" matInput [(ngModel)]=\"trays.trayId\" name=\"trayId\">\r\n  <label>Sverkite padėklą :</label>\r\n  <input tabIndex=\"2\" (keyup.enter)=\"trays.trayWeight = null\"  matInput [(ngModel)]=\"trays.trayWeight\" name=\"trayWeight\">\r\n    <button tabIndex=\"3\" mat-button class=\"btn btn-secondary\" (keydown.enter)=\"onSubmit(trays)\" type=\"button\"></button>\r\n</div>\r\n<br>\r\n{{this.trays | json}}\r\n{{trays| json}}\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/tray/tray-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tray/tray-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TrayRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrayRoutingModule", function() { return TrayRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tray_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tray.component */ "./src/app/tray/tray.component.ts");




const routes = [
    {
        path: '',
        component: _tray_component__WEBPACK_IMPORTED_MODULE_3__["TrayComponent"]
    }
];
let TrayRoutingModule = class TrayRoutingModule {
};
TrayRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TrayRoutingModule);



/***/ }),

/***/ "./src/app/tray/tray.component.css":
/*!*****************************************!*\
  !*** ./src/app/tray/tray.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\nh1 {\r\n  text-align: center;\r\n}\r\n.md-button {\r\n  padding: 0 6px 0 6px;\r\n  margin: 6px 8px 6px 8px;\r\n  min-width: 88px;\r\n  border-radius: 3px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  text-decoration:none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.btn1{\r\n  color : azure;\r\n  background-color: deepskyblue;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n  width:100%;\r\n}\r\n.buttons{\r\n  margin: auto;\r\n  width: 50%;\r\n  padding: 10px;\r\n}\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n\r\n}\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\ntd {\r\n  padding-right: 8px;\r\n}\r\nh3 {\r\n  text-align: center;\r\n}\r\ndiv{\r\n}\r\n.example-margin{\r\n  margin-right: 50px;\r\n}\r\n.form-control.ng-touched.ng-invalid{\r\n  border:2px solid red;\r\n}\r\n.container-fluid{\r\n  width: 600px;\r\n  border: 3px solid lightskyblue;\r\n}\r\n.id{\r\n  border-bottom: 10px;\r\n}\r\nlabel {\r\n  padding-bottom: 20px;\r\n  padding-top: 20px;\r\n}\r\n.id{\r\n  font-size: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJheS90cmF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFO0FBQzNFO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsMkNBQTJDO0VBQzNDLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7O0FBRWhCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RyYXkvdHJheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2Jvb3RzdHJhcEAzLjMuNy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycpO1xyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWQtYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwIDZweCAwIDZweDtcclxuICBtYXJnaW46IDZweCA4cHggNnB4IDhweDtcclxuICBtaW4td2lkdGg6IDg4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuMXtcclxuICBjb2xvciA6IGF6dXJlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4uYnV0dG9uc3tcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcbmgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZGl2e1xyXG59XHJcbi5leGFtcGxlLW1hcmdpbntcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbC5uZy10b3VjaGVkLm5nLWludmFsaWR7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRza3libHVlO1xyXG59XHJcbi5pZHtcclxuICBib3JkZXItYm90dG9tOiAxMHB4O1xyXG59XHJcbmxhYmVsIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uaWR7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/tray/tray.component.ts":
/*!****************************************!*\
  !*** ./src/app/tray/tray.component.ts ***!
  \****************************************/
/*! exports provided: TrayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrayComponent", function() { return TrayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _tab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab.service */ "./src/app/tab.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let TrayComponent = class TrayComponent {
    constructor(api) {
        this.api = api;
        this.trays = {};
        this.selectedOption = false;
        this.selectedOption2 = false;
    }
    ngOnInit() {
    }
    swalCalibration() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2']
        }).queue([
            'Skenuokite padėklą',
            { title: 'Sverkitę padėklą',
                text: '' },
        ]).then((result) => {
            if (result.value) {
                const answers = JSON.stringify(result.value);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'All done!',
                    html: `
        Your answers:
        <pre><code>${answers}</code></pre>
      `,
                    confirmButtonText: 'Baigta'
                });
            }
        });
    }
    onSubmit(value) {
        this.api.post('/lei/trays', value).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
    }
    childFunction(value) {
        this.api.get(`/lei/trays/${value.trayId}`)
            .subscribe((data) => {
            this.trays = data;
        });
    }
};
TrayComponent.ctorParameters = () => [
    { type: _core_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
TrayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tray',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tray.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tray/tray.component.html")).default,
        providers: [_tab_service__WEBPACK_IMPORTED_MODULE_3__["TabService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tray.component.css */ "./src/app/tray/tray.component.css")).default]
    })
], TrayComponent);



/***/ }),

/***/ "./src/app/tray/tray.module.ts":
/*!*************************************!*\
  !*** ./src/app/tray/tray.module.ts ***!
  \*************************************/
/*! exports provided: TrayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrayModule", function() { return TrayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tray_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tray.component */ "./src/app/tray/tray.component.ts");
/* harmony import */ var _tray_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tray-routing.module */ "./src/app/tray/tray-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









let TrayModule = class TrayModule {
};
TrayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tray_component__WEBPACK_IMPORTED_MODULE_3__["TrayComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tray_routing_module__WEBPACK_IMPORTED_MODULE_4__["TrayRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ]
    })
], TrayModule);



/***/ })

}]);
//# sourceMappingURL=tray-tray-module-es2015.js.map