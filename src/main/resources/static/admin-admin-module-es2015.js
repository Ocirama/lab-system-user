(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/modal/modal.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/modal/modal.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 mat-dialog-title>Užsakovas: {{ data.oldName }}</h3>\r\n\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Užsakovas\" [(ngModel)]=\"data.name\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Prisjungimo ID\" [(ngModel)]=\"data.username\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Atšaukti</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" (click)=\" this.swalOrderUpdate();\">Išsaugoti</button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/register/register.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/register/register.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"flex-column\" [formGroup]=\"userForm\" (ngSubmit)=\"submit()\" style=\"margin: 50px\">\n  <mat-form-field appearance=\"standard\">\n    <mat-label>Name</mat-label>\n    <input matInput formControlName=\"name\">\n    <mat-error *ngIf=\"userForm.controls.name.invalid\">{{getError('name')}}</mat-error>\n    <mat-hint>Required</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"standard\">\n    <input matInput formControlName=\"username\">\n    <mat-label>Username</mat-label>\n    <mat-error *ngIf=\"userForm.controls.username.invalid\">{{getError('username')}}</mat-error>\n    <mat-hint>Required</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"standard\">\n    <mat-label>Password</mat-label>\n    <input matInput type=\"password\" formControlName=\"password\">\n    <mat-error *ngIf=\"userForm.controls.password.invalid\">{{getError('password')}}</mat-error>\n    <mat-hint>Required</mat-hint>\n  </mat-form-field>\n\n  <button mat-stroked-button color=\"primary\" type=\"submit\">\n    <span style=\"display: flex;align-items: center;justify-content: center\">\n      <span style=\"margin-right: 5px\">SUBMIT</span>\n      <mat-spinner *ngIf=\"loading\" diameter=\"20\"></mat-spinner>\n    </span>\n  </button>\n</form>\n<p class=\"mat-error\" *ngIf=\"error\">{{error}}</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/user-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/user-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h3>Užsakovai</h3>\n<div>\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtruoti\">\n  </mat-form-field>\n  <table mat-table matTableExporter [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" #exporter=\"matTableExporter\">\n    <ng-container matColumnDef=\"no\">\n      <th mat-header-cell *matHeaderCellDef> Nr.</th>\n      <td mat-cell *matCellDef=\"let index = index\"> {{index + 1}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Užsakovas</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"username\">\n      <th mat-header-cell *matHeaderCellDef> Prisijungimo ID</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef>\n      </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"openDialog(element)\">\n            <mat-icon>edit</mat-icon>\n            <span>Redaguoti</span>\n          </button>\n          <button mat-menu-item (click)=\"delete(element.id)\">\n            <mat-icon>delete</mat-icon>\n            <span>Ištrinti</span>\n          </button>\n        </mat-menu>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  <div class=\"footer\">\n    <mat-toolbar color=\"primary\">\n      <button mat-stroked-button color=\"white\" style=\"width: 100%\" (click)=\"showRegisterDialog()\">\n        REGISTRUOTI NAUJĄ VARTOTOJĄ\n      </button>\n    </mat-toolbar>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/user-list/user-list.component.ts");




const routes = [
    {
        path: '',
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"]
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_list_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list/modal/modal.component */ "./src/app/admin/user-list/modal/modal.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/user-list/user-list.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/__ivy_ngcc__/fesm2015/mat-table-exporter.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _user_list_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-list/register/register.component */ "./src/app/admin/user-list/register/register.component.ts");
/* harmony import */ var _system_system_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../system/system.module */ "./src/app/system/system.module.ts");

























let AdminModule = class AdminModule {
};
AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_list_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"], _user_list_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_21__["AdminRoutingModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_22__["NgMultiSelectDropDownModule"],
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_20__["MatTableExporterModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _system_system_module__WEBPACK_IMPORTED_MODULE_24__["SystemModule"]
        ],
        exports: [
            _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"]
        ],
        entryComponents: [
            _user_list_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], _user_list_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/user-list/modal/modal.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/user-list/modal/modal.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  text-align: center;\r\n}\r\n\r\ndiv.mat-dialog-actions {\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlci1saXN0L21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdXNlci1saXN0L21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaXYubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/admin/user-list/modal/modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/user-list/modal/modal.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let ModalComponent = class ModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.oldName = data.name;
        data.oldUsername = data.username;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    swalOrderUpdate() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Užsakovo duomenys atnaujinti.', '', 'success');
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/modal/modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal.component.css */ "./src/app/admin/user-list/modal/modal.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalComponent);



/***/ }),

