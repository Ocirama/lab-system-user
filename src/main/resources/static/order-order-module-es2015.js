(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js ***!
  \**********************************************************************************/
/*! exports provided: MultiSelectComponent, NgMultiSelectDropDownModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function() { return MultiSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMultiSelectDropDownModule", function() { return NgMultiSelectDropDownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ListFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





class ListItem {
    constructor(source) {
        if (typeof source === 'string' || typeof source === 'number') {
            this.id = this.text = source;
            this.isDisabled = false;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
            this.isDisabled = source.isDisabled;
        }
    }
}

const DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MultiSelectComponent),
    multi: true
};
const noop = () => { };
const ɵ0 = noop;
let MultiSelectComponent = class MultiSelectComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this._data = [];
        this.selectedItems = [];
        this.isDropdownOpen = true;
        this._placeholder = "Select";
        this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object
        this._sourceDataFields = []; // store source data fields names
        this.filter = new ListItem(this.data);
        this.defaultSettings = {
            singleSelection: false,
            idField: "id",
            textField: "text",
            disabledField: "isDisabled",
            enableCheckAll: true,
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: "Search",
            noDataAvailablePlaceholderText: "No data available",
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false,
            allowRemoteDataSearch: false
        };
        this.disabled = false;
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    set placeholder(value) {
        if (value) {
            this._placeholder = value;
        }
        else {
            this._placeholder = "Select";
        }
    }
    set settings(value) {
        if (value) {
            this._settings = Object.assign(this.defaultSettings, value);
        }
        else {
            this._settings = Object.assign(this.defaultSettings);
        }
    }
    set data(value) {
        if (!value) {
            this._data = [];
        }
        else {
            const firstItem = value[0];
            this._sourceDataType = typeof firstItem;
            this._sourceDataFields = this.getFields(firstItem);
            this._data = value.map((item) => typeof item === "string" || typeof item === "number"
                ? new ListItem(item)
                : new ListItem({
                    id: item[this._settings.idField],
                    text: item[this._settings.textField],
                    isDisabled: item[this._settings.disabledField]
                }));
        }
    }
    onFilterTextChange($event) {
        this.onFilterChange.emit($event);
    }
    onItemClick($event, item) {
        if (this.disabled || item.isDisabled) {
            return false;
        }
        const found = this.isSelected(item);
        const allowAdd = this._settings.limitSelection === -1 || (this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection);
        if (!found) {
            if (allowAdd) {
                this.addSelected(item);
            }
        }
        else {
            this.removeSelected(item);
        }
        if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
            this.closeDropdown();
        }
    }
    writeValue(value) {
        if (value !== undefined && value !== null && value.length > 0) {
            if (this._settings.singleSelection) {
                try {
                    if (value.length >= 1) {
                        const firstItem = value[0];
                        this.selectedItems = [
                            typeof firstItem === "string" || typeof firstItem === "number"
                                ? new ListItem(firstItem)
                                : new ListItem({
                                    id: firstItem[this._settings.idField],
                                    text: firstItem[this._settings.textField],
                                    isDisabled: firstItem[this._settings.disabledField]
                                })
                        ];
                    }
                }
                catch (e) {
                    // console.error(e.body.msg);
                }
            }
            else {
                const _data = value.map((item) => typeof item === "string" || typeof item === "number"
                    ? new ListItem(item)
                    : new ListItem({
                        id: item[this._settings.idField],
                        text: item[this._settings.textField],
                        isDisabled: item[this._settings.disabledField]
                    }));
                if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                }
                else {
                    this.selectedItems = _data;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
        this.onChangeCallback(value);
    }
    // From ControlValueAccessor interface
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    // Set touched on blur
    onTouched() {
        this.closeDropdown();
        this.onTouchedCallback();
    }
    trackByFn(index, item) {
        return item.id;
    }
    isSelected(clickedItem) {
        let found = false;
        this.selectedItems.forEach(item => {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    }
    isLimitSelectionReached() {
        return this._settings.limitSelection === this.selectedItems.length;
    }
    isAllItemsSelected() {
        // get disabld item count
        const itemDisabledCount = this._data.filter(item => item.isDisabled).length;
        // take disabled items into consideration when checking
        if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
            return false;
        }
        return this._data.length === this.selectedItems.length + itemDisabledCount;
    }
    showButton() {
        if (!this._settings.singleSelection) {
            if (this._settings.limitSelection > 0) {
                return false;
            }
            // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
            return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        }
        else {
            // should be disabled in single selection mode
            return false;
        }
    }
    itemShowRemaining() {
        return this.selectedItems.length - this._settings.itemsShowLimit;
    }
    addSelected(item) {
        if (this._settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.push(item);
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(item));
    }
    removeSelected(itemSel) {
        this.selectedItems.forEach(item => {
            if (itemSel.id === item.id) {
                this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(itemSel));
    }
    emittedValue(val) {
        const selected = [];
        if (Array.isArray(val)) {
            val.map(item => {
                selected.push(this.objectify(item));
            });
        }
        else {
            if (val) {
                return this.objectify(val);
            }
        }
        return selected;
    }
    objectify(val) {
        if (this._sourceDataType === 'object') {
            const obj = {};
            obj[this._settings.idField] = val.id;
            obj[this._settings.textField] = val.text;
            if (this._sourceDataFields.includes(this._settings.disabledField)) {
                obj[this._settings.disabledField] = val.isDisabled;
            }
            return obj;
        }
        if (this._sourceDataType === 'number') {
            return Number(val.id);
        }
        else {
            return val.text;
        }
    }
    toggleDropdown(evt) {
        evt.preventDefault();
        if (this.disabled && this._settings.singleSelection) {
            return;
        }
        this._settings.defaultOpen = !this._settings.defaultOpen;
        if (!this._settings.defaultOpen) {
            this.onDropDownClose.emit();
        }
    }
    closeDropdown() {
        this._settings.defaultOpen = false;
        // clear search text
        if (this._settings.clearSearchFilter) {
            this.filter.text = "";
        }
        this.onDropDownClose.emit();
    }
    toggleSelectAll() {
        if (this.disabled) {
            return false;
        }
        if (!this.isAllItemsSelected()) {
            // filter out disabled item first before slicing
            this.selectedItems = this._data.filter(item => !item.isDisabled).slice();
            this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        else {
            this.selectedItems = [];
            this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
    }
    getFields(inputData) {
        const fields = [];
        if (typeof inputData !== "object") {
            return fields;
        }
        // tslint:disable-next-line:forin
        for (const prop in inputData) {
            fields.push(prop);
        }
        return fields;
    }
};
MultiSelectComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MultiSelectComponent.prototype, "placeholder", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MultiSelectComponent.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MultiSelectComponent.prototype, "settings", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MultiSelectComponent.prototype, "data", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onFilterChange")
], MultiSelectComponent.prototype, "onFilterChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDropDownClose")
], MultiSelectComponent.prototype, "onDropDownClose", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelect")
], MultiSelectComponent.prototype, "onSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelect")
], MultiSelectComponent.prototype, "onDeSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelectAll")
], MultiSelectComponent.prototype, "onSelectAll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelectAll")
], MultiSelectComponent.prototype, "onDeSelectAll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("blur")
], MultiSelectComponent.prototype, "onTouched", null);
MultiSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "ng-multiselect-dropdown",
        template: "<div tabindex=\"=0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\r\n  <div [class.disabled]=\"disabled\">\r\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\r\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\r\n      <span class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\r\n        {{item.text}}\r\n        <a style=\"padding-top:2px;padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\r\n      </span>\r\n      <span style=\"float:right !important;padding-right:4px\">\r\n        <span style=\"padding-right: 6px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\r\n        <span [ngClass]=\"_settings.defaultOpen ? 'dropdown-up' : 'dropdown-down'\"></span>\r\n      </span>\r\n    </span>\r\n  </div>\r\n  <div class=\"dropdown-list\" [hidden]=\"!_settings.defaultOpen\">\r\n    <ul class=\"item1\">\r\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\r\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\r\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\r\n      </li>\r\n      <li class=\"filter-textbox\" *ngIf=\"(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter\">\r\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\r\n      </li>\r\n    </ul>\r\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\r\n      <li *ngFor=\"let item of _data | multiSelectFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\r\n        <input type=\"checkbox\" aria-label=\"multiselect-item\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled\" />\r\n        <div>{{item.text}}</div>\r\n      </li>\r\n      <li class='no-data' *ngIf=\"_data.length == 0 && !_settings.allowRemoteDataSearch\">\r\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n",
        providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-down{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .dropdown-btn .dropdown-up{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"]
    })
], MultiSelectComponent);

let ClickOutsideDirective = class ClickOutsideDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
};
ClickOutsideDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ClickOutsideDirective.prototype, "clickOutside", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target'])
], ClickOutsideDirective.prototype, "onClick", null);
ClickOutsideDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[clickOutside]'
    })
], ClickOutsideDirective);

let ListFilterPipe = class ListFilterPipe {
    transform(items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item) => this.applyFilter(item, filter));
    }
    applyFilter(item, filter) {
        if (typeof item.text === 'string' && typeof filter.text === 'string') {
            return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
        }
        else {
            return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
        }
    }
};
ListFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'multiSelectFilter',
        pure: false
    })
], ListFilterPipe);

var NgMultiSelectDropDownModule_1;
let NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = class NgMultiSelectDropDownModule {
    static forRoot() {
        return {
            ngModule: NgMultiSelectDropDownModule_1
        };
    }
};
NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
        exports: [MultiSelectComponent]
    })
], NgMultiSelectDropDownModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-multiselect-dropdown.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/form/form.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/form/form.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div [hidden]=\"submitted\">\r\n    <h1>Užsakymo forma</h1>\r\n\r\n    <form (ngSubmit)=\"onSubmit(); onSubmit2()\" #orderForm=\"ngForm\" novalidate id=\"orderForm\">\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"protocolId\">Protokolas</label>\r\n        <input\r\n          (ngModelChange)=\"protocolChange($event)\"\r\n          [(ngModel)]=\"orders.protocolId\"\r\n          required\r\n          pattern=\"^[0-9]*$\"\r\n          name=\"protocolId\"\r\n          #protocol=\"ngModel\"\r\n          id=\"protocolId\"\r\n          class=\"form-control\"\r\n          tabIndex=\"1\"\r\n        >\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          *ngIf=\"protocol.touched && !protocol.valid\">\r\n          <small\r\n            *ngIf=\"protocol.errors.required\">\r\n            Įveskite užsakymo numerį\r\n          </small>\r\n          <div\r\n            *ngIf=\"protocol.errors.maxlength\">\r\n            Max {{protocol.errors.maxlength.requiredLength}} chars allowed\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <label for=\"customer\"> Užsakovas </label>\r\n        <input [(ngModel)]=\"orders.customer\" name=\"customer\" type=\"text\" class=\"form-control\" id=\"customer\"\r\n               #customer=\"ngModel\"\r\n               required\r\n               [matAutocomplete]=\"autoGroup\">\r\n\r\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\r\n          <mat-optgroup *ngFor=\"let group of customerGroupOptions | async\" [label]=\"group.letter\">\r\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\r\n              {{name}}\r\n              <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"swalCustomerDelete();delete(name)\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n            </mat-option>\r\n          </mat-optgroup>\r\n          <button mat-menu-item (click)=\"openDialog()\">\r\n            <mat-icon>edit</mat-icon>\r\n            <span>Pridėti naują užsakovą</span>\r\n          </button>\r\n        </mat-autocomplete>\r\n\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          *ngIf=\"customer.touched && !customer.valid\">\r\n          <small\r\n            *ngIf=\"customer.errors.required\">\r\n            Įveskite užsakovą\r\n          </small>\r\n        </div>\r\n        <div>\r\n          <label>Tyrimai</label>\r\n        <ng-multiselect-dropdown\r\n          name=\"tests\"\r\n          #tests=\"ngModel\"\r\n          id=\"tests\"\r\n          [placeholder]=\"'-'\"\r\n          [data]=\"dropdownList\"\r\n          [(ngModel)]=\"selectedItems\"\r\n          [settings]=\"dropdownSettings\"\r\n          (onDropDownClose)=\"onDropDownClose(selectedItems)\"\r\n        >\r\n        </ng-multiselect-dropdown>\r\n        </div>\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          *ngIf=\"tests.touched && !tests.valid\">\r\n          <small\r\n            *ngIf=\"tests.errors.required\">\r\n            Įveskite daromus tyrimus\r\n          </small>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"orderType\"> Kuro rūšis </label>\r\n        <br>\r\n        <select (blur)=\"validateType(sampleTypeS.value)\" (change)=\"validateType(sampleTypeS.value)\"\r\n                #sampleTypeS=\"ngModel\"\r\n                [(ngModel)]=\"orders.sampleType\" name=\"sampleType\" class=\"form-control\" required id=\"orderType\">\r\n\r\n          <option *ngFor=\"let sampleType of sampleTypes\">{{sampleType}}\r\n          </option>\r\n        </select>\r\n        <small class=\"text-danger\" *ngIf=\"sampleTypeS.touched &&!sampleTypeS.valid\">Pasirinkitę kuro rūšį</small>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"sampleAmount\"> Kiekis </label>\r\n        <input\r\n          (focusout)=\"toggleChild();childFunction(orders)\"\r\n          required\r\n          [(ngModel)]=\"orders.orderAmount\"\r\n          name=\"orderAmount\"\r\n          #sampleAmount=\"ngModel\"\r\n          pattern=\"^[0-9]*$\"\r\n          class=\"form-control\"\r\n          id=\"sampleAmount\"\r\n        >\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          *ngIf=\"sampleAmount.touched && !sampleAmount.valid\">\r\n          <small\r\n            *ngIf=\"sampleAmount.errors.required\">\r\n            Įveskite mėginių kiekį\r\n          </small>\r\n        </div>\r\n      </div>\r\n\r\n      <button mat-button [disabled]=\"orderForm.form.invalid || typeHasError\" type=\"submit\" class=\"btn btn-primary\"\r\n              (click)=\"swalOrderRegister()\">\r\n        Registruoti\r\n      </button>\r\n\r\n      <button mat-button type=\"button\" class=\" btn btn-secondary\" (click)=\"clear()\">Valyti</button>\r\n\r\n      <ol class=\"form-group\">\r\n        <label *ngIf=\"showVar\"> Mėginių sąrašas </label>\r\n\r\n        <li *ngFor=\"let sample of sampleList; let i= index\">\r\n          <td>\r\n            <input type=\"text\" name=\"sampleId-{{i}}\" [(ngModel)]=\"sampleList[i].sampleId\" #ft01=\"ngModel\"\r\n                   class=\"form-control\" #samplesS=\"ngModel\" required\r\n            ></td>\r\n          <div\r\n            class=\"alert alert-danger\"\r\n            *ngIf=\"samplesS.touched && !samplesS.valid\">\r\n            <small\r\n              *ngIf=\"samplesS.errors.required\">\r\n              Įveskite mėginio ID\r\n            </small>\r\n          </div>\r\n      </ol>\r\n\r\n    </form>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/modal/modal.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/modal/modal.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Užsakovas\" [(ngModel)]=\"data.title\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"data\">Save</button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/sweetalert2/src/sweetalert2.scss":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/sweetalert2.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swal2-popup.swal2-toast {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: auto;\n  padding: 0.625em;\n  overflow-y: hidden;\n  background: #fff;\n  box-shadow: 0 0 0.625em #d9d9d9;\n}\n.swal2-popup.swal2-toast .swal2-header {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.swal2-popup.swal2-toast .swal2-title {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin: 0 0.6em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-footer {\n  margin: 0.5em 0 0;\n  padding: 0.5em 0 0;\n  font-size: 0.8em;\n}\n.swal2-popup.swal2-toast .swal2-close {\n  position: static;\n  width: 0.8em;\n  height: 0.8em;\n  line-height: 0.8;\n}\n.swal2-popup.swal2-toast .swal2-content {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-icon {\n  width: 2em;\n  min-width: 2em;\n  height: 2em;\n  margin: 0;\n}\n.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 1.8em;\n  font-weight: bold;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n    font-size: 0.25em;\n  }\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n  top: 0.875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n  left: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n  right: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-actions {\n  flex-basis: auto !important;\n  width: auto;\n  height: auto;\n  margin: 0 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-styled {\n  margin: 0 0.3125em;\n  padding: 0.3125em 0.625em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-styled:focus {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4);\n}\n.swal2-popup.swal2-toast .swal2-success {\n  border-color: #a5dc86;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line] {\n  position: absolute;\n  width: 1.6em;\n  height: 3em;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  border-radius: 50%;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left] {\n  top: -0.8em;\n  left: -0.5em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 2em 2em;\n          transform-origin: 2em 2em;\n  border-radius: 4em 0 0 4em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.25em;\n  left: 0.9375em;\n  -webkit-transform-origin: 0 1.5em;\n          transform-origin: 0 1.5em;\n  border-radius: 0 4em 4em 0;\n}\n.swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n  top: 0;\n  left: 0.4375em;\n  width: 0.4375em;\n  height: 2.6875em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line] {\n  height: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 1.125em;\n  left: 0.1875em;\n  width: 0.75em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long] {\n  top: 0.9375em;\n  right: 0.1875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip {\n  -webkit-animation: swal2-toast-animate-success-line-tip 0.75s;\n          animation: swal2-toast-animate-success-line-tip 0.75s;\n}\n.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long {\n  -webkit-animation: swal2-toast-animate-success-line-long 0.75s;\n          animation: swal2-toast-animate-success-line-long 0.75s;\n}\n.swal2-popup.swal2-toast.swal2-show {\n  -webkit-animation: swal2-toast-show 0.5s;\n          animation: swal2-toast-show 0.5s;\n}\n.swal2-popup.swal2-toast.swal2-hide {\n  -webkit-animation: swal2-toast-hide 0.1s forwards;\n          animation: swal2-toast-hide 0.1s forwards;\n}\n.swal2-container {\n  display: -webkit-box;\n  display: flex;\n  position: fixed;\n  z-index: 1060;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0.625em;\n  overflow-x: hidden;\n  -webkit-transition: background-color 0.1s;\n  transition: background-color 0.1s;\n  -webkit-overflow-scrolling: touch;\n}\n.swal2-container.swal2-backdrop-show {\n  background: rgba(0, 0, 0, 0.4);\n}\n.swal2-container.swal2-backdrop-hide {\n  background: transparent !important;\n}\n.swal2-container.swal2-top {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.swal2-container.swal2-center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n.swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.swal2-container.swal2-bottom {\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.swal2-container.swal2-bottom > :first-child, .swal2-container.swal2-bottom-start > :first-child, .swal2-container.swal2-bottom-left > :first-child, .swal2-container.swal2-bottom-end > :first-child, .swal2-container.swal2-bottom-right > :first-child {\n  margin-top: auto;\n}\n.swal2-container.swal2-grow-fullscreen > .swal2-modal {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-flex: 1;\n          flex: 1;\n  align-self: stretch;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.swal2-container.swal2-grow-row > .swal2-modal {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-flex: 1;\n          flex: 1;\n  align-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.swal2-container.swal2-grow-column {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n  -webkit-box-align: center;\n          align-items: center;\n}\n.swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.swal2-container.swal2-grow-column > .swal2-modal {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-flex: 1;\n          flex: 1;\n  align-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.swal2-container.swal2-no-transition {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen) > .swal2-modal {\n  margin: auto;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-container .swal2-modal {\n    margin: 0 !important;\n  }\n}\n.swal2-popup {\n  display: none;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 32em;\n  max-width: 100%;\n  padding: 1.25em;\n  border: none;\n  border-radius: 0.3125em;\n  background: #fff;\n  font-family: inherit;\n  font-size: 1rem;\n}\n.swal2-popup:focus {\n  outline: none;\n}\n.swal2-popup.swal2-loading {\n  overflow-y: hidden;\n}\n.swal2-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.swal2-title {\n  position: relative;\n  max-width: 100%;\n  margin: 0 0 0.4em;\n  padding: 0;\n  color: #595959;\n  font-size: 1.875em;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  word-wrap: break-word;\n}\n.swal2-actions {\n  display: -webkit-box;\n  display: flex;\n  z-index: 1;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  margin: 1.25em auto 0;\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n  opacity: 0.4;\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.1)));\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled:active {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(rgba(0, 0, 0, 0.2)));\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\n}\n.swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n  box-sizing: border-box;\n  width: 2.5em;\n  height: 2.5em;\n  margin: 0.46875em;\n  padding: 0;\n  -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n          animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n  border: 0.25em solid transparent;\n  border-radius: 100%;\n  border-color: transparent;\n  background-color: transparent !important;\n  color: transparent;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n  margin-right: 30px;\n  margin-left: 30px;\n}\n.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n  content: \"\";\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  margin-left: 5px;\n  -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n          animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n  border: 3px solid #999999;\n  border-radius: 50%;\n  border-right-color: transparent;\n  box-shadow: 1px 1px 1px #fff;\n}\n.swal2-styled {\n  margin: 0.3125em;\n  padding: 0.625em 2em;\n  box-shadow: none;\n  font-weight: 500;\n}\n.swal2-styled:not([disabled]) {\n  cursor: pointer;\n}\n.swal2-styled.swal2-confirm {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #3085d6;\n  color: #fff;\n  font-size: 1.0625em;\n}\n.swal2-styled.swal2-cancel {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #aaa;\n  color: #fff;\n  font-size: 1.0625em;\n}\n.swal2-styled:focus {\n  outline: none;\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4);\n}\n.swal2-styled::-moz-focus-inner {\n  border: 0;\n}\n.swal2-footer {\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 1.25em 0 0;\n  padding: 1em 0 0;\n  border-top: 1px solid #eee;\n  color: #545454;\n  font-size: 1em;\n}\n.swal2-timer-progress-bar-container {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 0.25em;\n  overflow: hidden;\n  border-bottom-right-radius: 0.3125em;\n  border-bottom-left-radius: 0.3125em;\n}\n.swal2-timer-progress-bar {\n  width: 100%;\n  height: 0.25em;\n  background: rgba(0, 0, 0, 0.2);\n}\n.swal2-image {\n  max-width: 100%;\n  margin: 1.25em auto;\n}\n.swal2-close {\n  position: absolute;\n  z-index: 2;\n  /* 1617 */\n  top: 0;\n  right: 0;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 1.2em;\n  height: 1.2em;\n  padding: 0;\n  overflow: hidden;\n  -webkit-transition: color 0.1s ease-out;\n  transition: color 0.1s ease-out;\n  border: none;\n  border-radius: 0;\n  outline: initial;\n  background: transparent;\n  color: #cccccc;\n  font-family: serif;\n  font-size: 2.5em;\n  line-height: 1.2;\n  cursor: pointer;\n}\n.swal2-close:hover {\n  -webkit-transform: none;\n          transform: none;\n  background: transparent;\n  color: #f27474;\n}\n.swal2-close::-moz-focus-inner {\n  border: 0;\n}\n.swal2-content {\n  z-index: 1;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 0;\n  padding: 0;\n  color: #545454;\n  font-size: 1.125em;\n  font-weight: normal;\n  line-height: normal;\n  text-align: center;\n  word-wrap: break-word;\n}\n.swal2-input,\n.swal2-file,\n.swal2-textarea,\n.swal2-select,\n.swal2-radio,\n.swal2-checkbox {\n  margin: 1em auto;\n}\n.swal2-input,\n.swal2-file,\n.swal2-textarea {\n  box-sizing: border-box;\n  width: 100%;\n  -webkit-transition: border-color 0.3s, box-shadow 0.3s;\n  transition: border-color 0.3s, box-shadow 0.3s;\n  border: 1px solid #d9d9d9;\n  border-radius: 0.1875em;\n  background: inherit;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n  color: inherit;\n  font-size: 1.125em;\n}\n.swal2-input.swal2-inputerror,\n.swal2-file.swal2-inputerror,\n.swal2-textarea.swal2-inputerror {\n  border-color: #f27474 !important;\n  box-shadow: 0 0 2px #f27474 !important;\n}\n.swal2-input:focus,\n.swal2-file:focus,\n.swal2-textarea:focus {\n  border: 1px solid #b4dbed;\n  outline: none;\n  box-shadow: 0 0 3px #c4e6f5;\n}\n.swal2-input::-webkit-input-placeholder,\n.swal2-file::-webkit-input-placeholder,\n.swal2-textarea::-webkit-input-placeholder {\n  color: #cccccc;\n}\n.swal2-input::-moz-placeholder,\n.swal2-file::-moz-placeholder,\n.swal2-textarea::-moz-placeholder {\n  color: #cccccc;\n}\n.swal2-input::-ms-input-placeholder,\n.swal2-file::-ms-input-placeholder,\n.swal2-textarea::-ms-input-placeholder {\n  color: #cccccc;\n}\n.swal2-input::placeholder,\n.swal2-file::placeholder,\n.swal2-textarea::placeholder {\n  color: #cccccc;\n}\n.swal2-range {\n  margin: 1em auto;\n  background: #fff;\n}\n.swal2-range input {\n  width: 80%;\n}\n.swal2-range output {\n  width: 20%;\n  color: inherit;\n  font-weight: 600;\n  text-align: center;\n}\n.swal2-range input,\n.swal2-range output {\n  height: 2.625em;\n  padding: 0;\n  font-size: 1.125em;\n  line-height: 2.625em;\n}\n.swal2-input {\n  height: 2.625em;\n  padding: 0 0.75em;\n}\n.swal2-input[type=number] {\n  max-width: 10em;\n}\n.swal2-file {\n  background: inherit;\n  font-size: 1.125em;\n}\n.swal2-textarea {\n  height: 6.75em;\n  padding: 0.75em;\n}\n.swal2-select {\n  min-width: 50%;\n  max-width: 100%;\n  padding: 0.375em 0.625em;\n  background: inherit;\n  color: inherit;\n  font-size: 1.125em;\n}\n.swal2-radio,\n.swal2-checkbox {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #fff;\n  color: inherit;\n}\n.swal2-radio label,\n.swal2-checkbox label {\n  margin: 0 0.6em;\n  font-size: 1.125em;\n}\n.swal2-radio input,\n.swal2-checkbox input {\n  margin: 0 0.4em;\n}\n.swal2-validation-message {\n  display: none;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0.625em;\n  overflow: hidden;\n  background: #f0f0f0;\n  color: #666666;\n  font-size: 1em;\n  font-weight: 300;\n}\n.swal2-validation-message::before {\n  content: \"!\";\n  display: inline-block;\n  width: 1.5em;\n  min-width: 1.5em;\n  height: 1.5em;\n  margin: 0 0.625em;\n  border-radius: 50%;\n  background-color: #f27474;\n  color: #fff;\n  font-weight: 600;\n  line-height: 1.5em;\n  text-align: center;\n}\n.swal2-icon {\n  position: relative;\n  box-sizing: content-box;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 5em;\n  height: 5em;\n  margin: 1.25em auto 1.875em;\n  border: 0.25em solid transparent;\n  border-radius: 50%;\n  font-family: inherit;\n  line-height: 5em;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.swal2-icon .swal2-icon-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 3.75em;\n}\n.swal2-icon.swal2-error {\n  border-color: #f27474;\n  color: #f27474;\n}\n.swal2-icon.swal2-error .swal2-x-mark {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n  display: block;\n  position: absolute;\n  top: 2.3125em;\n  width: 2.9375em;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #f27474;\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n  left: 1.0625em;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n  right: 1em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.swal2-icon.swal2-error.swal2-icon-show {\n  -webkit-animation: swal2-animate-error-icon 0.5s;\n          animation: swal2-animate-error-icon 0.5s;\n}\n.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark {\n  -webkit-animation: swal2-animate-error-x-mark 0.5s;\n          animation: swal2-animate-error-x-mark 0.5s;\n}\n.swal2-icon.swal2-warning {\n  border-color: #facea8;\n  color: #f8bb86;\n}\n.swal2-icon.swal2-info {\n  border-color: #9de0f6;\n  color: #3fc3ee;\n}\n.swal2-icon.swal2-question {\n  border-color: #c9dae1;\n  color: #87adbd;\n}\n.swal2-icon.swal2-success {\n  border-color: #a5dc86;\n  color: #a5dc86;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line] {\n  position: absolute;\n  width: 3.75em;\n  height: 7.5em;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  border-radius: 50%;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left] {\n  top: -0.4375em;\n  left: -2.0635em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 3.75em 3.75em;\n          transform-origin: 3.75em 3.75em;\n  border-radius: 7.5em 0 0 7.5em;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.6875em;\n  left: 1.875em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 0 3.75em;\n          transform-origin: 0 3.75em;\n  border-radius: 0 7.5em 7.5em 0;\n}\n.swal2-icon.swal2-success .swal2-success-ring {\n  position: absolute;\n  z-index: 2;\n  top: -0.25em;\n  left: -0.25em;\n  box-sizing: content-box;\n  width: 100%;\n  height: 100%;\n  border: 0.25em solid rgba(165, 220, 134, 0.3);\n  border-radius: 50%;\n}\n.swal2-icon.swal2-success .swal2-success-fix {\n  position: absolute;\n  z-index: 1;\n  top: 0.5em;\n  left: 1.625em;\n  width: 0.4375em;\n  height: 5.625em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.swal2-icon.swal2-success [class^=swal2-success-line] {\n  display: block;\n  position: absolute;\n  z-index: 2;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #a5dc86;\n}\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 2.875em;\n  left: 0.8125em;\n  width: 1.5625em;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=long] {\n  top: 2.375em;\n  right: 0.5em;\n  width: 2.9375em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip {\n  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n          animation: swal2-animate-success-line-tip 0.75s;\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long {\n  -webkit-animation: swal2-animate-success-line-long 0.75s;\n          animation: swal2-animate-success-line-long 0.75s;\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right {\n  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n          animation: swal2-rotate-success-circular-line 4.25s ease-in;\n}\n.swal2-progress-steps {\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 0 1.25em;\n  padding: 0;\n  background: inherit;\n  font-weight: 600;\n}\n.swal2-progress-steps li {\n  display: inline-block;\n  position: relative;\n}\n.swal2-progress-steps .swal2-progress-step {\n  z-index: 20;\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  background: #3085d6;\n  color: #fff;\n  line-height: 2em;\n  text-align: center;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {\n  background: #3085d6;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background: #add8e6;\n  color: #fff;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line {\n  background: #add8e6;\n}\n.swal2-progress-steps .swal2-progress-step-line {\n  z-index: 10;\n  width: 2.5em;\n  height: 0.4em;\n  margin: 0 -1px;\n  background: #3085d6;\n}\n[class^=swal2] {\n  -webkit-tap-highlight-color: transparent;\n}\n.swal2-show {\n  -webkit-animation: swal2-show 0.3s;\n          animation: swal2-show 0.3s;\n}\n.swal2-hide {\n  -webkit-animation: swal2-hide 0.15s forwards;\n          animation: swal2-hide 0.15s forwards;\n}\n.swal2-noanimation {\n  -webkit-transition: none;\n  transition: none;\n}\n.swal2-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n.swal2-rtl .swal2-close {\n  right: auto;\n  left: 0;\n}\n.swal2-rtl .swal2-timer-progress-bar {\n  right: 0;\n  left: auto;\n}\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important;\n  }\n  .swal2-range output {\n    display: none;\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important;\n  }\n  .swal2-range output {\n    display: none;\n  }\n}\n@-moz-document url-prefix() {\n  .swal2-close:focus {\n    outline: 2px solid rgba(50, 100, 150, 0.4);\n  }\n}\n@-webkit-keyframes swal2-toast-show {\n  0% {\n    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n            transform: translateY(-0.625em) rotateZ(2deg);\n  }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n  }\n  66% {\n    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n            transform: translateY(0.3125em) rotateZ(2deg);\n  }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0deg);\n            transform: translateY(0) rotateZ(0deg);\n  }\n}\n@keyframes swal2-toast-show {\n  0% {\n    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n            transform: translateY(-0.625em) rotateZ(2deg);\n  }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n  }\n  66% {\n    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n            transform: translateY(0.3125em) rotateZ(2deg);\n  }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0deg);\n            transform: translateY(0) rotateZ(0deg);\n  }\n}\n@-webkit-keyframes swal2-toast-hide {\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0;\n  }\n}\n@keyframes swal2-toast-hide {\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: 0.5625em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 0.125em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 0.625em;\n    left: -0.25em;\n    width: 1.625em;\n  }\n  84% {\n    top: 1.0625em;\n    left: 0.75em;\n    width: 0.5em;\n  }\n  100% {\n    top: 1.125em;\n    left: 0.1875em;\n    width: 0.75em;\n  }\n}\n@keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: 0.5625em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 0.125em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 0.625em;\n    left: -0.25em;\n    width: 1.625em;\n  }\n  84% {\n    top: 1.0625em;\n    left: 0.75em;\n    width: 0.5em;\n  }\n  100% {\n    top: 1.125em;\n    left: 0.1875em;\n    width: 0.75em;\n  }\n}\n@-webkit-keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0;\n  }\n  65% {\n    top: 1.25em;\n    right: 0.9375em;\n    width: 0;\n  }\n  84% {\n    top: 0.9375em;\n    right: 0;\n    width: 1.125em;\n  }\n  100% {\n    top: 0.9375em;\n    right: 0.1875em;\n    width: 1.375em;\n  }\n}\n@keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0;\n  }\n  65% {\n    top: 1.25em;\n    right: 0.9375em;\n    width: 0;\n  }\n  84% {\n    top: 0.9375em;\n    right: 0;\n    width: 1.125em;\n  }\n  100% {\n    top: 0.9375em;\n    right: 0.1875em;\n    width: 1.375em;\n  }\n}\n@-webkit-keyframes swal2-show {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n  }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes swal2-show {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n  }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes swal2-hide {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0;\n  }\n}\n@keyframes swal2-hide {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n@keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n@-webkit-keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@-webkit-keyframes swal2-rotate-success-circular-line {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg);\n  }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg);\n  }\n}\n@keyframes swal2-rotate-success-circular-line {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg);\n  }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg);\n  }\n}\n@-webkit-keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes swal2-animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@keyframes swal2-animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes swal2-rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes swal2-rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\nbody.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  overflow: hidden;\n}\nbody.swal2-height-auto {\n  height: auto !important;\n}\nbody.swal2-no-backdrop .swal2-container {\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  max-width: calc(100% - 0.625em * 2);\n  background-color: transparent !important;\n}\nbody.swal2-no-backdrop .swal2-container > .swal2-modal {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top {\n  top: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top-start, body.swal2-no-backdrop .swal2-container.swal2-top-left {\n  top: 0;\n  left: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top-end, body.swal2-no-backdrop .swal2-container.swal2-top-right {\n  top: 0;\n  right: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center-start, body.swal2-no-backdrop .swal2-container.swal2-center-left {\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center-end, body.swal2-no-backdrop .swal2-container.swal2-center-right {\n  top: 50%;\n  right: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom {\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom-start, body.swal2-no-backdrop .swal2-container.swal2-bottom-left {\n  bottom: 0;\n  left: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom-end, body.swal2-no-backdrop .swal2-container.swal2-bottom-right {\n  right: 0;\n  bottom: 0;\n}\n@media print {\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n    overflow-y: scroll !important;\n  }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden=true] {\n    display: none;\n  }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {\n    position: static !important;\n  }\n}\nbody.swal2-toast-shown .swal2-container {\n  background-color: transparent;\n}\nbody.swal2-toast-shown .swal2-container.swal2-top {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-top-end, body.swal2-toast-shown .swal2-container.swal2-top-right {\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n}\nbody.swal2-toast-shown .swal2-container.swal2-top-start, body.swal2-toast-shown .swal2-container.swal2-top-left {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n}\nbody.swal2-toast-shown .swal2-container.swal2-center-start, body.swal2-toast-shown .swal2-container.swal2-center-left {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-center {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-center-end, body.swal2-toast-shown .swal2-container.swal2-center-right {\n  top: 50%;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom-start, body.swal2-toast-shown .swal2-container.swal2-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 0;\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom-end, body.swal2-toast-shown .swal2-container.swal2-bottom-right {\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: auto;\n}\nbody.swal2-toast-column .swal2-toast {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\nbody.swal2-toast-column .swal2-toast .swal2-actions {\n  -webkit-box-flex: 1;\n          flex: 1;\n  align-self: stretch;\n  height: 2.2em;\n  margin-top: 0.3125em;\n}\nbody.swal2-toast-column .swal2-toast .swal2-loading {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nbody.swal2-toast-column .swal2-toast .swal2-input {\n  height: 2em;\n  margin: 0.3125em auto;\n  font-size: 1em;\n}\nbody.swal2-toast-column .swal2-toast .swal2-validation-message {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvQzpcXFVzZXJzXFxsZWkxMlxcSWRlYVByb2plY3RzXFxsYWItc3lzdGVtXFxsYWItc3lzdGVtLWZlL25vZGVfbW9kdWxlc1xcc3dlZXRhbGVydDJcXHNyY1xcc2Nzc1xcX3RvYXN0cy5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXGxlaTEyXFxJZGVhUHJvamVjdHNcXGxhYi1zeXN0ZW1cXGxhYi1zeXN0ZW0tZmUvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFx2YXJpYWJsZXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3dlZXRhbGVydDIuc2NzcyIsIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvQzpcXFVzZXJzXFxsZWkxMlxcSWRlYVByb2plY3RzXFxsYWItc3lzdGVtXFxsYWItc3lzdGVtLWZlL25vZGVfbW9kdWxlc1xcc3dlZXRhbGVydDJcXHNyY1xcc2Nzc1xcX21peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXGxlaTEyXFxJZGVhUHJvamVjdHNcXGxhYi1zeXN0ZW1cXGxhYi1zeXN0ZW0tZmUvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFxzY3NzXFxfY29yZS5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXGxlaTEyXFxJZGVhUHJvamVjdHNcXGxhYi1zeXN0ZW1cXGxhYi1zeXN0ZW0tZmUvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFxzY3NzXFxfcG9seWZpbGxzLnNjc3MiLCJub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL0M6XFxVc2Vyc1xcbGVpMTJcXElkZWFQcm9qZWN0c1xcbGFiLXN5c3RlbVxcbGFiLXN5c3RlbS1mZS9ub2RlX21vZHVsZXNcXHN3ZWV0YWxlcnQyXFxzcmNcXHNjc3NcXF90b2FzdHMtYW5pbWF0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXGxlaTEyXFxJZGVhUHJvamVjdHNcXGxhYi1zeXN0ZW1cXGxhYi1zeXN0ZW0tZmUvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFxzY3NzXFxfYW5pbWF0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXGxlaTEyXFxJZGVhUHJvamVjdHNcXGxhYi1zeXN0ZW1cXGxhYi1zeXN0ZW0tZmUvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFxzY3NzXFxfYm9keS5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXGxlaTEyXFxJZGVhUHJvamVjdHNcXGxhYi1zeXN0ZW1cXGxhYi1zeXN0ZW0tZmUvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFxzY3NzXFxfdG9hc3RzLWJvZHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQzRLZ0I7RUQzS2hCLGdCQzRLa0I7RUQzS2xCLGtCQUFBO0VBQ0EsZ0JDUGtCO0VEUWxCLCtCQ21LcUI7QUNuS3pCO0FGRUk7RUFDRSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUVBTjtBRkdJO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLGVDaUtxQjtFRGhLckIsY0NpS3dCO0FDbEs5QjtBRklJO0VBQ0UsaUJDbUtzQjtFRGxLdEIsa0JDa0tzQjtFRGpLdEIsZ0JDbUt5QjtBQ3JLL0I7QUZLSTtFQUNFLGdCQUFBO0VBQ0EsWUNnSjJCO0VEL0kzQixhQ2dKNEI7RUQvSTVCLGdCQ2dKaUM7QUNuSnZDO0FGTUk7RUFDRSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0EsY0NnSjBCO0FDcEpoQztBRk9JO0VB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RUFDRSxTQUFBO0FGa0RKO0FFOUNBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCSGpOb0I7RUdrTnBCLGdCSGpOcUI7RUdrTnJCLDBCQUFBO0VBQ0EsY0hqTm1CO0VHa05uQixjSGpOdUI7QUNrUXpCO0FFOUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxjSHROZ0M7RUd1TmhDLGdCQUFBO0VBQ0Esb0NIL1RvQjtFR2dVcEIsbUNIaFVvQjtBQ2lYdEI7QUU5Q0E7RUFDRSxXQUFBO0VBQ0EsY0g5TmdDO0VHK05oQyw4Qkg5Tm9DO0FDK1F0QztBRTlDQTtFQUNFLGVBQUE7RUFDQSxtQkgzU21CO0FDNFZyQjtBRTlDQTtFQUNFLGtCSC9ONEI7RUdnTzVCLFVBQUE7RUFFQSxTQUFBO0VBQ0EsTUhsT3VCO0VHbU92QixRSG5PdUI7RUdvT3ZCLHlCSDFPK0I7VUcwTy9CLG1CSDFPK0I7RUcyTy9CLHdCSDFPbUM7VUcwT25DLHVCSDFPbUM7RUcyT25DLFlIMU95QjtFRzJPekIsYUgxTzBCO0VHMk8xQixVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0h6TzhCO0VHeU85QiwrQkh6TzhCO0VHME85QixZSHpPMEI7RUcwTzFCLGdCSHpPaUM7RUcwT2pDLGdCSHpPMkI7RUcwTzNCLHVCSHpPOEI7RUcwTzlCLGNIek95QjtFRzBPekIsa0JIek8rQjtFRzBPL0IsZ0JIek82QjtFRzBPN0IsZ0JIcFArQjtFR3FQL0IsZUFBQTtBRmdERjtBRTlDRTtFQUNFLHVCSDNPaUM7VUcyT2pDLGVIM09pQztFRzRPakMsdUJIMU9rQztFRzJPbEMsY0hoVlU7QUNnWWQ7QUU3Q0U7RUFDRSxTQUFBO0FGK0NKO0FFM0NBO0VBQ0UsVUFBQTtFQUNBLHdCSDNVOEI7VUcyVTlCLHVCSDNVOEI7RUc0VTlCLFNIM1VxQjtFRzRVckIsVUgzVXFCO0VHNFVyQixjSDNVb0I7RUc0VXBCLGtCSDNVd0I7RUc0VXhCLG1CSDNVMEI7RUc0VTFCLG1CSDNVMEI7RUc0VTFCLGtCSDNVeUI7RUc0VXpCLHFCSDNVd0I7QUN5WDFCO0FFM0NBOzs7Ozs7RUFNRSxnQkhqVm1CO0FDK1hyQjtBRTNDQTs7O0VBR0Usc0JBQUE7RUFDQSxXSHZWa0I7RUd3VmxCLHNESDVVdUI7RUc0VXZCLDhDSDVVdUI7RUc2VXZCLHlCSHRWbUI7RUd1Vm5CLHVCSHRWMEI7RUd1VjFCLG1CSGpWdUI7RUdrVnZCLCtDSHZWdUI7RUd3VnZCLGNIbFZrQjtFR21WbEIsa0JIclZzQjtBQ21ZeEI7QUU1Q0U7OztFQUNFLGdDQUFBO0VBQ0Esc0NBQUE7QUZnREo7QUU3Q0U7OztFQUNFLHlCSGhXdUI7RUdpV3ZCLGFIaFd3QjtFR2lXeEIsMkJIaFcyQjtBQ2laL0I7QUU5Q0U7OztFQUNFLGNBQUE7QUZrREo7QUVuREU7OztFQUNFLGNBQUE7QUZrREo7QUVuREU7OztFQUNFLGNBQUE7QUZrREo7QUVuREU7OztFQUNFLGNBQUE7QUZrREo7QUU5Q0E7RUFDRSxnQkhsWG1CO0VHbVhuQixnQkhqYm9CO0FDa2V0QjtBRS9DRTtFQUNFLFVBQUE7QUZpREo7QUU5Q0U7RUFDRSxVQUFBO0VBQ0EsY0gvV2dCO0VHZ1hoQixnQkFBQTtFQUNBLGtCQUFBO0FGZ0RKO0FFN0NFOztFQUVFLGVIaFlpQjtFR2lZakIsVUFBQTtFQUNBLGtCSDFYb0I7RUcyWHBCLG9CSG5ZaUI7QUNrYnJCO0FFM0NBO0VBQ0UsZUh4WW1CO0VHeVluQixpQkh4WW9CO0FDc2J0QjtBRTVDRTtFQUNFLGVBQUE7QUY4Q0o7QUUxQ0E7RUFDRSxtQkh4WXVCO0VHeVl2QixrQkgxWXNCO0FDdWJ4QjtBRTFDQTtFQUNFLGNIeFlzQjtFR3lZdEIsZUh4WXVCO0FDcWJ6QjtBRTFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkhyWnVCO0VHc1p2QixjSHJaa0I7RUdzWmxCLGtCSHhac0I7QUNxY3hCO0FFMUNBOztFQUVFLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JIdmVvQjtFR3dlcEIsY0g5WmtCO0FDMmNwQjtBRTNDRTs7RUFDRSxl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QUNFLHdEQUFBO1VBQUEsZ0RBQUE7QUZhVjtBRVZRO0VBQ0UsbUVBQUE7VUFBQSwyREFBQTtBRllWO0FFTEE7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JIaG1CNEI7RUdpbUI1QixVSGhtQjZCO0VHaW1CN0IsbUJIbm1CZ0M7RUdvbUJoQyxnQkhqbUJpQztBQ3ltQm5DO0FFTkU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FGUUo7QUVMRTtFQUNFLFdBQUE7RUFDQSxVSHhtQndCO0VHeW1CeEIsV0h4bUJ5QjtFR3ltQnpCLGtCSHhtQmdDO0VHeW1CaEMsbUJIdG1CMkI7RUd1bUIzQixXSDlzQmtCO0VHK3NCbEIsZ0JINW1CeUI7RUc2bUJ6QixrQkFBQTtBRk9KO0FFTEk7RUFDRSxtQkg1bUJ5QjtBQ21uQi9CO0FFTE07RUFDRSxtQkhqbkJ5QjtFR2tuQnpCLFdIdnRCYztBQzh0QnRCO0FFSk07RUFDRSxtQkh0bkJ5QjtBQzRuQmpDO0FFREU7RUFDRSxXQUFBO0VBQ0EsWUhqb0I0QjtFR2tvQjVCLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJIOW5CMkI7QUNpb0IvQjtBRUVBO0VBQ0Usd0NBQUE7QUZDRjtBRUVBO0VBQ0Usa0NIaHVCcUI7VUdndUJyQiwwQkhodUJxQjtBQ2l1QnZCO0FFRUE7RUFDRSw0Q0hudUJxQjtVR211QnJCLG9DSG51QnFCO0FDb3VCdkI7QUVFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7QUZDRjtBRUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRkFGO0FFS0U7RUFDRSxXQUFBO0VBQ0EsT0gzb0JxQjtBQ3lvQnpCO0FFS0U7RUFDRSxRQUFBO0VBQ0EsVUFBQTtBRkhKO0FHdHdCQTtFQUVJO0lBQ0Usc0JBQUE7RUh3d0JKO0VHcndCRTtJQUNFLGFBQUE7RUh1d0JKO0FBQ0Y7QUdsd0JBO0VBR0k7SUFDRSxzQkFBQTtFSGt3Qko7RUcvdkJFO0lBQ0UsYUFBQTtFSGl3Qko7QUFDRjtBRzV2QkE7RUFFSTtJQUNFLDBDQUFBO0VI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RSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FQcWlDUjtBT2xpQ007RUFFRSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FQbWlDUjtBT2hpQ007RUFFRSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBUGlpQ1I7QU85aENNO0VBQ0UsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QVBnaUNSO0FPN2hDTTtFQUVFLFFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FQOGhDUjtBTzNoQ007RUFFRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FQNGhDUjtBT3poQ007RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBUDJoQ1I7QU94aENNO0VBRUUsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBUHloQ1I7QU9uaENJO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMEJBQUE7VUFBQSxvQkFBQTtBUHFoQ047QU9uaENNO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QVBxaENSO0FPbGhDTTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QVBvaENSO0FPamhDTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNSaUZzQjtBQ2s4QjlCO0FPaGhDTTtFQUNFLGNSOEUyQjtBQ284Qm5DIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3dlZXRhbGVydDIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2FsMi1wb3B1cCB7XG4gICYuc3dhbDItdG9hc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogJHN3YWwyLXRvYXN0LXdpZHRoO1xuICAgIHBhZGRpbmc6ICRzd2FsMi10b2FzdC1wYWRkaW5nO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItdG9hc3QtYmFja2dyb3VuZDtcbiAgICBib3gtc2hhZG93OiAkc3dhbDItdG9hc3QtYm94LXNoYWRvdztcblxuICAgIC5zd2FsMi1oZWFkZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG5cbiAgICAuc3dhbDItdGl0bGUge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luOiAkc3dhbDItdG9hc3QtdGl0bGUtbWFyZ2luO1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtdGl0bGUtZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1mb290ZXIge1xuICAgICAgbWFyZ2luOiAkc3dhbDItdG9hc3QtZm9vdGVyLW1hcmdpbjtcbiAgICAgIHBhZGRpbmc6ICRzd2FsMi10b2FzdC1mb290ZXItbWFyZ2luO1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtZm9vdGVyLWZvbnQtc2l6ZTtcbiAgICB9XG5cbiAgICAuc3dhbDItY2xvc2Uge1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIHdpZHRoOiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLXdpZHRoO1xuICAgICAgaGVpZ2h0OiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWhlaWdodDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0O1xuICAgIH1cblxuICAgIC5zd2FsMi1jb250ZW50IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLXRvYXN0LWNvbnRlbnQtZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1pY29uIHtcbiAgICAgIHdpZHRoOiAyZW07XG4gICAgICBtaW4td2lkdGg6IDJlbTtcbiAgICAgIGhlaWdodDogMmVtO1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAuc3dhbDItaWNvbi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgQGluY2x1ZGUgaWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjI1ZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1zdWNjZXNzIHtcbiAgICAgICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWVycm9yIHtcbiAgICAgICAgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XG4gICAgICAgICAgdG9wOiAuODc1ZW07XG4gICAgICAgICAgd2lkdGg6IDEuMzc1ZW07XG5cbiAgICAgICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgICAgIGxlZnQ6IC4zMTI1ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJltjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICAgICAgcmlnaHQ6IC4zMTI1ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN3YWwyLWFjdGlvbnMge1xuICAgICAgZmxleC1iYXNpczogYXV0byAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW46IDAgLjMxMjVlbTtcbiAgICB9XG5cbiAgICAuc3dhbDItc3R5bGVkIHtcbiAgICAgIG1hcmdpbjogMCAuMzEyNWVtO1xuICAgICAgcGFkZGluZzogLjMxMjVlbSAuNjI1ZW07XG4gICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC1idXR0b25zLWZvbnQtc2l6ZTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6ICRzd2FsMi10b2FzdC1idXR0b24tZm9jdXMtYm94LXNoYWRvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3dhbDItc3VjY2VzcyB7XG4gICAgICBib3JkZXItY29sb3I6ICRzd2FsMi1zdWNjZXNzO1xuXG4gICAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7IC8vIEVtdWxhdGUgbW92aW5nIGNpcmN1bGFyIGxpbmVcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMS42ZW07XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgICB0b3A6IC0uOGVtO1xuICAgICAgICAgIGxlZnQ6IC0uNWVtO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0ZW0gMCAwIDRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbY2xhc3MkPSdyaWdodCddIHtcbiAgICAgICAgICB0b3A6IC0uMjVlbTtcbiAgICAgICAgICBsZWZ0OiAuOTM3NWVtO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMS41ZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0ZW0gNGVtIDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItc3VjY2Vzcy1maXgge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IC40Mzc1ZW07XG4gICAgICAgIHdpZHRoOiAuNDM3NWVtO1xuICAgICAgICBoZWlnaHQ6IDIuNjg3NWVtO1xuICAgICAgfVxuXG4gICAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XG4gICAgICAgIGhlaWdodDogLjMxMjVlbTtcblxuICAgICAgICAmW2NsYXNzJD0ndGlwJ10ge1xuICAgICAgICAgIHRvcDogMS4xMjVlbTtcbiAgICAgICAgICBsZWZ0OiAuMTg3NWVtO1xuICAgICAgICAgIHdpZHRoOiAuNzVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbY2xhc3MkPSdsb25nJ10ge1xuICAgICAgICAgIHRvcDogLjkzNzVlbTtcbiAgICAgICAgICByaWdodDogLjE4NzVlbTtcbiAgICAgICAgICB3aWR0aDogMS4zNzVlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWljb24tc2hvdyB7XG4gICAgICAgIEBpZiAkc3dhbDItaWNvbi1hbmltYXRpb25zIHtcbiAgICAgICAgICAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gICAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gICAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnN3YWwyLXNob3cge1xuICAgICAgYW5pbWF0aW9uOiAkc3dhbDItdG9hc3Qtc2hvdy1hbmltYXRpb247XG4gICAgfVxuXG4gICAgJi5zd2FsMi1oaWRlIHtcbiAgICAgIGFuaW1hdGlvbjogJHN3YWwyLXRvYXN0LWhpZGUtYW5pbWF0aW9uO1xuICAgIH1cbiAgfVxufVxuIiwiJHN3YWwyLXdoaXRlOiAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kc3dhbDItYmxhY2s6ICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRzd2FsMi1vdXRsaW5lLWNvbG9yOiByZ2JhKDUwLCAxMDAsIDE1MCwgLjQpICFkZWZhdWx0O1xuXG4vLyBDT05UQUlORVJcbiRzd2FsMi1jb250YWluZXItcGFkZGluZzogLjYyNWVtICFkZWZhdWx0O1xuXG4vLyBCT1ggTU9ERUxcbiRzd2FsMi13aWR0aDogMzJlbSAhZGVmYXVsdDtcbiRzd2FsMi1wYWRkaW5nOiAxLjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItYm9yZGVyOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWJvcmRlci1yYWRpdXM6IC4zMTI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItYm94LXNoYWRvdzogI2Q5ZDlkOSAhZGVmYXVsdDtcblxuLy8gQU5JTUFUSU9OU1xuJHN3YWwyLXNob3ctYW5pbWF0aW9uOiBzd2FsMi1zaG93IC4zcyAhZGVmYXVsdDtcbiRzd2FsMi1oaWRlLWFuaW1hdGlvbjogc3dhbDItaGlkZSAuMTVzIGZvcndhcmRzICFkZWZhdWx0O1xuXG4vLyBCQUNLR1JPVU5EXG4kc3dhbDItYmFja2dyb3VuZDogJHN3YWwyLXdoaXRlICFkZWZhdWx0O1xuXG4vLyBUWVBPR1JBUEhZXG4kc3dhbDItZm9udDogaW5oZXJpdCAhZGVmYXVsdDtcbiRzd2FsMi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vIEJBQ0tEUk9QXG4kc3dhbDItYmFja2Ryb3A6IHJnYmEoJHN3YWwyLWJsYWNrLCAuNCkgIWRlZmF1bHQ7XG4kc3dhbDItYmFja2Ryb3AtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXMgIWRlZmF1bHQ7XG5cbi8vIElDT05TXG4kc3dhbDItaWNvbi1zaXplOiA1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItaWNvbi1hbmltYXRpb25zOiB0cnVlICFkZWZhdWx0O1xuJHN3YWwyLWljb24tbWFyZ2luOiAxLjI1ZW0gYXV0byAxLjg3NWVtICFkZWZhdWx0O1xuJHN3YWwyLWljb24tem9vbTogbnVsbCAhZGVmYXVsdDtcbiRzd2FsMi1zdWNjZXNzOiAjYTVkYzg2ICFkZWZhdWx0O1xuJHN3YWwyLXN1Y2Nlc3MtYm9yZGVyOiByZ2JhKCRzd2FsMi1zdWNjZXNzLCAuMykgIWRlZmF1bHQ7XG4kc3dhbDItZXJyb3I6ICNmMjc0NzQgIWRlZmF1bHQ7XG4kc3dhbDItd2FybmluZzogI2Y4YmI4NiAhZGVmYXVsdDtcbiRzd2FsMi1pbmZvOiAjM2ZjM2VlICFkZWZhdWx0O1xuJHN3YWwyLXF1ZXN0aW9uOiAjODdhZGJkICFkZWZhdWx0O1xuJHN3YWwyLWljb24tZm9udC1mYW1pbHk6IGluaGVyaXQgIWRlZmF1bHQ7XG5cbi8vIElNQUdFXG4kc3dhbDItaW1hZ2UtbWFyZ2luOiAxLjI1ZW0gYXV0byAhZGVmYXVsdDtcblxuLy8gVElUTEVcbiRzd2FsMi10aXRsZS1tYXJnaW46IDAgMCAuNGVtICFkZWZhdWx0O1xuJHN3YWwyLXRpdGxlLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgMzUpICFkZWZhdWx0O1xuJHN3YWwyLXRpdGxlLWZvbnQtc2l6ZTogMS44NzVlbSAhZGVmYXVsdDtcblxuLy8gQ09OVEVOVFxuJHN3YWwyLWNvbnRlbnQtanVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1tYXJnaW46IDAgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1wYWRpbmc6IDAgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1jb2xvcjogbGlnaHRlbigkc3dhbDItYmxhY2ssIDMzKSAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LWZvbnQtc2l6ZTogMS4xMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LWZvbnQtd2VpZ2h0OiBub3JtYWwgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1saW5lLWhlaWdodDogbm9ybWFsICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtdGV4dC1hbGlnbjogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtd29yZC13cmFwOiBicmVhay13b3JkICFkZWZhdWx0O1xuXG4vLyBJTlBVVFxuJHN3YWwyLWlucHV0LW1hcmdpbjogMWVtIGF1dG8gIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtd2lkdGg6IDEwMCUgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtaGVpZ2h0OiAyLjYyNWVtICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LXBhZGRpbmc6IDAgLjc1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbigkc3dhbDItYmxhY2ssIDg1KSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1ib3JkZXItcmFkaXVzOiAuMTg3NWVtICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKCRzd2FsMi1ibGFjaywgLjA2KSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1mb2N1cy1ib3JkZXI6IDFweCBzb2xpZCAjYjRkYmVkICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWZvY3VzLW91dGxpbmU6IG5vbmUgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogMCAwIDNweCAjYzRlNmY1ICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTogMS4xMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1iYWNrZ3JvdW5kOiBpbmhlcml0ICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3MsIGJveC1zaGFkb3cgLjNzICFkZWZhdWx0O1xuXG4vLyBURVhUQVJFQSBTUEVDSUZJQyBWQVJJQUJMRVNcbiRzd2FsMi10ZXh0YXJlYS1oZWlnaHQ6IDYuNzVlbSAhZGVmYXVsdDtcbiRzd2FsMi10ZXh0YXJlYS1wYWRkaW5nOiAuNzVlbSAhZGVmYXVsdDtcblxuLy8gVkFMSURBVElPTiBNRVNTQUdFXG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWp1c3RpZnktY29udGVudDogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1wYWRkaW5nOiAuNjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWJhY2tncm91bmQ6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA5NCkgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgNDApICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtZm9udC13ZWlnaHQ6IDMwMCAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi1iYWNrZ3JvdW5kOiAkc3dhbDItZXJyb3IgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWljb24tY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi16b29tOiBudWxsICFkZWZhdWx0O1xuXG4vLyBQUk9HUkVTUyBTVEVQU1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWJhY2tncm91bmQ6IGluaGVyaXQgIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtbWFyZ2luOiAwIDAgMS4yNWVtICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLXBhZGRpbmc6IDAgIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtZm9udC13ZWlnaHQ6IDYwMCAhZGVmYXVsdDtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwcy1kaXN0YW5jZTogMi41ZW0gIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC13aWR0aDogMmVtO1xuJHN3YWwyLXByb2dyZXNzLXN0ZXAtaGVpZ2h0OiAyZW07XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC1ib3JkZXItcmFkaXVzOiAyZW07XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC1iYWNrZ3JvdW5kOiAjYWRkOGU2ICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXAtY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi1hY3RpdmUtc3RlcC1iYWNrZ3JvdW5kOiAjMzA4NWQ2ICFkZWZhdWx0O1xuJHN3YWwyLWFjdGl2ZS1zdGVwLWNvbG9yOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIEZPT1RFUlxuJHN3YWwyLWZvb3Rlci1tYXJnaW46IDEuMjVlbSAwIDAgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLXBhZGRpbmc6IDFlbSAwIDAgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLWJvcmRlci1jb2xvcjogI2VlZSAhZGVmYXVsdDtcbiRzd2FsMi1mb290ZXItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCAzMykgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuXG4vLyBUSU1FUiBQT0dSRVNTIEJBUlxuJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1oZWlnaHQ6IC4yNWVtO1xuJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiByZ2JhKCRzd2FsMi1ibGFjaywgLjIpICFkZWZhdWx0O1xuXG4vLyBDTE9TRSBCVVRUT05cbiRzd2FsMi1jbG9zZS1idXR0b24tYWxpZ24taXRlbXM6IGNlbnRlciAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tanVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLXdpZHRoOiAxLjJlbSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24taGVpZ2h0OiAxLjJlbSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tbGluZS1oZWlnaHQ6IDEuMiAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tcG9zaXRpb246IGFic29sdXRlICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1nYXA6IDAgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLXRyYW5zaXRpb246IGNvbG9yIC4xcyBlYXNlLW91dCAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tYm9yZGVyOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAwICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1vdXRsaW5lOiBpbml0aWFsICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA4MCkgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWZvbnQtZmFtaWx5OiBzZXJpZiAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1zaXplOiAyLjVlbSAhZGVmYXVsdDtcblxuLy8gQ0xPU0UgQlVUVE9OOkhPVkVSXG4kc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLXRyYW5zZm9ybTogbm9uZSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItY29sb3I6ICRzd2FsMi1lcnJvciAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIEFDVElPTlNcbiRzd2FsMi1hY3Rpb25zLWZsZXgtd3JhcDogd3JhcCAhZGVmYXVsdDtcbiRzd2FsMi1hY3Rpb25zLWFsaWduLWl0ZW1zOiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItYWN0aW9ucy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhZGVmYXVsdDtcbiRzd2FsMi1hY3Rpb25zLXdpZHRoOiAxMDAlICFkZWZhdWx0O1xuJHN3YWwyLWFjdGlvbnMtbWFyZ2luOiAxLjI1ZW0gYXV0byAwICFkZWZhdWx0O1xuXG4vLyBDT05GSVJNIEJVVFRPTlxuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJvcmRlcjogMCAhZGVmYXVsdDtcbiRzd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAuMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1jb25maXJtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzA4NWQ2ICFkZWZhdWx0O1xuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWNvbG9yOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG4kc3dhbDItY29uZmlybS1idXR0b24tZm9udC1zaXplOiAxLjA2MjVlbSAhZGVmYXVsdDtcblxuLy8gQ0FOQ0VMIEJVVFRPTlxuJHN3YWwyLWNhbmNlbC1idXR0b24tYm9yZGVyOiAwICFkZWZhdWx0O1xuJHN3YWwyLWNhbmNlbC1idXR0b24tYm9yZGVyLXJhZGl1czogLjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjYWFhICFkZWZhdWx0O1xuJHN3YWwyLWNhbmNlbC1idXR0b24tY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi1jYW5jZWwtYnV0dG9uLWZvbnQtc2l6ZTogMS4wNjI1ZW0gIWRlZmF1bHQ7XG5cbi8vIENPTU1PTiBWQVJJQUJMRVMgRk9SIENPTkZJUk0gQU5EIENBTkNFTCBCVVRUT05TXG4kc3dhbDItYnV0dG9uLWRhcmtlbi1ob3ZlcjogcmdiYSgkc3dhbDItYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZGFya2VuLWFjdGl2ZTogcmdiYSgkc3dhbDItYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZm9jdXMtb3V0bGluZTogbm9uZSAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogbnVsbCAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgMXB4ICRzd2FsMi1iYWNrZ3JvdW5kLCAwIDAgMCAzcHggJHN3YWwyLW91dGxpbmUtY29sb3IgIWRlZmF1bHQ7XG5cbi8vIFRPQVNUU1xuJHN3YWwyLXRvYXN0LXNob3ctYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1zaG93IC41cyAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1oaWRlLWFuaW1hdGlvbjogc3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHMgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtYm9yZGVyOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWJveC1zaGFkb3c6IDAgMCAuNjI1ZW0gI2Q5ZDlkOSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1iYWNrZ3JvdW5kOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLXdpZHRoOiAuOGVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWNsb3NlLWJ1dHRvbi1oZWlnaHQ6IC44ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0OiAuOCAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC13aWR0aDogYXV0byAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1wYWRkaW5nOiAuNjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtdGl0bGUtbWFyZ2luOiAwIC42ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtdGl0bGUtZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY29udGVudC1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1pbnB1dC1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC12YWxpZGF0aW9uLWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWJ1dHRvbnMtZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtYnV0dG9uLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwIDFweCAkc3dhbDItYmFja2dyb3VuZCwgMCAwIDAgM3B4ICRzd2FsMi1vdXRsaW5lLWNvbG9yICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWZvb3Rlci1tYXJnaW46IC41ZW0gMCAwICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWZvb3Rlci1wYWRkaW5nOiAuNWVtIDAgMCAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1mb290ZXItZm9udC1zaXplOiAuOGVtICFkZWZhdWx0O1xuIiwiLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAuNjI1ZW07XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAuNjI1ZW0gI2Q5ZDlkOTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaGVhZGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdGl0bGUge1xuICBmbGV4LWdyb3c6IDE7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwIDAuNmVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItZm9vdGVyIHtcbiAgbWFyZ2luOiAwLjVlbSAwIDA7XG4gIHBhZGRpbmc6IDAuNWVtIDAgMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY2xvc2Uge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICB3aWR0aDogMC44ZW07XG4gIGhlaWdodDogMC44ZW07XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNvbnRlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIHtcbiAgd2lkdGg6IDJlbTtcbiAgbWluLXdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBtYXJnaW46IDA7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24gLnN3YWwyLWljb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIC5zd2FsMi1pY29uLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMC4yNWVtO1xuICB9XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV0ge1xuICB0b3A6IDAuODc1ZW07XG4gIHdpZHRoOiAxLjM3NWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XSB7XG4gIGxlZnQ6IDAuMzEyNWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF0ge1xuICByaWdodDogMC4zMTI1ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnMge1xuICBmbGV4LWJhc2lzOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCAwLjMxMjVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkIHtcbiAgbWFyZ2luOiAwIDAuMzEyNWVtO1xuICBwYWRkaW5nOiAwLjMxMjVlbSAwLjYyNWVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmZmYsIDAgMCAwIDNweCByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogI2E1ZGM4Njtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxLjZlbTtcbiAgaGVpZ2h0OiAzZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF0ge1xuICB0b3A6IC0wLjhlbTtcbiAgbGVmdDogLTAuNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAyZW0gMmVtO1xuICBib3JkZXItcmFkaXVzOiA0ZW0gMCAwIDRlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XSB7XG4gIHRvcDogLTAuMjVlbTtcbiAgbGVmdDogMC45Mzc1ZW07XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgNGVtIDRlbSAwO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXgge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDAuNDM3NWVtO1xuICB3aWR0aDogMC40Mzc1ZW07XG4gIGhlaWdodDogMi42ODc1ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdIHtcbiAgaGVpZ2h0OiAwLjMxMjVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF0ge1xuICB0b3A6IDEuMTI1ZW07XG4gIGxlZnQ6IDAuMTg3NWVtO1xuICB3aWR0aDogMC43NWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9bG9uZ10ge1xuICB0b3A6IDAuOTM3NWVtO1xuICByaWdodDogMC4xODc1ZW07XG4gIHdpZHRoOiAxLjM3NWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gIGFuaW1hdGlvbjogc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIDAuNzVzO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcge1xuICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgMC43NXM7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvdyB7XG4gIGFuaW1hdGlvbjogc3dhbDItdG9hc3Qtc2hvdyAwLjVzO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGUge1xuICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWhpZGUgMC4xcyBmb3J3YXJkcztcbn1cblxuLnN3YWwyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA2MDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC42MjVlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYmFja2Ryb3Atc2hvdyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYmFja2Ryb3AtaGlkZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSA+IDpmaXJzdC1jaGlsZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQgPiA6Zmlyc3QtY2hpbGQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQgPiA6Zmlyc3QtY2hpbGQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCA+IDpmaXJzdC1jaGlsZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHQgPiA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4gPiAuc3dhbDItbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDE7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LXJvdyA+IC5zd2FsMi1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleDogMTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4ge1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1sZWZ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1sZWZ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1yaWdodCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItcmlnaHQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbiA+IC5zd2FsMi1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleDogMTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItbm8tdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi5zd2FsMi1jb250YWluZXI6bm90KC5zd2FsMi10b3ApOm5vdCguc3dhbDItdG9wLXN0YXJ0KTpub3QoLnN3YWwyLXRvcC1lbmQpOm5vdCguc3dhbDItdG9wLWxlZnQpOm5vdCguc3dhbDItdG9wLXJpZ2h0KTpub3QoLnN3YWwyLWNlbnRlci1zdGFydCk6bm90KC5zd2FsMi1jZW50ZXItZW5kKTpub3QoLnN3YWwyLWNlbnRlci1sZWZ0KTpub3QoLnN3YWwyLWNlbnRlci1yaWdodCk6bm90KC5zd2FsMi1ib3R0b20pOm5vdCguc3dhbDItYm90dG9tLXN0YXJ0KTpub3QoLnN3YWwyLWJvdHRvbS1lbmQpOm5vdCguc3dhbDItYm90dG9tLWxlZnQpOm5vdCguc3dhbDItYm90dG9tLXJpZ2h0KTpub3QoLnN3YWwyLWdyb3ctZnVsbHNjcmVlbikgPiAuc3dhbDItbW9kYWwge1xuICBtYXJnaW46IGF1dG87XG59XG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuc3dhbDItY29udGFpbmVyIC5zd2FsMi1tb2RhbCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnN3YWwyLXBvcHVwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMyZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMS4yNWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNWVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnN3YWwyLXBvcHVwOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi1sb2FkaW5nIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uc3dhbDItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN3YWwyLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDAuNGVtO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC1zaXplOiAxLjg3NWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zd2FsMi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMS4yNWVtIGF1dG8gMDtcbn1cbi5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZFtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xufVxuLnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSk7XG59XG4uc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbWFyZ2luOiAwLjQ2ODc1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICBib3JkZXI6IDAuMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyAuc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbCB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG4uc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIDpub3QoLnN3YWwyLXN0eWxlZCkuc3dhbDItY29uZmlybTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICBib3JkZXI6IDNweCBzb2xpZCAjOTk5OTk5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICNmZmY7XG59XG5cbi5zd2FsMi1zdHlsZWQge1xuICBtYXJnaW46IDAuMzEyNWVtO1xuICBwYWRkaW5nOiAwLjYyNWVtIDJlbTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zd2FsMi1zdHlsZWQ6bm90KFtkaXNhYmxlZF0pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJtIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDg1ZDY7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMDYyNWVtO1xufVxuLnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWwge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4wNjI1ZW07XG59XG4uc3dhbDItc3R5bGVkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmZmYsIDAgMCAwIDNweCByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTtcbn1cbi5zd2FsMi1zdHlsZWQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG59XG5cbi5zd2FsMi1mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxLjI1ZW0gMCAwO1xuICBwYWRkaW5nOiAxZW0gMCAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAwLjI1ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjMxMjVlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zMTI1ZW07XG59XG5cbi5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwLjI1ZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnN3YWwyLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEuMjVlbSBhdXRvO1xufVxuXG4uc3dhbDItY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIC8qIDE2MTcgKi9cbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdXRsaW5lOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNjY2NjY2M7XG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN3YWwyLWNsb3NlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmMjc0NzQ7XG59XG4uc3dhbDItY2xvc2U6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG59XG5cbi5zd2FsMi1jb250ZW50IHtcbiAgei1pbmRleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhLFxuLnN3YWwyLXNlbGVjdCxcbi5zd2FsMi1yYWRpbyxcbi5zd2FsMi1jaGVja2JveCB7XG4gIG1hcmdpbjogMWVtIGF1dG87XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzLCBib3gtc2hhZG93IDAuM3M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMTg3NWVtO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbn1cbi5zd2FsMi1pbnB1dC5zd2FsMi1pbnB1dGVycm9yLFxuLnN3YWwyLWZpbGUuc3dhbDItaW5wdXRlcnJvcixcbi5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjI3NDc0ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2YyNzQ3NCAhaW1wb3J0YW50O1xufVxuLnN3YWwyLWlucHV0OmZvY3VzLFxuLnN3YWwyLWZpbGU6Zm9jdXMsXG4uc3dhbDItdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjRkYmVkO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgM3B4ICNjNGU2ZjU7XG59XG4uc3dhbDItaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLnN3YWwyLWZpbGU6OnBsYWNlaG9sZGVyLFxuLnN3YWwyLXRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG4uc3dhbDItcmFuZ2Uge1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnN3YWwyLXJhbmdlIGlucHV0IHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5zd2FsMi1yYW5nZSBvdXRwdXQge1xuICB3aWR0aDogMjAlO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN3YWwyLXJhbmdlIGlucHV0LFxuLnN3YWwyLXJhbmdlIG91dHB1dCB7XG4gIGhlaWdodDogMi42MjVlbTtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxLjEyNWVtO1xuICBsaW5lLWhlaWdodDogMi42MjVlbTtcbn1cblxuLnN3YWwyLWlucHV0IHtcbiAgaGVpZ2h0OiAyLjYyNWVtO1xuICBwYWRkaW5nOiAwIDAuNzVlbTtcbn1cbi5zd2FsMi1pbnB1dFt0eXBlPW51bWJlcl0ge1xuICBtYXgtd2lkdGg6IDEwZW07XG59XG5cbi5zd2FsMi1maWxlIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjEyNWVtO1xufVxuXG4uc3dhbDItdGV4dGFyZWEge1xuICBoZWlnaHQ6IDYuNzVlbTtcbiAgcGFkZGluZzogMC43NWVtO1xufVxuXG4uc3dhbDItc2VsZWN0IHtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4zNzVlbSAwLjYyNWVtO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjEyNWVtO1xufVxuXG4uc3dhbDItcmFkaW8sXG4uc3dhbDItY2hlY2tib3gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uc3dhbDItcmFkaW8gbGFiZWwsXG4uc3dhbDItY2hlY2tib3ggbGFiZWwge1xuICBtYXJnaW46IDAgMC42ZW07XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbn1cbi5zd2FsMi1yYWRpbyBpbnB1dCxcbi5zd2FsMi1jaGVja2JveCBpbnB1dCB7XG4gIG1hcmdpbjogMCAwLjRlbTtcbn1cblxuLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjYyNWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiFcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMS41ZW07XG4gIG1pbi13aWR0aDogMS41ZW07XG4gIGhlaWdodDogMS41ZW07XG4gIG1hcmdpbjogMCAwLjYyNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjc0NzQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN3YWwyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDVlbTtcbiAgaGVpZ2h0OiA1ZW07XG4gIG1hcmdpbjogMS4yNWVtIGF1dG8gMS44NzVlbTtcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiA1ZW07XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzLjc1ZW07XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogI2YyNzQ3NDtcbiAgY29sb3I6ICNmMjc0NzQ7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciAuc3dhbDIteC1tYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWdyb3c6IDE7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMi4zMTI1ZW07XG4gIHdpZHRoOiAyLjkzNzVlbTtcbiAgaGVpZ2h0OiAwLjMxMjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzQ3NDtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XSB7XG4gIGxlZnQ6IDEuMDYyNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRdIHtcbiAgcmlnaHQ6IDFlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLWVycm9yLnN3YWwyLWljb24tc2hvdyB7XG4gIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIDAuNXM7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXgtbWFyayB7XG4gIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgMC41cztcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6ICNmYWNlYTg7XG4gIGNvbG9yOiAjZjhiYjg2O1xufVxuLnN3YWwyLWljb24uc3dhbDItaW5mbyB7XG4gIGJvcmRlci1jb2xvcjogIzlkZTBmNjtcbiAgY29sb3I6ICMzZmMzZWU7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbiB7XG4gIGJvcmRlci1jb2xvcjogI2M5ZGFlMTtcbiAgY29sb3I6ICM4N2FkYmQ7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjYTVkYzg2O1xuICBjb2xvcjogI2E1ZGM4Njtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMy43NWVtO1xuICBoZWlnaHQ6IDcuNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1sZWZ0XSB7XG4gIHRvcDogLTAuNDM3NWVtO1xuICBsZWZ0OiAtMi4wNjM1ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDMuNzVlbSAzLjc1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDcuNWVtIDAgMCA3LjVlbTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF0ge1xuICB0b3A6IC0wLjY4NzVlbTtcbiAgbGVmdDogMS44NzVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAzLjc1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgNy41ZW0gNy41ZW0gMDtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAtMC4yNWVtO1xuICBsZWZ0OiAtMC4yNWVtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgcmdiYSgxNjUsIDIyMCwgMTM0LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwLjVlbTtcbiAgbGVmdDogMS42MjVlbTtcbiAgd2lkdGg6IDAuNDM3NWVtO1xuICBoZWlnaHQ6IDUuNjI1ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMC4zMTI1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWRjODY7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXSB7XG4gIHRvcDogMi44NzVlbTtcbiAgbGVmdDogMC44MTI1ZW07XG4gIHdpZHRoOiAxLjU2MjVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmddIHtcbiAgdG9wOiAyLjM3NWVtO1xuICByaWdodDogMC41ZW07XG4gIHdpZHRoOiAyLjkzNzVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgMC43NXM7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcge1xuICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgMC43NXM7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW47XG59XG5cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDEuMjVlbTtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwIHtcbiAgei1pbmRleDogMjA7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIGJhY2tncm91bmQ6ICMzMDg1ZDY7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXAge1xuICBiYWNrZ3JvdW5kOiAjMzA4NWQ2O1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwIH4gLnN3YWwyLXByb2dyZXNzLXN0ZXAge1xuICBiYWNrZ3JvdW5kOiAjYWRkOGU2O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcCB+IC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmUge1xuICBiYWNrZ3JvdW5kOiAjYWRkOGU2O1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmUge1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDAuNGVtO1xuICBtYXJnaW46IDAgLTFweDtcbiAgYmFja2dyb3VuZDogIzMwODVkNjtcbn1cblxuW2NsYXNzXj1zd2FsMl0ge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc3dhbDItc2hvdyB7XG4gIGFuaW1hdGlvbjogc3dhbDItc2hvdyAwLjNzO1xufVxuXG4uc3dhbDItaGlkZSB7XG4gIGFuaW1hdGlvbjogc3dhbDItaGlkZSAwLjE1cyBmb3J3YXJkcztcbn1cblxuLnN3YWwyLW5vYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLnN3YWwyLXNjcm9sbGJhci1tZWFzdXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC05OTk5cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5zd2FsMi1ydGwgLnN3YWwyLWNsb3NlIHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG59XG4uc3dhbDItcnRsIC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbn1cblxuQHN1cHBvcnRzICgtbXMtYWNjZWxlcmF0b3I6IHRydWUpIHtcbiAgLnN3YWwyLXJhbmdlIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5zd2FsMi1yYW5nZSBvdXRwdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5zd2FsMi1yYW5nZSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAuc3dhbDItY2xvc2U6Zm9jdXMge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC42MjVlbSkgcm90YXRlWigyZGVnKTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtcbiAgfVxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjMxMjVlbSkgcm90YXRlWigyZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1oaWRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDFkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogMC41NjI1ZW07XG4gICAgbGVmdDogMC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNTQlIHtcbiAgICB0b3A6IDAuMTI1ZW07XG4gICAgbGVmdDogMC4xMjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA3MCUge1xuICAgIHRvcDogMC42MjVlbTtcbiAgICBsZWZ0OiAtMC4yNWVtO1xuICAgIHdpZHRoOiAxLjYyNWVtO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAwLjc1ZW07XG4gICAgd2lkdGg6IDAuNWVtO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMS4xMjVlbTtcbiAgICBsZWZ0OiAwLjE4NzVlbTtcbiAgICB3aWR0aDogMC43NWVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAxLjYyNWVtO1xuICAgIHJpZ2h0OiAxLjM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDY1JSB7XG4gICAgdG9wOiAxLjI1ZW07XG4gICAgcmlnaHQ6IDAuOTM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAwLjkzNzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMS4xMjVlbTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDAuOTM3NWVtO1xuICAgIHJpZ2h0OiAwLjE4NzVlbTtcbiAgICB3aWR0aDogMS4zNzVlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxuICA0NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItaGlkZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogMS4xODc1ZW07XG4gICAgbGVmdDogMC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNTQlIHtcbiAgICB0b3A6IDEuMDYyNWVtO1xuICAgIGxlZnQ6IDAuMTI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNzAlIHtcbiAgICB0b3A6IDIuMTg3NWVtO1xuICAgIGxlZnQ6IC0wLjM3NWVtO1xuICAgIHdpZHRoOiAzLjEyNWVtO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAzZW07XG4gICAgbGVmdDogMS4zMTI1ZW07XG4gICAgd2lkdGg6IDEuMDYyNWVtO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMi44MTI1ZW07XG4gICAgbGVmdDogMC44MTI1ZW07XG4gICAgd2lkdGg6IDEuNTYyNWVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDY1JSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAyLjE4NzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMy40Mzc1ZW07XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjM3NWVtO1xuICAgIHJpZ2h0OiAwLjVlbTtcbiAgICB3aWR0aDogMi45Mzc1ZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDEyJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsge1xuICAwJSB7XG4gICAgbWFyZ2luLXRvcDogMS42MjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgODAlIHtcbiAgICBtYXJnaW4tdG9wOiAtMC4zNzVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbmJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYm9keS5zd2FsMi1oZWlnaHQtYXV0byB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyIHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiBhdXRvO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDAuNjI1ZW0gKiAyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lciA+IC5zd2FsMi1tb2RhbCB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Age1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdCB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbkBtZWRpYSBwcmludCB7XG4gIGJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuICB9XG4gIGJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikgPiBbYXJpYS1oaWRkZW49dHJ1ZV0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgYm9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSAuc3dhbDItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogYXV0bztcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtbGVmdCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogMDtcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCB7XG4gIHRvcDogNTAlO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyIHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IGF1dG87XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xuICB0b3A6IGF1dG87XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiBhdXRvO1xufVxuYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5ib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnMge1xuICBmbGV4OiAxO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBoZWlnaHQ6IDIuMmVtO1xuICBtYXJnaW4tdG9wOiAwLjMxMjVlbTtcbn1cbmJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1pbnB1dCB7XG4gIGhlaWdodDogMmVtO1xuICBtYXJnaW46IDAuMzEyNWVtIGF1dG87XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDFlbTtcbn0iLCJAbWl4aW4gaWUge1xuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMDI1MDE2MVxuQG1peGluIG5vdCgkaWdub3ItbGlzdC4uLikge1xuICBAaWYgKGxlbmd0aCgkaWdub3ItbGlzdCkgPT0gMSkge1xuICAgICRpZ25vci1saXN0OiBudGgoJGlnbm9yLWxpc3QsIDEpO1xuICB9XG5cbiAgJG5vdC1vdXRwdXQ6ICcnO1xuXG4gIEBlYWNoICRub3QgaW4gJGlnbm9yLWxpc3Qge1xuICAgICRub3Qtb3V0cHV0OiAkbm90LW91dHB1dCArICc6bm90KCN7JG5vdH0pJzsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBzY3NzL25vLWR1cGxpY2F0ZS1kb2xsYXItdmFyaWFibGVzXG4gIH1cblxuICAmI3skbm90LW91dHB1dH0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCIuc3dhbDItY29udGFpbmVyIHtcbiAgLy8gY2VudGVyaW5nXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA2MDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogJHN3YWwyLWNvbnRhaW5lci1wYWRkaW5nO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246ICRzd2FsMi1iYWNrZHJvcC10cmFuc2l0aW9uO1xuXG4gIC8vIHN3ZWV0YWxlcnQyL2lzc3Vlcy85MDVcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gICYuc3dhbDItYmFja2Ryb3Atc2hvdyB7XG4gICAgYmFja2dyb3VuZDogJHN3YWwyLWJhY2tkcm9wO1xuICB9XG5cbiAgJi5zd2FsMi1iYWNrZHJvcC1oaWRlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG5cbiAgJi5zd2FsMi10b3Age1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJi5zd2FsMi10b3Atc3RhcnQsXG4gICYuc3dhbDItdG9wLWxlZnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICYuc3dhbDItdG9wLWVuZCxcbiAgJi5zd2FsMi10b3AtcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cblxuICAmLnN3YWwyLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICYuc3dhbDItY2VudGVyLXN0YXJ0LFxuICAmLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICYuc3dhbDItY2VudGVyLWVuZCxcbiAgJi5zd2FsMi1jZW50ZXItcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gICYuc3dhbDItYm90dG9tIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cblxuICAmLnN3YWwyLWJvdHRvbS1zdGFydCxcbiAgJi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICYuc3dhbDItYm90dG9tLWVuZCxcbiAgJi5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgJi5zd2FsMi1ib3R0b20gPiA6Zmlyc3QtY2hpbGQsXG4gICYuc3dhbDItYm90dG9tLXN0YXJ0ID4gOmZpcnN0LWNoaWxkLFxuICAmLnN3YWwyLWJvdHRvbS1sZWZ0ID4gOmZpcnN0LWNoaWxkLFxuICAmLnN3YWwyLWJvdHRvbS1lbmQgPiA6Zmlyc3QtY2hpbGQsXG4gICYuc3dhbDItYm90dG9tLXJpZ2h0ID4gOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG5cbiAgJi5zd2FsMi1ncm93LWZ1bGxzY3JlZW4gPiAuc3dhbDItbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAmLnN3YWwyLWdyb3ctcm93ID4gLnN3YWwyLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAmLnN3YWwyLWdyb3ctY29sdW1uIHtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAmLnN3YWwyLXRvcCxcbiAgICAmLnN3YWwyLWNlbnRlcixcbiAgICAmLnN3YWwyLWJvdHRvbSB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICYuc3dhbDItdG9wLXN0YXJ0LFxuICAgICYuc3dhbDItY2VudGVyLXN0YXJ0LFxuICAgICYuc3dhbDItYm90dG9tLXN0YXJ0LFxuICAgICYuc3dhbDItdG9wLWxlZnQsXG4gICAgJi5zd2FsMi1jZW50ZXItbGVmdCxcbiAgICAmLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgICYuc3dhbDItdG9wLWVuZCxcbiAgICAmLnN3YWwyLWNlbnRlci1lbmQsXG4gICAgJi5zd2FsMi1ib3R0b20tZW5kLFxuICAgICYuc3dhbDItdG9wLXJpZ2h0LFxuICAgICYuc3dhbDItY2VudGVyLXJpZ2h0LFxuICAgICYuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAmID4gLnN3YWwyLW1vZGFsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmLnN3YWwyLW5vLXRyYW5zaXRpb24ge1xuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG5vdCgnLnN3YWwyLXRvcCcsXG4gICcuc3dhbDItdG9wLXN0YXJ0JyxcbiAgJy5zd2FsMi10b3AtZW5kJyxcbiAgJy5zd2FsMi10b3AtbGVmdCcsXG4gICcuc3dhbDItdG9wLXJpZ2h0JyxcbiAgJy5zd2FsMi1jZW50ZXItc3RhcnQnLFxuICAnLnN3YWwyLWNlbnRlci1lbmQnLFxuICAnLnN3YWwyLWNlbnRlci1sZWZ0JyxcbiAgJy5zd2FsMi1jZW50ZXItcmlnaHQnLFxuICAnLnN3YWwyLWJvdHRvbScsXG4gICcuc3dhbDItYm90dG9tLXN0YXJ0JyxcbiAgJy5zd2FsMi1ib3R0b20tZW5kJyxcbiAgJy5zd2FsMi1ib3R0b20tbGVmdCcsXG4gICcuc3dhbDItYm90dG9tLXJpZ2h0JyxcbiAgJy5zd2FsMi1ncm93LWZ1bGxzY3JlZW4nKSB7XG4gICAgJiA+IC5zd2FsMi1tb2RhbCB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgaWUge1xuICAgIC5zd2FsMi1tb2RhbCB7XG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnN3YWwyLXBvcHVwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6ICRzd2FsMi13aWR0aDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAkc3dhbDItcGFkZGluZztcbiAgYm9yZGVyOiAkc3dhbDItYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogJHN3YWwyLWJhY2tncm91bmQ7XG4gIGZvbnQtZmFtaWx5OiAkc3dhbDItZm9udDtcbiAgZm9udC1zaXplOiAkc3dhbDItZm9udC1zaXplO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmLnN3YWwyLWxvYWRpbmcge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgfVxufVxuXG4uc3dhbDItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN3YWwyLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogJHN3YWwyLXRpdGxlLW1hcmdpbjtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICRzd2FsMi10aXRsZS1jb2xvcjtcbiAgZm9udC1zaXplOiAkc3dhbDItdGl0bGUtZm9udC1zaXplO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zd2FsMi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTsgLy8gcHJldmVudCBzdWNlc3MgaWNvbiBmcm9tIG92ZXJsYXBwaW5nIGJ1dHRvbnNcbiAgZmxleC13cmFwOiAkc3dhbDItYWN0aW9ucy1mbGV4LXdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkc3dhbDItYWN0aW9ucy1hbGlnbi1pdGVtcztcbiAganVzdGlmeS1jb250ZW50OiAkc3dhbDItYWN0aW9ucy1qdXN0aWZ5LWNvbnRlbnQ7XG4gIHdpZHRoOiAkc3dhbDItYWN0aW9ucy13aWR0aDtcbiAgbWFyZ2luOiAkc3dhbDItYWN0aW9ucy1tYXJnaW47XG5cbiAgJjpub3QoLnN3YWwyLWxvYWRpbmcpIHtcbiAgICAuc3dhbDItc3R5bGVkIHtcbiAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN3YWwyLWJ1dHRvbi1kYXJrZW4taG92ZXIsICRzd2FsMi1idXR0b24tZGFya2VuLWhvdmVyKTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN3YWwyLWJ1dHRvbi1kYXJrZW4tYWN0aXZlLCAkc3dhbDItYnV0dG9uLWRhcmtlbi1hY3RpdmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItbG9hZGluZyB7XG4gICAgLnN3YWwyLXN0eWxlZCB7XG4gICAgICAmLnN3YWwyLWNvbmZpcm0ge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgIG1hcmdpbjogLjQ2ODc1ZW07XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICAgICAgICBib3JkZXI6IC4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItY2FuY2VsIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6bm90KC5zd2FsMi1zdHlsZWQpIHtcbiAgICAgICYuc3dhbDItY29uZmlybSB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRlbigkc3dhbDItYmxhY2ssIDYwKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAkc3dhbDItd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN3YWwyLXN0eWxlZCB7XG4gIG1hcmdpbjogLjMxMjVlbTtcbiAgcGFkZGluZzogLjYyNWVtIDJlbTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJi5zd2FsMi1jb25maXJtIHtcbiAgICBib3JkZXI6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXI7XG4gICAgYm9yZGVyLXJhZGl1czogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJvcmRlci1yYWRpdXM7XG4gICAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItY29uZmlybS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWZvbnQtc2l6ZTtcbiAgfVxuXG4gICYuc3dhbDItY2FuY2VsIHtcbiAgICBib3JkZXI6ICRzd2FsMi1jYW5jZWwtYnV0dG9uLWJvcmRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3JkZXItcmFkaXVzO1xuICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWNhbmNlbC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogJHN3YWwyLWNhbmNlbC1idXR0b24tY29sb3I7XG4gICAgZm9udC1zaXplOiAkc3dhbDItY2FuY2VsLWJ1dHRvbi1mb250LXNpemU7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAkc3dhbDItYnV0dG9uLWZvY3VzLW91dGxpbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWJ1dHRvbi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGJveC1zaGFkb3c6ICRzd2FsMi1idXR0b24tZm9jdXMtYm94LXNoYWRvdztcbiAgfVxuXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG4uc3dhbDItZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogJHN3YWwyLWZvb3Rlci1tYXJnaW47XG4gIHBhZGRpbmc6ICRzd2FsMi1mb290ZXItcGFkZGluZztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRzd2FsMi1mb290ZXItYm9yZGVyLWNvbG9yO1xuICBjb2xvcjogJHN3YWwyLWZvb3Rlci1jb2xvcjtcbiAgZm9udC1zaXplOiAkc3dhbDItZm9vdGVyLWZvbnQtc2l6ZTtcbn1cblxuLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1oZWlnaHQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkc3dhbDItYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHN3YWwyLWJvcmRlci1yYWRpdXM7XG59XG5cbi5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAkc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWhlaWdodDtcbiAgYmFja2dyb3VuZDogJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kO1xufVxuXG4uc3dhbDItaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogJHN3YWwyLWltYWdlLW1hcmdpbjtcbn1cblxuLnN3YWwyLWNsb3NlIHtcbiAgcG9zaXRpb246ICRzd2FsMi1jbG9zZS1idXR0b24tcG9zaXRpb247XG4gIHotaW5kZXg6IDI7XG5cbiAgLyogMTYxNyAqL1xuICB0b3A6ICRzd2FsMi1jbG9zZS1idXR0b24tZ2FwO1xuICByaWdodDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1nYXA7XG4gIGFsaWduLWl0ZW1zOiAkc3dhbDItY2xvc2UtYnV0dG9uLWFsaWduLWl0ZW1zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRzd2FsMi1jbG9zZS1idXR0b24tanVzdGlmeS1jb250ZW50O1xuICB3aWR0aDogJHN3YWwyLWNsb3NlLWJ1dHRvbi13aWR0aDtcbiAgaGVpZ2h0OiAkc3dhbDItY2xvc2UtYnV0dG9uLWhlaWdodDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogJHN3YWwyLWNsb3NlLWJ1dHRvbi10cmFuc2l0aW9uO1xuICBib3JkZXI6ICRzd2FsMi1jbG9zZS1idXR0b24tYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItY2xvc2UtYnV0dG9uLWJvcmRlci1yYWRpdXM7XG4gIG91dGxpbmU6ICRzd2FsMi1jbG9zZS1idXR0b24tb3V0bGluZTtcbiAgYmFja2dyb3VuZDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1iYWNrZ3JvdW5kO1xuICBjb2xvcjogJHN3YWwyLWNsb3NlLWJ1dHRvbi1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWNsb3NlLWJ1dHRvbi1mb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkc3dhbDItY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiAkc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLXRyYW5zZm9ybTtcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ7XG4gICAgY29sb3I6ICRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItY29sb3I7XG4gIH1cblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuLnN3YWwyLWNvbnRlbnQge1xuICB6LWluZGV4OiAxOyAvLyBwcmV2ZW50IHN1Y2VzcyBpY29uIG92ZXJsYXBwaW5nIHRoZSBjb250ZW50XG4gIGp1c3RpZnktY29udGVudDogJHN3YWwyLWNvbnRlbnQtanVzdGlmeS1jb250ZW50O1xuICBtYXJnaW46ICRzd2FsMi1jb250ZW50LW1hcmdpbjtcbiAgcGFkZGluZzogJHN3YWwyLWNvbnRlbnQtcGFkaW5nO1xuICBjb2xvcjogJHN3YWwyLWNvbnRlbnQtY29sb3I7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWNvbnRlbnQtZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJHN3YWwyLWNvbnRlbnQtZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkc3dhbDItY29udGVudC1saW5lLWhlaWdodDtcbiAgdGV4dC1hbGlnbjogJHN3YWwyLWNvbnRlbnQtdGV4dC1hbGlnbjtcbiAgd29yZC13cmFwOiAkc3dhbDItY29udGVudC13b3JkLXdyYXA7XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhLFxuLnN3YWwyLXNlbGVjdCxcbi5zd2FsMi1yYWRpbyxcbi5zd2FsMi1jaGVja2JveCB7XG4gIG1hcmdpbjogJHN3YWwyLWlucHV0LW1hcmdpbjtcbn1cblxuLnN3YWwyLWlucHV0LFxuLnN3YWwyLWZpbGUsXG4uc3dhbDItdGV4dGFyZWEge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogJHN3YWwyLWlucHV0LXdpZHRoO1xuICB0cmFuc2l0aW9uOiAkc3dhbDItaW5wdXQtdHJhbnNpdGlvbjtcbiAgYm9yZGVyOiAkc3dhbDItaW5wdXQtYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItaW5wdXQtYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogJHN3YWwyLWlucHV0LWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6ICRzd2FsMi1pbnB1dC1ib3gtc2hhZG93O1xuICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi1pbnB1dC1mb250LXNpemU7XG5cbiAgJi5zd2FsMi1pbnB1dGVycm9yIHtcbiAgICBib3JkZXItY29sb3I6ICRzd2FsMi1lcnJvciAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAycHggJHN3YWwyLWVycm9yICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6ICRzd2FsMi1pbnB1dC1mb2N1cy1ib3JkZXI7XG4gICAgb3V0bGluZTogJHN3YWwyLWlucHV0LWZvY3VzLW91dGxpbmU7XG4gICAgYm94LXNoYWRvdzogJHN3YWwyLWlucHV0LWZvY3VzLWJveC1zaGFkb3c7XG4gIH1cblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA4MCk7XG4gIH1cbn1cblxuLnN3YWwyLXJhbmdlIHtcbiAgbWFyZ2luOiAkc3dhbDItaW5wdXQtbWFyZ2luO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItYmFja2dyb3VuZDtcblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIG91dHB1dCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaW5wdXQsXG4gIG91dHB1dCB7XG4gICAgaGVpZ2h0OiAkc3dhbDItaW5wdXQtaGVpZ2h0O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAkc3dhbDItaW5wdXQtZm9udC1zaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc3dhbDItaW5wdXQtaGVpZ2h0O1xuICB9XG59XG5cbi5zd2FsMi1pbnB1dCB7XG4gIGhlaWdodDogJHN3YWwyLWlucHV0LWhlaWdodDtcbiAgcGFkZGluZzogJHN3YWwyLWlucHV0LXBhZGRpbmc7XG5cbiAgJlt0eXBlPSdudW1iZXInXSB7XG4gICAgbWF4LXdpZHRoOiAxMGVtO1xuICB9XG59XG5cbi5zd2FsMi1maWxlIHtcbiAgYmFja2dyb3VuZDogJHN3YWwyLWlucHV0LWJhY2tncm91bmQ7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTtcbn1cblxuLnN3YWwyLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiAkc3dhbDItdGV4dGFyZWEtaGVpZ2h0O1xuICBwYWRkaW5nOiAkc3dhbDItdGV4dGFyZWEtcGFkZGluZztcbn1cblxuLnN3YWwyLXNlbGVjdCB7XG4gIG1pbi13aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IC4zNzVlbSAuNjI1ZW07XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1pbnB1dC1iYWNrZ3JvdW5kO1xuICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi1pbnB1dC1mb250LXNpemU7XG59XG5cbi5zd2FsMi1yYWRpbyxcbi5zd2FsMi1jaGVja2JveCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItYmFja2dyb3VuZDtcbiAgY29sb3I6ICRzd2FsMi1pbnB1dC1jb2xvcjtcblxuICBsYWJlbCB7XG4gICAgbWFyZ2luOiAwIC42ZW07XG4gICAgZm9udC1zaXplOiAkc3dhbDItaW5wdXQtZm9udC1zaXplO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbjogMCAuNGVtO1xuICB9XG59XG5cbi5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtanVzdGlmeS1jb250ZW50O1xuICBwYWRkaW5nOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLXBhZGRpbmc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtYmFja2dyb3VuZDtcbiAgY29sb3I6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtY29sb3I7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1mb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWZvbnQtd2VpZ2h0O1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyEnO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMS41ZW07XG4gICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIG1hcmdpbjogMCAuNjI1ZW07XG4gICAgem9vbTogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1pY29uLXpvb207XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi1iYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWljb24tY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5zd2FsMi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAkc3dhbDItaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRzd2FsMi1pY29uLXNpemU7XG4gIG1hcmdpbjogJHN3YWwyLWljb24tbWFyZ2luO1xuICB6b29tOiAkc3dhbDItaWNvbi16b29tO1xuICBib3JkZXI6IC4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtZmFtaWx5OiAkc3dhbDItaWNvbi1mb250LWZhbWlseTtcbiAgbGluZS1oZWlnaHQ6ICRzd2FsMi1pY29uLXNpemU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLnN3YWwyLWljb24tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMy43NWVtO1xuICB9XG5cbiAgJi5zd2FsMi1lcnJvciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkc3dhbDItZXJyb3I7XG4gICAgY29sb3I6ICRzd2FsMi1lcnJvcjtcblxuICAgIC5zd2FsMi14LW1hcmsge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cblxuICAgIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ10ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDIuMzEyNWVtO1xuICAgICAgd2lkdGg6IDIuOTM3NWVtO1xuICAgICAgaGVpZ2h0OiAuMzEyNWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjEyNWVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWVycm9yO1xuXG4gICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgbGVmdDogMS4wNjI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgJltjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICByaWdodDogMWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVycm9yIGljb24gYW5pbWF0aW9uXG4gICAgJi5zd2FsMi1pY29uLXNob3cge1xuICAgICAgQGlmICRzd2FsMi1pY29uLWFuaW1hdGlvbnMge1xuICAgICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXM7XG5cbiAgICAgICAgLnN3YWwyLXgtbWFyayB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAuNXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnN3YWwyLXdhcm5pbmcge1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigkc3dhbDItd2FybmluZywgNyk7XG4gICAgY29sb3I6ICRzd2FsMi13YXJuaW5nO1xuICB9XG5cbiAgJi5zd2FsMi1pbmZvIHtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWluZm8sIDIwKTtcbiAgICBjb2xvcjogJHN3YWwyLWluZm87XG4gIH1cblxuICAmLnN3YWwyLXF1ZXN0aW9uIHtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLXF1ZXN0aW9uLCAyMCk7XG4gICAgY29sb3I6ICRzd2FsMi1xdWVzdGlvbjtcbiAgfVxuXG4gICYuc3dhbDItc3VjY2VzcyB7XG4gICAgYm9yZGVyLWNvbG9yOiAkc3dhbDItc3VjY2VzcztcbiAgICBjb2xvcjogJHN3YWwyLXN1Y2Nlc3M7XG5cbiAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7XG4gICAgICAvLyBFbXVsYXRlIG1vdmluZyBjaXJjdWxhciBsaW5lXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMy43NWVtO1xuICAgICAgaGVpZ2h0OiA3LjVlbTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgJltjbGFzcyQ9J2xlZnQnXSB7XG4gICAgICAgIHRvcDogLS40Mzc1ZW07XG4gICAgICAgIGxlZnQ6IC0yLjA2MzVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMy43NWVtIDMuNzVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNy41ZW0gMCAwIDcuNWVtO1xuICAgICAgfVxuXG4gICAgICAmW2NsYXNzJD0ncmlnaHQnXSB7XG4gICAgICAgIHRvcDogLS42ODc1ZW07XG4gICAgICAgIGxlZnQ6IDEuODc1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMy43NWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDcuNWVtIDcuNWVtIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAvLyBSaW5nXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgdG9wOiAtLjI1ZW07XG4gICAgICBsZWZ0OiAtLjI1ZW07XG4gICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyOiAuMjVlbSBzb2xpZCAkc3dhbDItc3VjY2Vzcy1ib3JkZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcbiAgICAgIC8vIEhpZGUgY29ybmVycyBsZWZ0IGZyb20gYW5pbWF0aW9uXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgdG9wOiAuNWVtO1xuICAgICAgbGVmdDogMS42MjVlbTtcbiAgICAgIHdpZHRoOiAuNDM3NWVtO1xuICAgICAgaGVpZ2h0OiA1LjYyNWVtO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB9XG5cbiAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBoZWlnaHQ6IC4zMTI1ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAuMTI1ZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItc3VjY2VzcztcblxuICAgICAgJltjbGFzcyQ9J3RpcCddIHtcbiAgICAgICAgdG9wOiAyLjg3NWVtO1xuICAgICAgICBsZWZ0OiAuODEyNWVtO1xuICAgICAgICB3aWR0aDogMS41NjI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgJltjbGFzcyQ9J2xvbmcnXSB7XG4gICAgICAgIHRvcDogMi4zNzVlbTtcbiAgICAgICAgcmlnaHQ6IC41ZW07XG4gICAgICAgIHdpZHRoOiAyLjkzNzVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdWNjZXNzIGljb24gYW5pbWF0aW9uXG4gICAgJi5zd2FsMi1pY29uLXNob3cge1xuICAgICAgQGlmICRzd2FsMi1pY29uLWFuaW1hdGlvbnMge1xuICAgICAgICAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXM7XG4gICAgICAgIH1cblxuICAgICAgICAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0IHtcbiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46ICRzd2FsMi1wcm9ncmVzcy1zdGVwcy1tYXJnaW47XG4gIHBhZGRpbmc6ICRzd2FsMi1wcm9ncmVzcy1zdGVwcy1wYWRkaW5nO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtYmFja2dyb3VuZDtcbiAgZm9udC13ZWlnaHQ6ICRzd2FsMi1wcm9ncmVzcy1zdGVwcy1mb250LXdlaWdodDtcblxuICBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5zd2FsMi1wcm9ncmVzcy1zdGVwIHtcbiAgICB6LWluZGV4OiAyMDtcbiAgICB3aWR0aDogJHN3YWwyLXByb2dyZXNzLXN0ZXAtd2lkdGg7XG4gICAgaGVpZ2h0OiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC1oZWlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogJHN3YWwyLXByb2dyZXNzLXN0ZXAtYm9yZGVyLXJhZGl1cztcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItYWN0aXZlLXN0ZXAtYmFja2dyb3VuZDtcbiAgICBjb2xvcjogJHN3YWwyLWFjdGl2ZS1zdGVwLWNvbG9yO1xuICAgIGxpbmUtaGVpZ2h0OiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC1oZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJi5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkc3dhbDItYWN0aXZlLXN0ZXAtYmFja2dyb3VuZDtcblxuICAgICAgfiAuc3dhbDItcHJvZ3Jlc3Mtc3RlcCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLWJhY2tncm91bmQ7XG4gICAgICAgIGNvbG9yOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgfiAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5lIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHN3YWwyLXByb2dyZXNzLXN0ZXAtYmFja2dyb3VuZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5lIHtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB3aWR0aDogJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWRpc3RhbmNlO1xuICAgIGhlaWdodDogLjRlbTtcbiAgICBtYXJnaW46IDAgLTFweDtcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItYWN0aXZlLXN0ZXAtYmFja2dyb3VuZDtcbiAgfVxufVxuXG4vLyBnaXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yNjhcbltjbGFzc149J3N3YWwyJ10ge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc3dhbDItc2hvdyB7XG4gIGFuaW1hdGlvbjogJHN3YWwyLXNob3ctYW5pbWF0aW9uO1xufVxuXG4uc3dhbDItaGlkZSB7XG4gIGFuaW1hdGlvbjogJHN3YWwyLWhpZGUtYW5pbWF0aW9uO1xufVxuXG4uc3dhbDItbm9hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG4vLyBNZWFzdXJlIHNjcm9sbGJhciB3aWR0aCBmb3IgcGFkZGluZyBib2R5IGR1cmluZyBtb2RhbCBzaG93L2hpZGVcbi5zd2FsMi1zY3JvbGxiYXItbWVhc3VyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4vLyBSaWdodC10by1sZWZ0IHN1cHBvcnRcbi5zd2FsMi1ydGwge1xuICAuc3dhbDItY2xvc2Uge1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6ICRzd2FsMi1jbG9zZS1idXR0b24tZ2FwO1xuICB9XG5cbiAgLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhciB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vdmFyaWFibGVzJztcblxuLy8gTWljcm9zb2Z0IEVkZ2VcbkBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOiB0cnVlKSB7XG4gIC5zd2FsMi1yYW5nZSB7XG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBvdXRwdXQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gSUUxMVxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSxcbiAgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLnN3YWwyLXJhbmdlIHtcbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIG91dHB1dCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBGaXJlZm94XG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAuc3dhbDItY2xvc2Uge1xuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMnB4IHNvbGlkICRzd2FsMi1vdXRsaW5lLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjYyNWVtKSByb3RhdGVaKDJkZWcpO1xuICB9XG5cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7XG4gIH1cblxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1oaWRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDFkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAge1xuICAwJSB7XG4gICAgdG9wOiAuNTYyNWVtO1xuICAgIGxlZnQ6IC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA1NCUge1xuICAgIHRvcDogLjEyNWVtO1xuICAgIGxlZnQ6IC4xMjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDcwJSB7XG4gICAgdG9wOiAuNjI1ZW07XG4gICAgbGVmdDogLS4yNWVtO1xuICAgIHdpZHRoOiAxLjYyNWVtO1xuICB9XG5cbiAgODQlIHtcbiAgICB0b3A6IDEuMDYyNWVtO1xuICAgIGxlZnQ6IC43NWVtO1xuICAgIHdpZHRoOiAuNWVtO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdG9wOiAxLjEyNWVtO1xuICAgIGxlZnQ6IC4xODc1ZW07XG4gICAgd2lkdGg6IC43NWVtO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gIDAlIHtcbiAgICB0b3A6IDEuNjI1ZW07XG4gICAgcmlnaHQ6IDEuMzc1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA2NSUge1xuICAgIHRvcDogMS4yNWVtO1xuICAgIHJpZ2h0OiAuOTM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgODQlIHtcbiAgICB0b3A6IC45Mzc1ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEuMTI1ZW07XG4gIH1cblxuICAxMDAlIHtcbiAgICB0b3A6IC45Mzc1ZW07XG4gICAgcmlnaHQ6IC4xODc1ZW07XG4gICAgd2lkdGg6IDEuMzc1ZW07XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3RvYXN0cy1hbmltYXRpb25zJztcblxuLy8gQXBwZWFyYW5jZSBhbmltYXRpb25cbkBrZXlmcmFtZXMgc3dhbDItc2hvdyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43KTtcbiAgfVxuXG4gIDQ1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4vLyBEaXNwcGVhcmFuY2UgYW5pbWF0aW9uXG5Aa2V5ZnJhbWVzIHN3YWwyLWhpZGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4vLyBTdWNjZXNzIGljb24gYW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAge1xuICAwJSB7XG4gICAgdG9wOiAxLjE4NzVlbTtcbiAgICBsZWZ0OiAuMDYyNWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNTQlIHtcbiAgICB0b3A6IDEuMDYyNWVtO1xuICAgIGxlZnQ6IC4xMjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDcwJSB7XG4gICAgdG9wOiAyLjE4NzVlbTtcbiAgICBsZWZ0OiAtLjM3NWVtO1xuICAgIHdpZHRoOiAzLjEyNWVtO1xuICB9XG5cbiAgODQlIHtcbiAgICB0b3A6IDNlbTtcbiAgICBsZWZ0OiAxLjMxMjVlbTtcbiAgICB3aWR0aDogMS4wNjI1ZW07XG4gIH1cblxuICAxMDAlIHtcbiAgICB0b3A6IDIuODEyNWVtO1xuICAgIGxlZnQ6IC44MTI1ZW07XG4gICAgd2lkdGg6IDEuNTYyNWVtO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gIDAlIHtcbiAgICB0b3A6IDMuMzc1ZW07XG4gICAgcmlnaHQ6IDIuODc1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA2NSUge1xuICAgIHRvcDogMy4zNzVlbTtcbiAgICByaWdodDogMi44NzVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDg0JSB7XG4gICAgdG9wOiAyLjE4NzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMy40Mzc1ZW07XG4gIH1cblxuICAxMDAlIHtcbiAgICB0b3A6IDIuMzc1ZW07XG4gICAgcmlnaHQ6IC41ZW07XG4gICAgd2lkdGg6IDIuOTM3NWVtO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cblxuICAxMiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cbn1cblxuLy8gRXJyb3IgaWNvbiBhbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIHtcbiAgMCUge1xuICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDUwJSB7XG4gICAgbWFyZ2luLXRvcDogMS42MjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC40KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgODAlIHtcbiAgICBtYXJnaW4tdG9wOiAtLjM3NWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtbG9hZGluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3RvYXN0cy1ib2R5JztcblxuQG1peGluIHN3ZWV0YWxlcnQyLWJvZHkoKSB7XG4gICYuc3dhbDItc2hvd24ge1xuICAgIEBpbmNsdWRlIG5vdCgnLnN3YWwyLW5vLWJhY2tkcm9wJywgJy5zd2FsMi10b2FzdC1zaG93bicpIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8vIG5vdCBvdmVyZmxvdy15IGJlY2F1c2Ugb2YgU2FyYXJpLCAjMTI1M1xuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItaGVpZ2h0LWF1dG8ge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyAvLyAjNzgxICMxMTA3XG4gIH1cblxuICAmLnN3YWwyLW5vLWJhY2tkcm9wIHtcbiAgICAuc3dhbDItY29udGFpbmVyIHtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gI3skc3dhbDItY29udGFpbmVyLXBhZGRpbmd9ICogMik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAmID4gLnN3YWwyLW1vZGFsIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJHN3YWwyLWJhY2tkcm9wO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLXRvcCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItdG9wLXN0YXJ0LFxuICAgICAgJi5zd2FsMi10b3AtbGVmdCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3AtZW5kLFxuICAgICAgJi5zd2FsMi10b3AtcmlnaHQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlciB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlci1zdGFydCxcbiAgICAgICYuc3dhbDItY2VudGVyLWxlZnQge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlci1lbmQsXG4gICAgICAmLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tLXN0YXJ0LFxuICAgICAgJi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20tZW5kLFxuICAgICAgJi5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBwcmludCB7XG4gICAgJi5zd2FsMi1zaG93biB7XG4gICAgICBAaW5jbHVkZSBub3QoJy5zd2FsMi1uby1iYWNrZHJvcCcsICcuc3dhbDItdG9hc3Qtc2hvd24nKSB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuXG4gICAgICAgID4gW2FyaWEtaGlkZGVuPSd0cnVlJ10ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3dhbDItY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBzd2VldGFsZXJ0Mi10b2FzdHMtYm9keSgpIHtcbiAgJi5zd2FsMi10b2FzdC1zaG93biB7XG4gICAgLnN3YWwyLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgJi5zd2FsMi10b3Age1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLXRvcC1lbmQsXG4gICAgICAmLnN3YWwyLXRvcC1yaWdodCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3Atc3RhcnQsXG4gICAgICAmLnN3YWwyLXRvcC1sZWZ0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlci1zdGFydCxcbiAgICAgICYuc3dhbDItY2VudGVyLWxlZnQge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlciB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlci1lbmQsXG4gICAgICAmLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tLXN0YXJ0LFxuICAgICAgJi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20ge1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbS1lbmQsXG4gICAgICAmLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnN3YWwyLXRvYXN0LWNvbHVtbiB7XG4gICAgLnN3YWwyLXRvYXN0IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgLnN3YWwyLWFjdGlvbnMge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICBoZWlnaHQ6IDIuMmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAuMzEyNWVtO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItbG9hZGluZyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItaW5wdXQge1xuICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgbWFyZ2luOiAuMzEyNWVtIGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLXRvYXN0LWlucHV0LWZvbnQtc2l6ZTtcbiAgICAgIH1cblxuICAgICAgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLXRvYXN0LXZhbGlkYXRpb24tZm9udC1zaXplO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/order/form/Customers.ts":
/*!*****************************************!*\
  !*** ./src/app/order/form/Customers.ts ***!
  \*****************************************/
/*! exports provided: customerGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerGroups", function() { return customerGroups; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

let customerGroups = [{
        letter: 'A',
        names: []
    }, {
        letter: 'B',
        names: []
    }, {
        letter: 'C',
        names: []
    }, {
        letter: 'D',
        names: ['']
    }, {
        letter: 'E',
        names: []
    }, {
        letter: 'F',
        names: []
    }, {
        letter: 'G',
        names: []
    }, {
        letter: 'H',
        names: []
    }, {
        letter: 'I',
        names: []
    }, {
        letter: 'J',
        names: []
    }, {
        letter: 'K',
        names: []
    }, {
        letter: 'L',
        names: []
    }, {
        letter: 'M',
        names: []
    }, {
        letter: 'N',
        names: []
    }, {
        letter: 'O',
        names: []
    }, {
        letter: 'P',
        names: []
    }, {
        letter: 'R',
        names: []
    }, {
        letter: 'S',
        names: []
    }, {
        letter: 'Š',
        names: []
    }, {
        letter: 'T',
        names: []
    }, {
        letter: 'U',
        names: []
    }, {
        letter: 'V',
        names: []
    }];


/***/ }),

