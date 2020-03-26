(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journal-ash-journal-ash-journal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/ash-journal/ash-journal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journal/ash-journal/ash-journal.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>ash-journal works!</p>\r\n");

/***/ }),

/***/ "./src/app/journal/ash-journal/ash-journal-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/journal/ash-journal/ash-journal-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AshJournalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AshJournalRoutingModule", function() { return AshJournalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ash_journal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ash-journal.component */ "./src/app/journal/ash-journal/ash-journal.component.ts");




const routes = [
    {
        path: '',
        component: _ash_journal_component__WEBPACK_IMPORTED_MODULE_3__["AshJournalComponent"]
    }
];
let AshJournalRoutingModule = class AshJournalRoutingModule {
};
AshJournalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AshJournalRoutingModule);



/***/ }),

/***/ "./src/app/journal/ash-journal/ash-journal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/journal/ash-journal/ash-journal.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWwvYXNoLWpvdXJuYWwvYXNoLWpvdXJuYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/journal/ash-journal/ash-journal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/journal/ash-journal/ash-journal.component.ts ***!
  \**************************************************************/
/*! exports provided: AshJournalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AshJournalComponent", function() { return AshJournalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AshJournalComponent = class AshJournalComponent {
    constructor() { }
    ngOnInit() {
    }
};
AshJournalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ash-journal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ash-journal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/ash-journal/ash-journal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ash-journal.component.css */ "./src/app/journal/ash-journal/ash-journal.component.css")).default]
    })
], AshJournalComponent);



/***/ }),

/***/ "./src/app/journal/ash-journal/ash-journal.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/journal/ash-journal/ash-journal.module.ts ***!
  \***********************************************************/
/*! exports provided: AshJournalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AshJournalModule", function() { return AshJournalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ash_journal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ash-journal-routing.module */ "./src/app/journal/ash-journal/ash-journal-routing.module.ts");
/* harmony import */ var _ash_journal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ash-journal.component */ "./src/app/journal/ash-journal/ash-journal.component.ts");





let AshJournalModule = class AshJournalModule {
};
AshJournalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ash_journal_component__WEBPACK_IMPORTED_MODULE_4__["AshJournalComponent"]],
        imports: [_ash_journal_routing_module__WEBPACK_IMPORTED_MODULE_3__["AshJournalRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], AshJournalModule);



/***/ })

}]);
//# sourceMappingURL=journal-ash-journal-ash-journal-module-es2015.js.map