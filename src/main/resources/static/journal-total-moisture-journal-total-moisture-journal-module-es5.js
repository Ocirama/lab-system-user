function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journal-total-moisture-journal-total-moisture-journal-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/total-moisture-journal/total-moisture-list/total-moisture-list.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journal/total-moisture-journal/total-moisture-list/total-moisture-list.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJournalTotalMoistureJournalTotalMoistureListTotalMoistureListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Visuminės drėgmės žurnalas</h3>\r\n<div>\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef> Nr.</th>\r\n      <td mat-cell *matCellDef=\"let index = index\"> {{index + 1}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"protocolId\">\r\n      <th mat-header-cell *matHeaderCellDef> Protokolas</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.protocolId}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"sampleId\">\r\n      <th mat-header-cell *matHeaderCellDef> Meginys</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.sampleId}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"trayId\">\r\n      <th mat-header-cell *matHeaderCellDef> Indukas</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.trayId}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"trayWeight\">\r\n      <th mat-header-cell *matHeaderCellDef> Induko svoris</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.trayWeight}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"trayAndSampleWeightBefore\">\r\n      <th mat-header-cell *matHeaderCellDef> Indo ir mėginio masė PRIEŠ</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.trayAndSampleWeightBefore}} </td>\r\n    </ng-container>\r\n    -->\r\n\r\n    <ng-container matColumnDef=\"trayAndSampleWeightAfter\">\r\n      <th mat-header-cell *matHeaderCellDef> Indo ir mėginio masė PO</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.trayAndSampleWeightAfter}} </td>\r\n    </ng-container>\r\n    -->\r\n\r\n    <ng-container matColumnDef=\"trayAndSampleWeightAfterPlus\">\r\n      <th mat-header-cell *matHeaderCellDef> Indo ir mėginio masė PO + n val</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.trayAndSampleWeightAfterPlus}} </td>\r\n    </ng-container>\r\n    -->\r\n\r\n    <!-- <ng-container matColumnDef=\"date\">\r\n      <th mat-header-cell *matHeaderCellDef> Data</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\r\n    </ng-container> -->\r\n\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n\r\n          <button mat-menu-item (click)=\"openDialog(element)\">\r\n            <mat-icon>edit</mat-icon>\r\n            <span>Edit</span>\r\n          </button>\r\n          <button mat-menu-item (click)=\"delete(element.id)\">\r\n            <mat-icon>delete</mat-icon>\r\n            <span>Delete</span>\r\n          </button>\r\n        </mat-menu>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <div class=\"footer\">\r\n    <mat-paginator fixed [pageSizeOptions]=\"[10, 25, 50, 100]\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/total-moisture-journal/total-moisture-modal/total-moisture-modal.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journal/total-moisture-journal/total-moisture-modal/total-moisture-modal.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppJournalTotalMoistureJournalTotalMoistureModalTotalMoistureModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 mat-dialog-title>Sample: {{ data.id }}</h3>\r\n\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"trayWeight\" [(ngModel)]=\"data.trayWeight\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"before\" [(ngModel)]=\"data.trayAndSampleWeightBefore\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"after\" [(ngModel)]=\"data.trayAndSampleWeightAfter\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"afterPlus\" [(ngModel)]=\"data.trayAndSampleWeightAfterPlus\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"data\">Save</button>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/journal/total-moisture-journal/total-moisture-journal-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/journal/total-moisture-journal/total-moisture-journal-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: TotalMoistureJournalRoutingModule */

  /***/
  function srcAppJournalTotalMoistureJournalTotalMoistureJournalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TotalMoistureJournalRoutingModule", function () {
      return TotalMoistureJournalRoutingModule;
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


    var _total_moisture_list_total_moisture_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./total-moisture-list/total-moisture-list.component */
    "./src/app/journal/total-moisture-journal/total-moisture-list/total-moisture-list.component.ts");

    var routes = [{
      path: '',
      component: _total_moisture_list_total_moisture_list_component__WEBPACK_IMPORTED_MODULE_3__["TotalMoistureListComponent"]
    }];

    var TotalMoistureJournalRoutingModule = function TotalMoistureJournalRoutingModule() {
      _classCallCheck(this, TotalMoistureJournalRoutingModule);
    };

    TotalMoistureJournalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TotalMoistureJournalRoutingModule);
    /***/
  },

  /***/
  "./src/app/journal/total-moisture-journal/total-moisture-journal.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/journal/total-moisture-journal/total-moisture-journal.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: TotalMoistureJournalModule */

  /***/
  function srcAppJournalTotalMoistureJournalTotalMoistureJournalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TotalMoistureJournalModule", function () {
      return TotalMoistureJournalModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _total_moisture_list_total_moisture_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./total-moisture-list/total-moisture-list.component */
    "./src/app/journal/total-moisture-journal/total-moisture-list/total-moisture-list.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _total_moisture_journal_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./total-moisture-journal-routing.module */
    "./src/app/journal/total-moisture-journal/total-moisture-journal-routing.module.ts");
    /* harmony import */


    var _total_moisture_modal_total_moisture_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./total-moisture-modal/total-moisture-modal.component */
    "./src/app/journal/total-moisture-journal/total-moisture-modal/total-moisture-modal.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var TotalMoistureJournalModule = function TotalMoistureJournalModule() {
      _classCallCheck(this, TotalMoistureJournalModule);
    };

    TotalMoistureJournalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_total_moisture_list_total_moisture_list_component__WEBPACK_IMPORTED_MODULE_3__["TotalMoistureListComponent"], _total_moisture_modal_total_moisture_modal_component__WEBPACK_IMPORTED_MODULE_7__["TotalMoistureModalComponent"]],
      imports: [_total_moisture_journal_routing_module__WEBPACK_IMPORTED_MODULE_6__["TotalMoistureJournalRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["_MatMenuDirectivesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]],
      entryComponents: [_total_moisture_modal_total_moisture_modal_component__WEBPACK_IMPORTED_MODULE_7__["TotalMoistureModalComponent"]]
    })], TotalMoistureJournalModule);
    /***/
  },

  /***/
  "./src/app/journal/total-moisture-journal/total-moisture-list/total-moisture-list.component.css":
  /*!******************************************************************************************************!*\
    !*** ./src/app/journal/total-moisture-journal/total-moisture-list/total-moisture-list.component.css ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJournalTotalMoistureJournalTotalMoistureListTotalMoistureListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\r\n  text-align: center;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  max-width: 1500px;\r\n  width: 100%;\r\n}\r\n\r\ntable th:first-child {\r\n  width: 50px;\r\n}\r\n\r\ntable th:last-child {\r\n  width: 10px;\r\n}\r\n\r\n.mat-row:hover {\r\n  background-color: lightgrey;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: red;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\nmat-form-field {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5hbC90b3RhbC1tb2lzdHVyZS1qb3VybmFsL3RvdGFsLW1vaXN0dXJlLWxpc3QvdG90YWwtbW9pc3R1cmUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWwvdG90YWwtbW9pc3R1cmUtam91cm5hbC90b3RhbC1tb2lzdHVyZS1saXN0L3RvdGFsLW1vaXN0dXJlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxudGFibGUgdGg6bGFzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/journal/total-moisture-journal/total-moisture-list/total-moisture-list.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/journal/total-moisture-journal/total-moisture-list/total-moisture-list.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: TotalMoistureListComponent */

  /***/
  function srcAppJournalTotalMoistureJournalTotalMoistureListTotalMoistureListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TotalMoistureListComponent", function () {
      return TotalMoistureListComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/api.service */
    "./src/app/core/api.service.ts");
    /* harmony import */


    var _total_moisture_modal_total_moisture_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../total-moisture-modal/total-moisture-modal.component */
    "./src/app/journal/total-moisture-journal/total-moisture-modal/total-moisture-modal.component.ts");

    var TotalMoistureListComponent =
    /*#__PURE__*/
    function () {
      function TotalMoistureListComponent(api, dialog) {
        _classCallCheck(this, TotalMoistureListComponent);

        this.api = api;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'protocolId', 'sampleId', 'trayId', 'trayWeight', 'trayAndSampleWeightBefore', 'trayAndSampleWeightAfter', 'trayAndSampleWeightAfterPlus',
        /*'date'*/
        'actions'];
        this.totalMoistureJournals = [];
      }

      _createClass(TotalMoistureListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.api.get('/lei/journals').subscribe(function (data) {
            return _this.dataSource.data = data;
          });
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort; // tslint:disable-next-line:only-arrow-functions no-shadowed-variable

          this.dataSource.filterPredicate = function (data, filter) {
            return data.protocolId.includes(filter);
          };
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();

          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this2 = this;

          this.api.delete("/lei/journals/".concat(id)).subscribe(function () {
            return _this2.totalMoistureJournals = _this2.totalMoistureJournals.filter(function (item) {
              return item.id !== id;
            });
          });
        }
      }, {
        key: "openDialog",
        value: function openDialog(totalMoistureJournal) {
          var _this3 = this;

          var dialogRef = this.dialog.open(_total_moisture_modal_total_moisture_modal_component__WEBPACK_IMPORTED_MODULE_4__["TotalMoistureModalComponent"], {
            width: '250px',
            data: {
              id: totalMoistureJournal ? totalMoistureJournal.id : null,
              trayWeight: totalMoistureJournal ? totalMoistureJournal.trayWeight : null,
              trayAndSampleWeightBefore: totalMoistureJournal ? totalMoistureJournal.trayAndSampleWeightBefore : null,
              trayAndSampleWeightAfter: totalMoistureJournal ? totalMoistureJournal.trayAndSampleWeightAfter : null,
              trayAndSampleWeightBeforePlus: totalMoistureJournal ? totalMoistureJournal.trayAndSampleWeightAfterPlus : null
            }
          });
          dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
              _this3.api.post('/lei/journals', data).subscribe(function (result) {
                var row = _this3.totalMoistureJournals.find(function (item) {
                  return item.id === result.id;
                });

                if (row) {
                  row.trayWeight = result.trayWeight;
                  row.trayAndSampleWeightBefore = result.trayAndSampleWeightBefore;
                  row.trayAndSampleWeightAfter = result.trayAndSampleWeightAfter;
                  row.trayAndSampleWeightAfterPlus = result.trayAndSampleWeightAfterPlus; // row.date = result.date;
                } else {
                  _this3.totalMoistureJournals = [].concat(_toConsumableArray(_this3.totalMoistureJournals), [result]);
                }
              });
            }
          });
        }
      }]);

      return TotalMoistureListComponent;
    }();

    TotalMoistureListComponent.ctorParameters = function () {
      return [{
        type: _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], TotalMoistureListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      static: true
    })], TotalMoistureListComponent.prototype, "sort", void 0);
    TotalMoistureListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-total-moisture-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./total-moisture-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/total-moisture-journal/total-moisture-list/total-moisture-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./total-moisture-list.component.css */
      "./src/app/journal/total-moisture-journal/total-moisture-list/total-moisture-list.component.css")).default]
    })], TotalMoistureListComponent);
    /***/
  },

  /***/
  "./src/app/journal/total-moisture-journal/total-moisture-modal/total-moisture-modal.component.css":
  /*!********************************************************************************************************!*\
    !*** ./src/app/journal/total-moisture-journal/total-moisture-modal/total-moisture-modal.component.css ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppJournalTotalMoistureJournalTotalMoistureModalTotalMoistureModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\r\n  text-align: center;\r\n}\r\n\r\ndiv.mat-dialog-actions {\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5hbC90b3RhbC1tb2lzdHVyZS1qb3VybmFsL3RvdGFsLW1vaXN0dXJlLW1vZGFsL3RvdGFsLW1vaXN0dXJlLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWwvdG90YWwtbW9pc3R1cmUtam91cm5hbC90b3RhbC1tb2lzdHVyZS1tb2RhbC90b3RhbC1tb2lzdHVyZS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2Lm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/journal/total-moisture-journal/total-moisture-modal/total-moisture-modal.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/journal/total-moisture-journal/total-moisture-modal/total-moisture-modal.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: TotalMoistureModalComponent */

  /***/
  function srcAppJournalTotalMoistureJournalTotalMoistureModalTotalMoistureModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TotalMoistureModalComponent", function () {
      return TotalMoistureModalComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var TotalMoistureModalComponent =
    /*#__PURE__*/
    function () {
      function TotalMoistureModalComponent(dialogRef, data) {
        _classCallCheck(this, TotalMoistureModalComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        data.oldTrayWeight = data.trayWeight;
        data.oldtrayAndSampleWeightBefore = data.trayAndSampleWeightBefore;
        data.oldtrayAndSampleWeightAfter = data.trayAndSampleWeightAfter;
        data.oldtrayAndSampleWeightAfterPlus = data.trayAndSampleWeightAfterPlus; // data.oldDate = data.date;
      }

      _createClass(TotalMoistureModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return TotalMoistureModalComponent;
    }();

    TotalMoistureModalComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    TotalMoistureModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-total-moisture-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./total-moisture-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/journal/total-moisture-journal/total-moisture-modal/total-moisture-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./total-moisture-modal.component.css */
      "./src/app/journal/total-moisture-journal/total-moisture-modal/total-moisture-modal.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], TotalMoistureModalComponent);
    /***/
  }
}]);
//# sourceMappingURL=journal-total-moisture-journal-total-moisture-journal-module-es5.js.map