/***/ "./src/app/order/form/DropdownList.ts":
/*!********************************************!*\
  !*** ./src/app/order/form/DropdownList.ts ***!
  \********************************************/
/*! exports provided: DropdownList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownList", function() { return DropdownList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const DropdownList = [
    { item_id: 1, item_text: 'Drėgmė' },
    { item_id: 2, item_text: 'Pelenai' },
    { item_id: 3, item_text: 'Šilumingumas' },
    { item_id: 4, item_text: 'Lydumas' },
    { item_id: 5, item_text: 'C' },
    { item_id: 6, item_text: 'H' },
    { item_id: 7, item_text: 'N' },
    { item_id: 8, item_text: 'S' },
    { item_id: 9, item_text: 'Chloras' },
    { item_id: 10, item_text: 'O' },
    { item_id: 11, item_text: 'pH' },
    { item_id: 12, item_text: 'Tankis' },
    { item_id: 13, item_text: 'Frakcija' },
    { item_id: 14, item_text: 'LOJ' },
    { item_id: 15, item_text: 'Org. C' },
    { item_id: 16, item_text: 'P' },
    { item_id: 17, item_text: 'As' },
    { item_id: 18, item_text: 'Be' },
    { item_id: 19, item_text: 'Ca' },
    { item_id: 20, item_text: 'Cd' },
    { item_id: 21, item_text: 'Co' },
    { item_id: 22, item_text: 'Cr' },
    { item_id: 23, item_text: 'Cu' },
    { item_id: 24, item_text: 'Fe' },
    { item_id: 25, item_text: 'Li' },
    { item_id: 26, item_text: 'Mg' },
    { item_id: 27, item_text: 'Mn' },
    { item_id: 28, item_text: 'Mo' },
    { item_id: 29, item_text: 'Ni' },
    { item_id: 30, item_text: 'Pb' },
    { item_id: 31, item_text: 'Sb' },
    { item_id: 32, item_text: 'Se' },
    { item_id: 33, item_text: 'Sr' },
    { item_id: 34, item_text: 'Ti' },
    { item_id: 35, item_text: 'Tl' },
    { item_id: 36, item_text: 'V' },
    { item_id: 37, item_text: 'Zn' },
    { item_id: 38, item_text: 'K' },
    { item_id: 39, item_text: 'Si' },
    { item_id: 40, item_text: 'Al' },
    { item_id: 41, item_text: 'B' },
    { item_id: 42, item_text: 'Ba' },
    { item_id: 43, item_text: 'Na' },
    { item_id: 44, item_text: 'Ag' },
    { item_id: 45, item_text: 'Fiksuota C' },
    { item_id: 46, item_text: 'Hg' },
    { item_id: 47, item_text: 'Benzapirenas' },
];


/***/ }),