/***/ "./src/app/admin/user-list/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/user-list/register/register.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card{\n  width:100%;\n  max-width: 640px;\n  min-width: 380px;\n  margin-top: 20px;\n  padding:50px\n}\n\n.flex-column{\n  display: flex;\n  flex-direction: column;\n}\n\n.flex-column>*{\n  margin-bottom: 0;\n}\n\n.flex-column>*:last-child{\n  margin-top: 40px;\n}\n\n.flex-row{\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-row>*{\n  flex: 1;\n  margin-right: 20px;\n}\n\n.flex-row>*:last-child{\n  margin-right: 0;\n}\n\nh1{text-align: center; margin-bottom: 0;}\n\np.mat-error{\n  margin: 5px 0 0 0;\n  text-align: center;\n  font-size: small;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlci1saXN0L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLEdBQUcsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7O0FBRXhDO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi91c2VyLWxpc3QvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZHtcbiAgd2lkdGg6MTAwJTtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgbWluLXdpZHRoOiAzODBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzo1MHB4XG59XG5cbi5mbGV4LWNvbHVtbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mbGV4LWNvbHVtbj4qe1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmZsZXgtY29sdW1uPio6bGFzdC1jaGlsZHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmZsZXgtcm93e1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4LXJvdz4qe1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uZmxleC1yb3c+KjpsYXN0LWNoaWxke1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbmgxe3RleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMDt9XG5cbnAubWF0LWVycm9ye1xuICBtYXJnaW46IDVweCAwIDAgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/admin/user-list/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/user-list/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _util_validation_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/validation.utils */ "./src/app/util/validation.utils.ts");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/api.service */ "./src/app/core/api.service.ts");







const nameMinLength = 3;
const nameMaxLength = 50;
const passwordMinLength = 8;
const passwordMaxLength = 50;
let RegisterComponent = class RegisterComponent {
    constructor(api, router, formBuilder, dialogRef, data) {
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.loading = false;
        this.error = '';
        this.formErrors = {
            name: [
                Object(_util_validation_utils__WEBPACK_IMPORTED_MODULE_5__["getValueEmptyValidationError"])('name'),
                Object(_util_validation_utils__WEBPACK_IMPORTED_MODULE_5__["getPatternValidationError"])(`Can contain only uppercase lowercase letters and numbers`),
                Object(_util_validation_utils__WEBPACK_IMPORTED_MODULE_5__["getMinimumLengthValidationError"])(nameMinLength),
                Object(_util_validation_utils__WEBPACK_IMPORTED_MODULE_5__["getMaximumLengthValidationError"])(nameMaxLength)
            ],
            username: [
                Object(_util_validation_utils__WEBPACK_IMPORTED_MODULE_5__["getValueEmptyValidationError"])('username'),
                Object(_util_validation_utils__WEBPACK_IMPORTED_MODULE_5__["getUsernameValidationError"])()
            ],
            password: [
                Object(_util_validation_utils__WEBPACK_IMPORTED_MODULE_5__["getValueEmptyValidationError"])('password'),
                Object(_util_validation_utils__WEBPACK_IMPORTED_MODULE_5__["getMinimumLengthValidationError"])(passwordMinLength),
                Object(_util_validation_utils__WEBPACK_IMPORTED_MODULE_5__["getMaximumLengthValidationError"])(passwordMaxLength),
            ]
        };
        this.userForm = formBuilder.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(nameMinLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(nameMaxLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Z0-9a-z]+$/)
                ]],
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(passwordMinLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(passwordMaxLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Z0-9a-z]+$/),
                ]],
            role: ['user', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(nameMinLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(nameMaxLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Z0-9a-z]+$/),
                ]]
        });
        if (!data) {
            return;
        }
        this.onConfirm = data.onConfirm;
        if (data.user) {
            this.user = data.user;
            this.userForm.setValue({
                name: this.user.name,
                username: this.user.username,
                password: '',
                role: this.user.role,
            });
        }
    }
    ngOnInit() {
    }
    getError(fieldName) {
        for (const error of this.formErrors[fieldName]) {
            if (this.userForm.controls[fieldName].hasError(error.validatorType)) {
                return error.message;
            }
        }
        return '';
    }
    errorResponseHandler(response) {
        this.loading = false;
        if (response.error.validationErrors) {
            Object(_util_validation_utils__WEBPACK_IMPORTED_MODULE_5__["mapResponseErrors"])(response.error.validationErrors, this.formErrors, 'backend', this.userForm);
        }
        else {
            this.error = 'A network error occurred';
        }
    }
    submit() {
        this.error = '';
        if (this.userForm.status === 'VALID') {
            this.loading = true;
            let observable;
            if (this.user) {
                observable = this.api.put('/lei/users', this.userForm.getRawValue());
            }
            else {
                observable = this.api.post('/lei/users', this.userForm.getRawValue());
            }
            observable.subscribe((response) => {
                if (this.onConfirm) {
                    this.onConfirm(response);
                }
                this.dialogRef.close();
                this.loading = false;
            }, this.errorResponseHandler.bind(this));
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _core_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/register/register.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.css */ "./src/app/admin/user-list/register/register.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], RegisterComponent);



/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  text-align: center;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  max-width: 1500px;\r\n  width: 100%;\r\n}\r\n\r\ntable th:first-child {\r\n  width: 50px;\r\n}\r\n\r\ntable th:last-child {\r\n  width: 10px;\r\n}\r\n\r\n.mat-row:hover {\r\n  background-color: lightgrey;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: red;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\nmat-form-field {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxudGFibGUgdGg6bGFzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.ts ***!
  \********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/admin/user-list/modal/modal.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/admin/user-list/register/register.component.ts");










let UserListComponent = class UserListComponent {
    constructor(api, dialog) {
        this.api = api;
        this.dialog = dialog;
        this.displayedColumns = ['no', 'name', 'username', 'actions'];
        this.users = [];
    }
    ngOnInit() {
        this.getUsers();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    getUsers() {
        this.api.get('/lei/users').subscribe((data) => this.dataSource.data = data.filter(x => x.name !== 'admin'));
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    delete(id) {
        this.api.delete(`/lei/users/${id}`).subscribe(() => this.users = this.users.filter(item => item.id !== id));
        this.dataSource.data = [];
        setTimeout(() => this.getUsers(), 1000);
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Užsakovas ištrintas.', '', 'success');
    }
    openDialog(user) {
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], {
            width: '250px',
            data: {
                id: user ? user.id : null,
                name: user ? user.name : null,
                username: user ? user.username : null,
            }
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.api.post('/lei/users', data).subscribe((userr) => {
                    const row = this.users.find(item => item.id === user.id);
                    if (row) {
                        row.name = userr.name;
                        row.username = userr.username;
                    }
                    else {
                        this.users = [...this.users, user];
                    }
                });
            }
            this.dataSource.data = [];
            setTimeout(() => this.getUsers(), 1000);
        });
    }
    showRegisterDialog() {
        this.dialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]);
    }
};
UserListComponent.ctorParameters = () => [
    { type: _core_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], UserListComponent.prototype, "paginator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], UserListComponent.prototype, "sort", void 0);
UserListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/user-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-list.component.css */ "./src/app/admin/user-list/user-list.component.css")).default]
    })
], UserListComponent);



