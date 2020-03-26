(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sample-sample-weight-sample-weight-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sample/sample-weight/sample-weight.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sample/sample-weight/sample-weight.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <form class=\"example-form\">\r\n  <div class=\"example-full-width\">\r\n    <label>Įveskite užsakymo numerį</label>\r\n    <input  (ngModelChange)=\"childFunction(this.sampleList)\" #protocol matInput=\"protocol\" name=\"protocol\" [(ngModel)]=\"samples.protocolId\" class=\"form-control\" >\r\n  </div>\r\n  <br>\r\n<button class=\"btn btn-primary\"  (click)=\"newProtocolWeight(protocol.value)\" (click)=\"toggleChild()\" >Pateikti</button>\r\n  <br>\r\n  <div class=\"form-group\">\r\n\r\n    <label *ngIf=\"showVar\"> Mėginių sąrašas </label>\r\n    <li *ngFor=\"let sample of sampleList; let i= index\">\r\n      <td class=\"id\">{{sample.sampleId}}</td>\r\n      <td>\r\n        <input  placeholder=\"kg\"\r\n                type=\"text\"\r\n                id=\"f_{{i}}\"\r\n                name=\"sampleId-{{i}}\"\r\n                [(ngModel)]=\"sampleList[i].sampleWeight\"\r\n                class=\"form-control\"\r\n                #samplesS=\"ngModel\"\r\n                required\r\n                tabIndex=\"{{i}}\"\r\n        ></td>\r\n      <div\r\n        class=\"alert alert-danger\"\r\n        *ngIf=\"samplesS.touched && !samplesS.valid\">\r\n        <small\r\n          *ngIf=\"samplesS.errors.required\">\r\n          Pasverkite mėginį\r\n        </small>\r\n      </div>\r\n  </div>\r\n  <div *ngIf=\"showVar\">\r\n  <button type=\"button\" class=\" btn btn-secondary\" (click)=\"submitWeight(this.sampleList)\"> Sverti </button>\r\n  </div>\r\n");

/***/ }),

/***/ "./src/app/sample/sample-weight/sample-weight-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sample/sample-weight/sample-weight-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SampleWeightRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleWeightRoutingModule", function() { return SampleWeightRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sample_weight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-weight.component */ "./src/app/sample/sample-weight/sample-weight.component.ts");




const routes = [
    {
        path: '',
        component: _sample_weight_component__WEBPACK_IMPORTED_MODULE_3__["SampleWeightComponent"]
    }
];
let SampleWeightRoutingModule = class SampleWeightRoutingModule {
};
SampleWeightRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SampleWeightRoutingModule);



/***/ }),

/***/ "./src/app/sample/sample-weight/sample-weight.component.css":
/*!******************************************************************!*\
  !*** ./src/app/sample/sample-weight/sample-weight.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\nh1 {\r\n  text-align: center;\r\n}\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n\r\n}\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\ntd {\r\n  padding-right: 8px;\r\n}\r\nh3 {\r\n  text-align: center;\r\n}\r\ndiv{\r\n}\r\n.example-margin{\r\n  margin-right: 50px;\r\n}\r\n.form-control.ng-touched.ng-invalid{\r\n  border:2px solid red;\r\n}\r\n.container-fluid{\r\n  width: 600px;\r\n}\r\n.id{\r\nborder-bottom: 10px;\r\n}\r\nlabel {\r\n  padding-bottom: 20px;\r\n  padding-top: 20px;\r\n}\r\n.id{\r\nfont-size: 30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FtcGxlL3NhbXBsZS13ZWlnaHQvc2FtcGxlLXdlaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTtBQUMzRTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYzs7QUFFaEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZS9zYW1wbGUtd2VpZ2h0L3NhbXBsZS13ZWlnaHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL3VucGtnLmNvbS9ib290c3RyYXBAMy4zLjcvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnKTtcclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmRpdntcclxufVxyXG4uZXhhbXBsZS1tYXJnaW57XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wubmctdG91Y2hlZC5uZy1pbnZhbGlke1xyXG4gIGJvcmRlcjoycHggc29saWQgcmVkO1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59XHJcbi5pZHtcclxuYm9yZGVyLWJvdHRvbTogMTBweDtcclxufVxyXG5sYWJlbCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmlke1xyXG5mb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/sample/sample-weight/sample-weight.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sample/sample-weight/sample-weight.component.ts ***!
  \*****************************************************************/
/*! exports provided: SampleWeightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleWeightComponent", function() { return SampleWeightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _tab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tab.service */ "./src/app/tab.service.ts");




let SampleWeightComponent = class SampleWeightComponent {
    constructor(api) {
        this.api = api;
        this.samples = {};
        this.sampleList = [];
        this.showVar = false;
    }
    ngOnInit() {
    }
    toggleChild() {
        this.showVar = !this.showVar;
    }
    newProtocolWeight(value) {
        this.api.get(`/lei/samples/list/${value}`)
            .subscribe((data) => {
            this.sampleList = data;
        });
    }
    childFunction(value) {
        if (value.length < 15) {
            for (var i = 0; i <= value.length - 1; i++) {
                this.sampleList[i];
            }
        }
        else {
            console.error('Too many samples ! Try less than 15.');
        }
    }
    submitWeight(sampleList) {
        for (let sample of this.sampleList) {
            this.api.post('/lei/samples', sample).subscribe((result) => {
                const row = this.sampleList.find(item => item.id === result.id);
                if (row) {
                    row.protocolId = result.protocolId;
                    row.sampleId = result.sampleId;
                    row.sampleWeight = result.sampleWeight;
                    // row.date = result.date;
                }
                else {
                    this.sampleList = [...this.sampleList, result];
                }
            });
        }
    }
};
SampleWeightComponent.ctorParameters = () => [
    { type: _core_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
SampleWeightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sample-weight',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sample-weight.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sample/sample-weight/sample-weight.component.html")).default,
        providers: [_tab_service__WEBPACK_IMPORTED_MODULE_3__["TabService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sample-weight.component.css */ "./src/app/sample/sample-weight/sample-weight.component.css")).default]
    })
], SampleWeightComponent);



/***/ }),

/***/ "./src/app/sample/sample-weight/sample-weight.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/sample/sample-weight/sample-weight.module.ts ***!
  \**************************************************************/
/*! exports provided: SampleWeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleWeightModule", function() { return SampleWeightModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sample_weight_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-weight-routing.module */ "./src/app/sample/sample-weight/sample-weight-routing.module.ts");
/* harmony import */ var _sample_weight_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sample-weight.component */ "./src/app/sample/sample-weight/sample-weight.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");









let SampleWeightModule = class SampleWeightModule {
};
SampleWeightModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sample_weight_component__WEBPACK_IMPORTED_MODULE_4__["SampleWeightComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _sample_weight_routing_module__WEBPACK_IMPORTED_MODULE_3__["SampleWeightRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ]
    })
], SampleWeightModule);



/***/ })

}]);
//# sourceMappingURL=sample-sample-weight-sample-weight-module-es2015.js.map