/***/ "./src/app/order/form/form.component.css":
/*!***********************************************!*\
  !*** ./src/app/order/form/form.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\nh1 {\r\n  text-align: center;\r\n}\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 1000px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n\r\n}\r\n.example-full-width {\r\n  width: 100%;\r\n padding-bottom: 50px;\r\n}\r\ntd {\r\n  padding-right: 8px;\r\n}\r\nh3 {\r\n  text-align: center;\r\n}\r\ndiv{\r\n\r\n}\r\n.example-margin{\r\nmargin-right: 50px;\r\n}\r\n.form-control.ng-touched.ng-invalid{\r\n  border:2px solid red;\r\n}\r\n.container-fluid{\r\n  width: 600px;\r\n}\r\nol{\r\n  font-size: 25px;\r\n}\r\n.mat-raised-button {\r\n\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 5px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwyRUFBMkU7QUFDM0U7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7O0FBRWhCO0FBRUE7RUFDRSxXQUFXO0NBQ1osb0JBQW9CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2Jvb3RzdHJhcEAzLjMuNy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycpO1xyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcbmgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZGl2e1xyXG5cclxufVxyXG4uZXhhbXBsZS1tYXJnaW57XHJcbm1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG4uZm9ybS1jb250cm9sLm5nLXRvdWNoZWQubmctaW52YWxpZHtcclxuICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIHdpZHRoOiA2MDBweDtcclxufVxyXG5vbHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/order/form/form.component.ts":
/*!**********************************************!*\
  !*** ./src/app/order/form/form.component.ts ***!
  \**********************************************/