/***/ }),

/***/ "./src/app/util/validation.utils.ts":
/*!******************************************!*\
  !*** ./src/app/util/validation.utils.ts ***!
  \******************************************/
/*! exports provided: getValidationError, getValueEmptyValidationError, getChoiceEmptyValidationError, getMinimumLengthValidationError, getMaximumLengthValidationError, getValueMinimumValidationError, getPatternValidationError, getUsernameValidationError, mapResponseErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidationError", function() { return getValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueEmptyValidationError", function() { return getValueEmptyValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChoiceEmptyValidationError", function() { return getChoiceEmptyValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinimumLengthValidationError", function() { return getMinimumLengthValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaximumLengthValidationError", function() { return getMaximumLengthValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueMinimumValidationError", function() { return getValueMinimumValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPatternValidationError", function() { return getPatternValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsernameValidationError", function() { return getUsernameValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapResponseErrors", function() { return mapResponseErrors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function getValidationError(validatorType, message) {
    return { validatorType, message };
}
function getValueEmptyValidationError(fieldName) {
    return getValidationError('required', `You must enter a ${fieldName}`);
}
function getChoiceEmptyValidationError(fieldName) {
    return getValidationError('required', `Please choose a ${fieldName}`);
}
function getMinimumLengthValidationError(minLength) {
    return getValidationError('minlength', `Must be at least ${minLength} characters long`);
}
function getMaximumLengthValidationError(maxLength) {
    return getValidationError('maxlength', `Must be at most ${maxLength} characters long`);
}
function getValueMinimumValidationError(minValue) {
    return getValidationError('min', `Must be at least ${minValue}`);
}
function getPatternValidationError(message) {
    return getValidationError('pattern', message);
}
function getUsernameValidationError() {
    return getValidationError('username', 'Must be a valid username');
}
function mapResponseErrors(errors, formErrors, validatorType, formGroup) {
    Object.entries(errors).forEach(([key, value]) => {
        const formError = formErrors[key].find(entry => entry.validatorType === validatorType);
        if (formError) {
            formError.message = value[0];
        }
        else {
            formErrors[key].push({ validatorType, message: value[0] });
        }
        const existingErrors = Object.assign({}, formGroup.controls[key].errors);
        existingErrors[validatorType] = true;
        formGroup.controls[key].setErrors(existingErrors);
    });
}


/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map