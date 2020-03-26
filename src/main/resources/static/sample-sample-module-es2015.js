(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sample-sample-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sample/sample-list/sample-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sample/sample-list/sample-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Mėginių sąrašas</h3>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"no\">\r\n    <th mat-header-cell *matHeaderCellDef> Nr.</th>\r\n    <td mat-cell *matCellDef=\"let index = index\"> {{index + 1}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"protocolId\">\r\n    <th mat-header-cell *matHeaderCellDef> Protokolas</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.protocolId}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"sampleId\">\r\n    <th mat-header-cell *matHeaderCellDef> Mėginys</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.sampleId}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"weight\">\r\n    <th mat-header-cell *matHeaderCellDef> Svoris</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.sampleWeight}} </td>\r\n  </ng-container>\r\n\r\n  <!-- <ng-container matColumnDef=\"date\">\r\n    <th mat-header-cell *matHeaderCellDef> Data</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\r\n  </ng-container> -->\r\n\r\n\r\n  <ng-container matColumnDef=\"actions\">\r\n    <th mat-header-cell *matHeaderCellDef>\r\n\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item (click)=\"openDialog(element)\">\r\n          <mat-icon>edit</mat-icon>\r\n          <span>Edit</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"delete(element.id)\">\r\n          <mat-icon>delete</mat-icon>\r\n          <span>Delete</span>\r\n        </button>\r\n      </mat-menu>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<div class=\"footer\">\r\n  <mat-paginator fixed [pageSizeOptions]=\"[10, 25, 50, 100]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sample/sample-modal/sample-modal.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sample/sample-modal/sample-modal.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>sample-modal works!</p>\r\n");

/***/ }),

/***/ "./src/app/sample/sample-list/sample-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/sample/sample-list/sample-list.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  text-align: center;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  max-width: 1500px;\r\n  width: 100%;\r\n}\r\n\r\ntable th:first-child {\r\n  width: 50px;\r\n}\r\n\r\ntable th:last-child {\r\n  width: 10px;\r\n}\r\n\r\n.mat-row:hover {\r\n  background-color: lightgrey;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: red;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\nmat-form-field {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FtcGxlL3NhbXBsZS1saXN0L3NhbXBsZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2FtcGxlL3NhbXBsZS1saXN0L3NhbXBsZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZSB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHRoOmxhc3QtY2hpbGQge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG59XHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/sample/sample-list/sample-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/sample/sample-list/sample-list.component.ts ***!
  \*************************************************************/
/*! exports provided: SampleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleListComponent", function() { return SampleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _log_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../log/modal/modal.component */ "./src/app/log/modal/modal.component.ts");





let SampleListComponent = class SampleListComponent {
    constructor(api, dialog) {
        this.api = api;
        this.dialog = dialog;
        this.displayedColumns = ['no', 'protocolId', 'sampleId', 'weight', /*'date'*/ 'actions'];
        this.samples = [];
    }
    ngOnInit() {
        this.api.get('/lei/samples').subscribe((data) => this.dataSource.data = data);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    delete(id) {
        this.api.delete(`/lei/samples/${id}`).subscribe(() => this.samples = this.samples.filter(item => item.id !== id));
    }
    openDialog(sample) {
        const dialogRef = this.dialog.open(_log_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], {
            width: '250px',
            data: {
                id: sample ? sample.id : null,
                protocolId: sample ? sample.protocolId : null,
                sampleId: sample ? sample.sampleId : null,
                sampleWeight: sample ? sample.sampleWeight : null,
            }
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.api.post('/lei/samples', data).subscribe((result) => {
                    const row = this.samples.find(item => item.id === result.id);
                    if (row) {
                        row.protocolId = result.protocolId;
                        row.sampleId = result.sampleId;
                        row.sampleWeight = result.sampleWeight;
                        // row.date = result.date;
                    }
                    else {
                        this.samples = [...this.samples, result];
                    }
                });
            }
        });
    }
};
SampleListComponent.ctorParameters = () => [
    { type: _core_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], SampleListComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], SampleListComponent.prototype, "sort", void 0);
SampleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sample-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sample-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sample/sample-list/sample-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sample-list.component.css */ "./src/app/sample/sample-list/sample-list.component.css")).default]
    })
], SampleListComponent);



/***/ }),

/***/ "./src/app/sample/sample-modal/sample-modal.component.css":
/*!****************************************************************!*\
  !*** ./src/app/sample/sample-modal/sample-modal.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZS9zYW1wbGUtbW9kYWwvc2FtcGxlLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/sample/sample-modal/sample-modal.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/sample/sample-modal/sample-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: SampleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleModalComponent", function() { return SampleModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SampleModalComponent = class SampleModalComponent {
    constructor() { }
    ngOnInit() {
    }
};
SampleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sample-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sample-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sample/sample-modal/sample-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sample-modal.component.css */ "./src/app/sample/sample-modal/sample-modal.component.css")).default]
    })
], SampleModalComponent);



/***/ }),

/***/ "./src/app/sample/sample-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sample/sample-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SampleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleRoutingModule", function() { return SampleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sample_list_sample_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-list/sample-list.component */ "./src/app/sample/sample-list/sample-list.component.ts");




const routes = [
    {
        path: '',
        component: _sample_list_sample_list_component__WEBPACK_IMPORTED_MODULE_3__["SampleListComponent"]
    }
];
let SampleRoutingModule = class SampleRoutingModule {
};
SampleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SampleRoutingModule);



/***/ }),

/***/ "./src/app/sample/sample.module.ts":
/*!*****************************************!*\
  !*** ./src/app/sample/sample.module.ts ***!
  \*****************************************/
/*! exports provided: SampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleModule", function() { return SampleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sample_list_sample_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-list/sample-list.component */ "./src/app/sample/sample-list/sample-list.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _sample_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sample-routing.module */ "./src/app/sample/sample-routing.module.ts");
/* harmony import */ var _sample_modal_sample_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sample-modal/sample-modal.component */ "./src/app/sample/sample-modal/sample-modal.component.ts");








let SampleModule = class SampleModule {
};
SampleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sample_list_sample_list_component__WEBPACK_IMPORTED_MODULE_3__["SampleListComponent"], _sample_modal_sample_modal_component__WEBPACK_IMPORTED_MODULE_7__["SampleModalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            _sample_routing_module__WEBPACK_IMPORTED_MODULE_6__["SampleRoutingModule"],
        ],
        entryComponents: [
            _sample_modal_sample_modal_component__WEBPACK_IMPORTED_MODULE_7__["SampleModalComponent"]
        ]
    })
], SampleModule);



/***/ })

}]);
//# sourceMappingURL=sample-sample-module-es2015.js.map