/*! exports provided: _filter, FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_filter", function() { return _filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _DropdownList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownList */ "./src/app/order/form/DropdownList.ts");
/* harmony import */ var _Customers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Customers */ "./src/app/order/form/Customers.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/order/modal/modal.component.ts");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");











// tslint:disable-next-line:variable-name
const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
let FormComponent = class FormComponent {
    // tslint:disable-next-line:variable-name
    constructor(_formBuilder, api, dialog) {
        this._formBuilder = _formBuilder;
        this.api = api;
        this.dialog = dialog;
        this.sampleTypes = ['Skiedros', 'Granulės', 'Atliekos', 'Ligninas', 'Briketai'];
        this.orders = {};
        this.samples = {};
        this.typeHasError = true;
        this.customers = [];
        this.SampleArray = [];
        this.sampleList = [];
        this.showVar = false;
        this.dropdownList = Array();
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.customerForm = this._formBuilder.group({
            customerGroup: '',
        });
        this.submitted = false;
    }
    ngOnInit() {
        this.api.get('/lei/customers')
            .subscribe((users) => {
            this.customers = users;
            console.log(this.customers);
            for (const entry of this.customers) {
                console.log(entry);
                const letteri = entry.title.charAt(0);
                const name = entry.title;
                const result = _Customers__WEBPACK_IMPORTED_MODULE_6__["customerGroups"].find(({ letter }) => letter === letteri);
                result.names.push(name);
                console.log(result);
            }
            console.log(_Customers__WEBPACK_IMPORTED_MODULE_6__["customerGroups"]);
        });
        this.selectedOption = 'Kuro rūšis';
        this.samples.sampleWeight = 0;
        // tslint:disable-next-line:no-non-null-assertion
        this.customerGroupOptions = this.customerForm.get('customerGroup').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => this._filterGroup(value)));
        this.dropdownList = _DropdownList__WEBPACK_IMPORTED_MODULE_5__["DropdownList"];
        // tslint:disable-next-line:no-unused-expression
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: false
        };
    }
    onDropDownClose(items) {
        const strings = [];
        for (const item of items) {
            strings.push(item.item_text);
            console.log(strings);
        }
        console.log(strings);
        console.log(strings.join(', '));
        this.orders.test = strings.join(', ');
    }
    delete(titlee) {
        const result = this.customers.find(({ title }) => title === titlee);
        this.api.delete(`/lei/customers/${result.title}`).subscribe(() => this.customers = this.customers.filter(item => item.title !== result.title));
        _Customers__WEBPACK_IMPORTED_MODULE_6__["customerGroups"].push();
    }
    childFunction(value) {
        if (value.orderAmount < 100) {
            for (let i = 0; i <= value.orderAmount - 1; i++) {
                // tslint:disable-next-line:new-parens
                this.sampleList[i] = new class {
                };
                this.sampleList[i].protocolId = value.protocolId;
                this.sampleList[i].sampleWeight = 0;
            }
        }
        else {
            console.error('Too many samples ! Try less than 15.');
        }
    }
    toggleChild() {
        this.showVar = !this.showVar;
    }
    protocolChange(value) {
        this.samples.protocolId = value;
    }
    validateType(value) {
        if (value === 'default') {
            this.typeHasError = true;
        }
        else {
            this.typeHasError = false;
        }
    }
    _filterGroup(value) {
        if (value) {
            return _Customers__WEBPACK_IMPORTED_MODULE_6__["customerGroups"]
                .map(group => ({
                letter: group.letter, names: _filter(group.names, value)
            }))
                .filter(group => group.names.length > 0);
        }
        return _Customers__WEBPACK_IMPORTED_MODULE_6__["customerGroups"];
    }
    onSubmit() {
        console.log('to orders', this.orders);
        this.api.post('/lei/orders', this.orders).subscribe(data => console.log('Success!', data), error => console.log('Error', error));
    }
    onSubmit2() {
        console.log('to samples', this.sampleList);
        for (const sample of this.sampleList) {
            setTimeout(() => this.api.post('/lei/samples', sample).subscribe((result) => {
                const row = this.sampleList.find(item => item.id === result.id);
                if (row) {
                    row.protocolId = result.protocolId;
                    row.sampleId = result.sampleId;
                    row.sampleWeight = result.sampleWeight;
                }
                else {
                    this.sampleList = [...this.sampleList, result];
                }
            }), 1000);
            this.SampleArray = [];
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], {
            width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.api.post('/lei/customers', data).subscribe((result) => {
                    const row = this.customers.find(item => item.id === result.id);
                    if (row) {
                        row.title = result.title;
                    }
                    else {
                        this.customers = [...this.customers, result];
                    }
                });
            }
            this.swalCustomerAdd();
        });
    }
    clear() {
        this.orders.sampleType = '';
        this.orders.protocolId = '';
        this.orders.test = '';
        this.orders.customer = '';
        this.orders.orderAmount = null;
        this.sampleList = [];
    }
    swalOrderRegister() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Protokolas užregistruotas!', '', 'success');
    }
    swalCustomerAdd() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Užsakovas pridėtas!', '', 'success');
    }
    swalCustomerDelete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Užsakovas ištrintas.', '', 'success');
    }
};
FormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormComponent.prototype, "value", void 0);
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/form/form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.css */ "./src/app/order/form/form.component.css")).default]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/order/modal/modal.component.css":
/*!*************************************************!*\
  !*** ./src/app/order/modal/modal.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  text-align: center;\r\n}\r\n\r\ndiv.mat-dialog-actions {\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvb3JkZXIvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/order/modal/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/order/modal/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let ModalComponent = class ModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.title = data.title;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/order/modal/modal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalComponent);



/***/ }),

/***/ "./src/app/order/order-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/order/order-routing.module.ts ***!
  \***********************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "./src/app/order/form/form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"]
    }
];
let OrderRoutingModule = class OrderRoutingModule {
};
OrderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], OrderRoutingModule);



/***/ }),

/***/ "./src/app/order/order.module.ts":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/order/order-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "./src/app/order/form/form.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/order/modal/modal.component.ts");









let OrderModule = class OrderModule {
};
OrderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"]],
        imports: [
            _order_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"]
        ],
        entryComponents: [
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"]
        ]
    })
], OrderModule);



/***/ })

}]);
//# sourceMappingURL=order-order-module-es2015.js.map