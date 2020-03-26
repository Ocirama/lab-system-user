(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-log-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log/list/list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log/list/list.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Užsakymų žurnalas</h3>\r\n<div>\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"no\">\r\n    <th mat-header-cell *matHeaderCellDef> Nr.</th>\r\n    <td mat-cell *matCellDef=\"let index = index\"> {{index + 1}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"protocolId\" >\r\n    <th mat-header-cell *matHeaderCellDef> Protokolas</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.protocolId}} {{'/'+ element.date.toString().charAt(2) + element.date.toString().charAt(3) +'-8B'}} </td>\r\n  </ng-container>\r\n\r\n   <ng-container matColumnDef=\"customer\">\r\n     <th mat-header-cell *matHeaderCellDef> Užsakovas</th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.customer}} </td>\r\n   </ng-container>\r\n\r\n   <ng-container matColumnDef=\"test\">\r\n     <th mat-header-cell *matHeaderCellDef> Tyrimai</th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.test}} </td>\r\n   </ng-container>\r\n\r\n   <ng-container matColumnDef=\"sampleType\">\r\n     <th mat-header-cell *matHeaderCellDef> Kuro tipas</th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.sampleType}} </td>\r\n   </ng-container>\r\n\r\n   <ng-container matColumnDef=\"orderAmount\">\r\n     <th mat-header-cell *matHeaderCellDef> Mėginių kiekis</th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.orderAmount}} </td>\r\n   </ng-container> -->\r\n\r\n   <ng-container matColumnDef=\"date\">\r\n    <th mat-header-cell *matHeaderCellDef> Data</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.date.toString().substring(0,10)}} </td>\r\n  </ng-container>\r\n\r\n\r\n  <ng-container matColumnDef=\"actions\">\r\n    <th mat-header-cell *matHeaderCellDef>\r\n    </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item (click)=\"openDialog(element)\">\r\n          <mat-icon>edit</mat-icon>\r\n          <span>Edit</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"swalOrderDelete()\" (click)=\"delete(element.id)\">\r\n          <mat-icon>delete</mat-icon>\r\n          <span>Delete</span>\r\n        </button>\r\n      </mat-menu>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<div class=\"footer\">\r\n  <mat-paginator fixed [pageSizeOptions]=\"[10, 25, 50, 100]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/log/list/list.component.css":
/*!*********************************************!*\
  !*** ./src/app/log/list/list.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  text-align: center;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  max-width: 1500px;\r\n  width: 100%;\r\n}\r\n\r\ntable th:first-child {\r\n  width: 50px;\r\n}\r\n\r\ntable th:last-child {\r\n  width: 10px;\r\n}\r\n\r\n.mat-row:hover {\r\n  background-color: lightgrey;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: red;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\nmat-form-field {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxudGFibGUgdGg6bGFzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/log/list/list.component.ts":
/*!********************************************!*\
  !*** ./src/app/log/list/list.component.ts ***!
  \********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/log/modal/modal.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let ListComponent = class ListComponent {
    constructor(api, dialog) {
        this.api = api;
        this.dialog = dialog;
        this.displayedColumns = ['no', 'protocolId', 'customer', 'test', 'sampleType', 'orderAmount', 'date', 'actions'];
        this.orders = [];
    }
    ngOnInit() {
        this.api.get('/lei/orders').subscribe((data) => this.dataSource.data = data);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
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
        this.api.delete(`/lei/orders/${id}`).subscribe(() => this.orders = this.orders.filter(item => item.id !== id));
    }
    openDialog(order) {
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], {
            width: '250px',
            data: {
                id: order ? order.id : null,
                protocolId: order ? order.protocolId : null,
                customer: order ? order.customer : null,
                test: order ? order.test : null,
                sampleType: order ? order.sampleType : null,
                orderAmount: order ? order.orderAmount : null,
                date: order ? order.date : null
            }
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.api.post('/lei/orders', data).subscribe((result) => {
                    const row = this.orders.find(item => item.id === result.id);
                    if (row) {
                        row.protocolId = result.protocolId;
                        row.customer = result.customer;
                        row.test = result.test;
                        row.sampleType = result.sampleType;
                        row.orderAmount = result.orderAmount;
                        row.date = result.date;
                    }
                    else {
                        this.orders = [...this.orders, result];
                    }
                });
            }
        });
        this.swalOrderUpdate();
    }
    swalOrderUpdate() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Užsakymas papildytas.', '', 'success');
    }
    swalOrderDelete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Užsakymas ištrintas.', '', 'success');
    }
};
ListComponent.ctorParameters = () => [
    { type: _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], ListComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], ListComponent.prototype, "sort", void 0);
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.css */ "./src/app/log/list/list.component.css")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/log/log-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/log/log-routing.module.ts ***!
  \*******************************************/
/*! exports provided: LogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogRoutingModule", function() { return LogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/log/list/list.component.ts");




const routes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }
];
let LogRoutingModule = class LogRoutingModule {
};
LogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LogRoutingModule);



/***/ }),

/***/ "./src/app/log/log.module.ts":
/*!***********************************!*\
  !*** ./src/app/log/log.module.ts ***!
  \***********************************/
/*! exports provided: LogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogModule", function() { return LogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/log/list/list.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/log/modal/modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _log_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./log-routing.module */ "./src/app/log/log-routing.module.ts");








let LogModule = class LogModule {
};
LogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _log_routing_module__WEBPACK_IMPORTED_MODULE_7__["LogRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"]
        ],
        entryComponents: [
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]
        ]
    })
], LogModule);



/***/ })

}]);
//# sourceMappingURL=log-log-module-es2015.js.map