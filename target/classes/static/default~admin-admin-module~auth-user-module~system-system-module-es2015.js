(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~auth-user-module~system-system-module"],{

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

/***/ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js":
/*!******************************************************************!*\
  !*** ./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js ***!
  \******************************************************************/
/*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropDirective", function() { return FileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLikeObject", function() { return FileLikeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function() { return FileSelectDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploader", function() { return FileUploader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */
function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
class FileLikeObject {
    /**
     * @param {?} fileOrInput
     */
    constructor(fileOrInput) {
        this.rawFile = fileOrInput;
        /** @type {?} */
        let isInput = isElement(fileOrInput);
        /** @type {?} */
        let fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */
        let postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */
        let method = '_createFrom' + postfix;
        ((/** @type {?} */ (this)))[method](fakePathOrObject);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    _createFromFakePath(path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    }
    /**
     * @param {?} object
     * @return {?}
     */
    _createFromObject(object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileItem {
    /**
     * @param {?} uploader
     * @param {?} some
     * @param {?} options
     */
    constructor(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    /**
     * @return {?}
     */
    upload() {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    }
    /**
     * @return {?}
     */
    cancel() {
        this.uploader.cancelItem(this);
    }
    /**
     * @return {?}
     */
    remove() {
        this.uploader.removeFromQueue(this);
    }
    /**
     * @return {?}
     */
    onBeforeUpload() {
        return void 0;
    }
    /**
     * @param {?} form
     * @return {?}
     */
    onBuildForm(form) {
        return { form };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgress(progress) {
        return { progress };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccess(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onError(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancel(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onComplete(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @return {?}
     */
    _onBeforeUpload() {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    }
    /**
     * @param {?} form
     * @return {?}
     */
    _onBuildForm(form) {
        this.onBuildForm(form);
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    _onProgress(progress) {
        this.progress = progress;
        this.onProgress(progress);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccess(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onError(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCancel(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onComplete(response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    }
    /**
     * @return {?}
     */
    _prepareToUploading() {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileType {
    /**
     * @param {?} file
     * @return {?}
     */
    static getMimeClass(file) {
        /** @type {?} */
        let mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    }
    /**
     * @param {?} inputFilename
     * @return {?}
     */
    static fileTypeDetection(inputFilename) {
        /** @type {?} */
        let types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        /** @type {?} */
        let chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        /** @type {?} */
        let extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    }
}
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream',
    'application/x-zip-compressed',
    'application/zip-compressed',
    'application/x-7z-compressed',
    'application/gzip',
    'application/x-bzip2'
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isFile(value) {
    return (File && value instanceof File);
}
/**
 * @record
 */
function Headers() { }
if (false) {}
/**
 * @record
 */
function FileUploaderOptions() { }
if (false) {}
class FileUploader {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: (/**
             * @param {?} item
             * @return {?}
             */
            (item) => item._file),
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (let i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    }
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    addToQueue(files, options, filters) {
        /** @type {?} */
        let list = [];
        for (let file of files) {
            list.push(file);
        }
        /** @type {?} */
        let arrayOfFilters = this._getFilters(filters);
        /** @type {?} */
        let count = this.queue.length;
        /** @type {?} */
        let addedFileItems = [];
        list.map((/**
         * @param {?} some
         * @return {?}
         */
        (some) => {
            if (!options) {
                options = this.options;
            }
            /** @type {?} */
            let temp = new FileLikeObject(some);
            if (this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                let fileItem = new FileItem(this, some, options);
                addedFileItems.push(fileItem);
                this.queue.push(fileItem);
                this._onAfterAddingFile(fileItem);
            }
            else {
                /** @type {?} */
                let filter = arrayOfFilters[this._failFilterIndex];
                this._onWhenAddingFileFailed(temp, filter, options);
            }
        }));
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeFromQueue(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    }
    /**
     * @return {?}
     */
    clearQueue() {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    uploadItem(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        /** @type {?} */
        let transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        ((/** @type {?} */ (this)))[transport](item);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    cancelItem(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        /** @type {?} */
        let prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    }
    /**
     * @return {?}
     */
    uploadAll() {
        /** @type {?} */
        let items = this.getNotUploadedItems().filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => !item.isUploading));
        if (!items.length) {
            return;
        }
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item._prepareToUploading()));
        items[0].upload();
    }
    /**
     * @return {?}
     */
    cancelAll() {
        /** @type {?} */
        let items = this.getNotUploadedItems();
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.cancel()));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFile(value) {
        return isFile(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFileLikeObject(value) {
        return value instanceof FileLikeObject;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getIndexOfItem(value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    }
    /**
     * @return {?}
     */
    getNotUploadedItems() {
        return this.queue.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => !item.isUploaded));
    }
    /**
     * @return {?}
     */
    getReadyItems() {
        return this.queue
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => (item.isReady && !item.isUploading)))
            .sort((/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        (item1, item2) => item1.index - item2.index));
    }
    /**
     * @return {?}
     */
    destroy() {
        return void 0;
    }
    /**
     * @param {?} fileItems
     * @return {?}
     */
    onAfterAddingAll(fileItems) {
        return { fileItems };
    }
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    onBuildItemForm(fileItem, form) {
        return { fileItem, form };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onAfterAddingFile(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    onWhenAddingFileFailed(item, filter, options) {
        return { item, filter, options };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onBeforeUploadItem(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    onProgressItem(fileItem, progress) {
        return { fileItem, progress };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgressAll(progress) {
        return { progress };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccessItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onErrorItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancelItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCompleteItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @return {?}
     */
    onCompleteAll() {
        return void 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _mimeTypeFilter(item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileSizeFilter(item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileTypeFilter(item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onErrorItem(item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCompleteItem(item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        /** @type {?} */
        let nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    }
    /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    _headersGetter(parsedHeaders) {
        return (/**
         * @param {?} name
         * @return {?}
         */
        (name) => {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        });
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _xhrTransport(item) {
        /** @type {?} */
        let that = this;
        /** @type {?} */
        let xhr = item._xhr = new XMLHttpRequest();
        /** @type {?} */
        let sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            /** @type {?} */
            const appendFile = (/**
             * @return {?}
             */
            () => sendable.append(item.alias, item._file, item.file.name));
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    /** @type {?} */
                    let paramVal = this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                }));
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            let progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            this._onProgressItem(item, progress);
        });
        xhr.onload = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            /** @type {?} */
            let gist = this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */
            let method = '_on' + gist + 'Item';
            ((/** @type {?} */ (this)))[method](item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onerror = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            this._onErrorItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onabort = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            this._onCancelItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (let header of this.options.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (let header of item.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = (/**
         * @return {?}
         */
        function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        });
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => xhr.send(JSON.stringify(result))));
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    }
    /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    _getTotalProgress(value = 0) {
        if (this.options.removeAfterUpload) {
            return value;
        }
        /** @type {?} */
        let notUploaded = this.getNotUploadedItems().length;
        /** @type {?} */
        let uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        /** @type {?} */
        let ratio = 100 / this.queue.length;
        /** @type {?} */
        let current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    }
    /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    _getFilters(filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            /** @type {?} */
            let names = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            (filter) => names.indexOf(filter.name) !== -1));
        }
        return this.options.filters;
    }
    /**
     * @protected
     * @return {?}
     */
    _render() {
        return void 0;
    }
    /**
     * @protected
     * @return {?}
     */
    _queueLimitFilter() {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    }
    /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    _isValidFile(file, filters, options) {
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every((/**
         * @param {?} filter
         * @return {?}
         */
        (filter) => {
            this._failFilterIndex++;
            return filter.fn.call(this, file, options);
        }));
    }
    /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    _isSuccessCode(status) {
        return (status >= 200 && status < 300) || status === 304;
    }
    /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    _transformResponse(response, headers) {
        return response;
    }
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    _parseHeaders(headers) {
        /** @type {?} */
        let parsed = {};
        /** @type {?} */
        let key;
        /** @type {?} */
        let val;
        /** @type {?} */
        let i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map((/**
         * @param {?} line
         * @return {?}
         */
        (line) => {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }));
        return parsed;
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    _onWhenAddingFileFailed(item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _onAfterAddingFile(item) {
        this.onAfterAddingFile(item);
    }
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    _onAfterAddingAll(items) {
        this.onAfterAddingAll(items);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _onBeforeUploadItem(item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    _onBuildItemForm(item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    _onProgressItem(item, progress) {
        /** @type {?} */
        let total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccessItem(item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCancelItem(item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileSelectDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @return {?}
     */
    isEmptyAfterSelection() {
        return !!this.element.nativeElement.attributes.multiple;
    }
    /**
     * @return {?}
     */
    onChange() {
        /** @type {?} */
        let files = this.element.nativeElement.files;
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    }
}
FileSelectDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileSelect]' },] }
];
/** @nocollapse */
FileSelectDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FileSelectDirective.propDecorators = {
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onFileSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileDropDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        if (((/** @type {?} */ (this))).element) {
            if (event.currentTarget === ((/** @type {?} */ (this))).element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _getTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _preventAndStop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    _haveFiles(types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    }
}
FileDropDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileDrop]' },] }
];
/** @nocollapse */
FileDropDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FileDropDirective.propDecorators = {
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileUploadModule {
}
FileUploadModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [FileDropDirective, FileSelectDirective],
                exports: [FileDropDirective, FileSelectDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng2-file-upload.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/create/create.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/create/create.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div style=\"padding: 50px; height:80vh; overflow: auto;\">\n  <app-advert-form (submitSuccess)=\"confirm($event)\"></app-advert-form>\n</div>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/log/date-modal/date-modal.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/log/date-modal/date-modal.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 mat-dialog-title>Mėginių registravimo data </h3>\r\n\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"MM/DD/YYYY\" [(ngModel)]=\"data.date\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Atšaukti</button>\r\n  <button mat-button [mat-dialog-close]=\"data\">Rodyti</button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/log/list/list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/log/list/list.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3\r\n>Rezultatai</h3>\r\n<div>\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtruoti\">\r\n  </mat-form-field>\r\n  <table mat-table matTableExporter [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" #exporter=\"matTableExporter\">\r\n    <ng-container matColumnDef=\"no\">\r\n      <th mat-header-cell *matHeaderCellDef> Nr.</th>\r\n      <td mat-cell *matCellDef=\"let index = index\"> {{index + 1}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"protocolId\">\r\n      <th mat-header-cell *matHeaderCellDef> Protokolas</th>\r\n      <td mat-cell\r\n          *matCellDef=\"let element\"> {{element.protocolId}} {{'/' + year.toString().charAt(2) + year.toString().charAt(3) + '-8B'}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"sampleId\">\r\n      <th mat-header-cell *matHeaderCellDef> Mėginys</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.sampleId}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"ashValue\">\r\n      <th mat-header-cell *matHeaderCellDef> Peleningumas, %</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.ashValue}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"totalMoistureValue\">\r\n      <th mat-header-cell *matHeaderCellDef> Drėgmė, %</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.totalMoistureValue}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"calorificValue\">\r\n      <th mat-header-cell *matHeaderCellDef> Sauso kuro apatinis šilumingumas, kJ/kg</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.calorificValue}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"date\">\r\n      <th mat-header-cell *matHeaderCellDef> Data</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.date.toString().substring(0, 9).replace(\",\",\"\").replace(\"\\\\s+\",\"\")}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item (click)=\"openDialog(element)\">\r\n            <mat-icon>edit</mat-icon>\r\n            <span>Redaguoti</span>\r\n          </button>\r\n          <button mat-menu-item (click)=\"swalOrderDelete()\" (click)=\"delete(element.id)\">\r\n            <mat-icon>delete</mat-icon>\r\n            <span>Ištrinti</span>\r\n          </button>\r\n        </mat-menu>\r\n\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n\r\n  <div  class=\"footer\">\r\n    <mat-toolbar color=\"primary\">\r\n      <mat-toolbar-row>\r\n        <div class=\"buttons\">\r\n          <button mat-stroked-button color=\"primary\" (click)=\"displayFilter('pilnas')\" title=\"Pilna rezultatų lentelė\">Pilnas</button>\r\n          <button mat-stroked-button color=\"primary\" (click)=\"openDialog2()\" title=\"Rodyti pasirinktos dienos užsakymus\">\r\n            Rezultatai pagal dieną\r\n          </button>\r\n        </div>\r\n        <button mat-icon-button class=\"footer-icon\" color=\"primary\"\r\n                (click)=\"exporter.exportTable('xlsx', {fileName: 'Rezultatai ' + this.datePipe.transform(this.excelDate,'yyyy-MM-dd'), sheet: 'Rezultatai'})\"\r\n                title=\"Išsaugoti XSLX formatu\">\r\n          <mat-icon>save</mat-icon>\r\n        </button>\r\n\r\n        <mat-paginator showFirstLastButtons=\"true\" class=\"paginator\" [pageSizeOptions]=\"[10, 20, 50]\"></mat-paginator>\r\n\r\n        <mat-card color=\"primary\" *ngIf=\" decoder.isAdmin() === true\" class=\"example-card\">\r\n          <mat-card-content>\r\n            <div *ngIf=\"currentFile\" class=\"progress\">\r\n              <div\r\n                class=\"progress-bar progress-bar-info progress-bar-striped\"\r\n                role=\"progressbar\"\r\n                attr.aria-valuenow=\"{{ progress }}\"\r\n                aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\"\r\n                [ngStyle]=\"{ width: progress + '%' }\"\r\n              >\r\n                {{ progress }}%\r\n              </div>\r\n            </div>\r\n            <div class=\"alert alert-light\" role=\"alert\">{{ message }}</div>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n              <input type=\"file\" (change)=\"selectFile($event)\">\r\n              <button mat-button [disabled]=\"!selectedFiles\" (click)=\"upload()\"> Įkelti</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/log/modal/modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/log/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 mat-dialog-title>Protokolas: {{ data.oldProtocolId }}</h3>\r\n\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Protokolas\" [(ngModel)]=\"data.protocolId\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Mėginio Id\" [(ngModel)]=\"data.sampleId\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Peleningumas\" [(ngModel)]=\"data.ashValue\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n  <label>\r\n    <input matInput placeholder=\"Šilumingumas\" [(ngModel)]=\"data.calorificValue\" cdkFocusInitial>\r\n  </label>\r\n</mat-form-field>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Visuminė drėgmė\" [(ngModel)]=\"data.totalMoistureValue\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Atšaukti</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" (click)=\" this.swalOrderUpdate();\">Išsaugoti</button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/order/form/form.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/order/form/form.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div [hidden]=\"submitted\">\r\n    <h1>Užsakymo forma</h1>\r\n\r\n    <form (ngSubmit)=\"onSubmit(); onSubmit2()\" #orderForm=\"ngForm\" novalidate id=\"orderForm\">\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"protocolId\">Protokolas</label>\r\n        <input\r\n          (ngModelChange)=\"protocolChange($event)\"\r\n          [(ngModel)]=\"orders.protocolId\"\r\n          required\r\n          pattern=\"^[0-9]*$\"\r\n          name=\"protocolId\"\r\n          #protocol=\"ngModel\"\r\n          id=\"protocolId\"\r\n          class=\"form-control\"\r\n          tabIndex=\"1\"\r\n        >\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          *ngIf=\"protocol.touched && !protocol.valid\">\r\n          <small\r\n            *ngIf=\"protocol.errors.required\">\r\n            Įveskite užsakymo numerį\r\n          </small>\r\n          <div\r\n            *ngIf=\"protocol.errors.maxlength\">\r\n            Max {{protocol.errors.maxlength.requiredLength}} chars allowed\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <label for=\"customer\"> Užsakovas </label>\r\n        <input [(ngModel)]=\"orders.customer\" name=\"customer\" type=\"text\" class=\"form-control\" id=\"customer\"\r\n               #customer=\"ngModel\"\r\n               required\r\n               [matAutocomplete]=\"autoGroup\">\r\n\r\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\r\n          <mat-optgroup *ngFor=\"let group of customerGroupOptions | async\" [label]=\"group.letter\">\r\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\r\n              <div class=\"aParent\">\r\n                <div>\r\n                  {{name}}\r\n                </div>\r\n                <div>\r\n                  <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"swalCustomerDelete();delete(name)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </mat-option>\r\n          </mat-optgroup>\r\n          <button mat-menu-item (click)=\"openDialog()\">\r\n            <mat-icon>edit</mat-icon>\r\n            <span>Pridėti naują užsakovą</span>\r\n          </button>\r\n        </mat-autocomplete>\r\n\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          *ngIf=\"customer.touched && !customer.valid\">\r\n          <small\r\n            *ngIf=\"customer.errors.required\">\r\n            Įveskite užsakovą\r\n          </small>\r\n        </div>\r\n        <div>\r\n          <label>Tyrimai</label>\r\n        <ng-multiselect-dropdown\r\n          name=\"tests\"\r\n          #tests=\"ngModel\"\r\n          id=\"tests\"\r\n          [placeholder]=\"'-'\"\r\n          [data]=\"dropdownList\"\r\n          [(ngModel)]=\"selectedItems\"\r\n          [settings]=\"dropdownSettings\"\r\n          (onDropDownClose)=\"onDropDownClose(selectedItems)\"\r\n        >\r\n        </ng-multiselect-dropdown>\r\n        </div>\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          *ngIf=\"tests.touched && !tests.valid\">\r\n          <small\r\n            *ngIf=\"tests.errors.required\">\r\n            Įveskite daromus tyrimus\r\n          </small>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"sampleType\"> Kuro rūšis </label>\r\n        <input [(ngModel)]=\"orders.sampleType\" name=\"sampleType\" type=\"text\" class=\"form-control\" id=\"sampleType\"\r\n               #sampleType=\"ngModel\"\r\n               required\r\n               [matAutocomplete]=\"autoGroup2\">\r\n\r\n        <mat-autocomplete #autoGroup2=\"matAutocomplete\">\r\n          <mat-optgroup *ngFor=\"let group of sampleTypeGroupOptions | async\" [label]=\"group.letter\">\r\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\r\n              <div class=\"aParent\">\r\n                <div>\r\n                  {{name}}\r\n                </div>\r\n                <div>\r\n                  <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"swalCustomerDelete();delete2(name)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </mat-option>\r\n          </mat-optgroup>\r\n          <button mat-menu-item (click)=\"openDialog2()\">\r\n            <mat-icon>edit</mat-icon>\r\n            <span>Pridėti naują rūšį</span>\r\n          </button>\r\n        </mat-autocomplete>\r\n\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          *ngIf=\"sampleType.touched && !sampleType.valid\">\r\n          <small\r\n            *ngIf=\"sampleType.errors.required\">\r\n            Įveskite kuro rūšį\r\n          </small>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"sampleAmount\"> Kiekis </label>\r\n        <input\r\n          (focusout)=\"toggleChild();childFunction(orders)\"\r\n          required\r\n          [(ngModel)]=\"orders.orderAmount\"\r\n          name=\"orderAmount\"\r\n          #sampleAmount=\"ngModel\"\r\n          pattern=\"^[0-9]*$\"\r\n          class=\"form-control\"\r\n          id=\"sampleAmount\"\r\n        >\r\n        <div\r\n          class=\"alert alert-danger\"\r\n          *ngIf=\"sampleAmount.touched && !sampleAmount.valid\">\r\n          <small\r\n            *ngIf=\"sampleAmount.errors.required\">\r\n            Įveskite mėginių kiekį\r\n          </small>\r\n        </div>\r\n      </div>\r\n\r\n      <button mat-button [disabled]=\"orderForm.form.invalid || typeHasError\" type=\"submit\" class=\"btn btn-primary\"\r\n              (click)=\"swalOrderRegister()\">\r\n        Registruoti\r\n      </button>\r\n\r\n      <button mat-button type=\"button\" class=\" btn btn-secondary\" (click)=\"clear()\">Valyti</button>\r\n\r\n      <ol class=\"form-group\">\r\n        <label *ngIf=\"showVar\"> Mėginių sąrašas </label>\r\n\r\n        <li *ngFor=\"let sample of sampleList; let i= index\">\r\n          <td>\r\n            <input tabIndex=\"{{i}}\"  type=\"text\" name=\"sampleId-{{i}}\" [(ngModel)]=\"sampleList[i].sampleId\" #ft01=\"ngModel\"\r\n                   class=\"form-control\" #samplesS=\"ngModel\" required\r\n            ></td>\r\n          <div\r\n            class=\"alert alert-danger\"\r\n            *ngIf=\"samplesS.touched && !samplesS.valid\">\r\n            <small\r\n              *ngIf=\"samplesS.errors.required\">\r\n              Įveskite mėginio ID\r\n            </small>\r\n          </div>\r\n      </ol>\r\n    </form>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/order/modal/modal.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/order/modal/modal.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <label>\r\n      <input matInput placeholder=\"Užsakovas\" [(ngModel)]=\"data.title\" cdkFocusInitial>\r\n    </label>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"data\">Save</button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v9.10.2
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array ob object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.opacity = '';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  /* istanbul ignore next */

  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    container.innerHTML = sweetHTML;
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      target.innerHTML = param;
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      target.innerHTML = param.toString();
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.innerHTML = '';

    if (0 in elem) {
      for (var i = 0; i in elem; i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render confirm button

    renderButton(confirmButton, 'confirm', params); // render Cancel Button

    renderButton(cancelButton, 'cancel', params);

    if (params.buttonsStyling) {
      handleButtonsStyling(confirmButton, cancelButton, params);
    } else {
      removeClass([confirmButton, cancelButton], swalClasses.styled);
      confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
      cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
    }

    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    }
  };

  function handleButtonsStyling(confirmButton, cancelButton, params) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    button.innerHTML = params["".concat(buttonType, "ButtonText")]; // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    return range;
  };

  renderInputType.select = function (select, params) {
    select.innerHTML = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      placeholder.innerHTML = params.inputPlaceholder;
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    return select;
  };

  renderInputType.radio = function (radio) {
    radio.innerHTML = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    label.innerHTML = params.inputPlaceholder;
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + popupPadding;

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    closeButton.innerHTML = params.closeButtonHtml; // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyCustomClass(getIcon(), params, 'icon');
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      adjustSuccessIconBackgoundColor(); // Custom class

      applyCustomClass(icon, params, 'icon'); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.innerHTML = '';

    if (params.iconHtml) {
      icon.innerHTML = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      icon.innerHTML = "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ";
    } else if (params.icon === 'error') {
      icon.innerHTML = "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ";
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      icon.innerHTML = iconContent(defaultIconHtml[params.icon]);
    }
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    stepEl.innerHTML = step;
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.innerHTML = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(step);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.onRender === 'function') {
      params.onRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Show spinner instead of Confirm button
   */

  var showLoading = function showLoading() {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    show(actions);
    show(confirmButton, 'inline-block');
    addClass([popup, actions], swalClasses.loading);
    confirmButton.disabled = true;
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconHtml: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: undefined,
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    onRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    onDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['title', 'titleText', 'text', 'html', 'icon', 'hideClass', 'customClass', 'allowOutsideClick', 'allowEscapeKey', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeight', 'imageAlt', 'progressSteps', 'currentProgressStep'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDepreation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getCancelButton: getCancelButton,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning
  });

  /**
   * Enables buttons and hide loader.
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);

    if (!innerParams.showConfirmButton) {
      hide(domCache.confirmButton);

      if (!innerParams.showCancelButton) {
        hide(domCache.actions);
      }
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = e.target === container || !isScrollable(container) && e.target.tagName !== 'INPUT' // #1603
      ;
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, onAfterClose) {
    if (isToast$$1) {
      triggerOnAfterCloseAndDispose(instance, onAfterClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerOnAfterCloseAndDispose(instance, onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue || {});
  }

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose;

    if (onClose !== null && typeof onClose === 'function') {
      onClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), onAfterClose);
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
    setTimeout(function () {
      if (typeof onAfterClose === 'function') {
        onAfterClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    domCache.validationMessage.innerHTML = error;
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
    domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {Array} params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup);
    }

    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setScrollingVisibility(container, popup);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding);
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      });
    }

    removeClass(container, swalClasses['no-transition']);
  };

  function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  }

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding) {
    iOSfix();
    IEfix();
    setAriaHidden();

    if (scrollbarPadding) {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);
    show(popup); // Animate popup right after showing it

    addClass(popup, params.showClass.popup);
    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isPromise(params.inputValue)) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (isPromise(params.inputOptions)) {
      showLoading();
      params.inputOptions.then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    params.inputValue.then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);
      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1];
        var option = document.createElement('option');
        option.value = optionValue;
        option.innerHTML = optionLabel;

        if (params.inputValue.toString() === optionValue.toString()) {
          option.selected = true;
        }

        select.appendChild(option);
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (params.inputValue.toString() === radioValue.toString()) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        label.innerHTML = radioLabel;
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        result.push([key, value]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        result.push([key, inputOptions[key]]);
      });
    }

    return result;
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmWithInput(instance, innerParams);
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      instance.disableInput();
      var validationPromise = Promise.resolve().then(function () {
        return innerParams.inputValidator(inputValue, innerParams.validationMessage);
      });
      validationPromise.then(function (validationMessage) {
        instance.enableButtons();
        instance.enableInput();

        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      });
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return innerParams.preConfirm(value, innerParams.validationMessage);
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    for (var i = 0; i < focusableElements.length; i++) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if (arrowKeys.indexOf(e.key) !== -1) {
      handleArrows(); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows() {
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

    if (document.activeElement === confirmButton && isVisible(cancelButton)) {
      cancelButton.focus(); // and vice versa
    } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
      confirmButton.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    showWarningsForParams(userParams);

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams) {
    var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, userParams);

    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: '',
        backdrop: 'swal2-backdrop-show swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247)

      domCache.container.scrollTop = 0;
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      cancelButton: getCancelButton(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout.running) {
            // timer can be already stopped at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      return domCache.cancelButton.focus();
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      return domCache.confirmButton.focus();
    }

    setFocus(innerParams, -1, 1);
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy();
    }

    disposeSwal(this);
  }

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance; // SweetAlert constructor

  function SweetAlert() {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (typeof window === 'undefined') {
      return;
    } // Check for the existence of Promise

    /* istanbul ignore if */


    if (typeof Promise === 'undefined') {
      error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
    }

    currentInstance = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var outerParams = Object.freeze(this.constructor.argsToParams(args));
    Object.defineProperties(this, {
      params: {
        value: outerParams,
        writable: false,
        enumerable: true,
        configurable: true
      }
    });

    var promise = this._main(this.params);

    privateProps.promise.set(this, promise);
  } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


  SweetAlert.prototype.then = function (onFulfilled) {
    var promise = privateProps.promise.get(this);
    return promise.then(onFulfilled);
  };

  SweetAlert.prototype["finally"] = function (onFinally) {
    var promise = privateProps.promise.get(this);
    return promise["finally"](onFinally);
  }; // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '9.10.2';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ }),

/***/ "./node_modules/sweetalert2/src/sweetalert2.scss":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/sweetalert2.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swal2-popup.swal2-toast {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: auto;\n  padding: 0.625em;\n  overflow-y: hidden;\n  background: #fff;\n  box-shadow: 0 0 0.625em #d9d9d9;\n}\n.swal2-popup.swal2-toast .swal2-header {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.swal2-popup.swal2-toast .swal2-title {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin: 0 0.6em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-footer {\n  margin: 0.5em 0 0;\n  padding: 0.5em 0 0;\n  font-size: 0.8em;\n}\n.swal2-popup.swal2-toast .swal2-close {\n  position: static;\n  width: 0.8em;\n  height: 0.8em;\n  line-height: 0.8;\n}\n.swal2-popup.swal2-toast .swal2-content {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-icon {\n  width: 2em;\n  min-width: 2em;\n  height: 2em;\n  margin: 0;\n}\n.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 1.8em;\n  font-weight: bold;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n    font-size: 0.25em;\n  }\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n  top: 0.875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n  left: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n  right: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-actions {\n  flex-basis: auto !important;\n  width: auto;\n  height: auto;\n  margin: 0 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-styled {\n  margin: 0 0.3125em;\n  padding: 0.3125em 0.625em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-styled:focus {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4);\n}\n.swal2-popup.swal2-toast .swal2-success {\n  border-color: #a5dc86;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line] {\n  position: absolute;\n  width: 1.6em;\n  height: 3em;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  border-radius: 50%;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left] {\n  top: -0.8em;\n  left: -0.5em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 2em 2em;\n          transform-origin: 2em 2em;\n  border-radius: 4em 0 0 4em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.25em;\n  left: 0.9375em;\n  -webkit-transform-origin: 0 1.5em;\n          transform-origin: 0 1.5em;\n  border-radius: 0 4em 4em 0;\n}\n.swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n  top: 0;\n  left: 0.4375em;\n  width: 0.4375em;\n  height: 2.6875em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line] {\n  height: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 1.125em;\n  left: 0.1875em;\n  width: 0.75em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long] {\n  top: 0.9375em;\n  right: 0.1875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip {\n  -webkit-animation: swal2-toast-animate-success-line-tip 0.75s;\n          animation: swal2-toast-animate-success-line-tip 0.75s;\n}\n.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long {\n  -webkit-animation: swal2-toast-animate-success-line-long 0.75s;\n          animation: swal2-toast-animate-success-line-long 0.75s;\n}\n.swal2-popup.swal2-toast.swal2-show {\n  -webkit-animation: swal2-toast-show 0.5s;\n          animation: swal2-toast-show 0.5s;\n}\n.swal2-popup.swal2-toast.swal2-hide {\n  -webkit-animation: swal2-toast-hide 0.1s forwards;\n          animation: swal2-toast-hide 0.1s forwards;\n}\n.swal2-container {\n  display: -webkit-box;\n  display: flex;\n  position: fixed;\n  z-index: 1060;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0.625em;\n  overflow-x: hidden;\n  -webkit-transition: background-color 0.1s;\n  transition: background-color 0.1s;\n  -webkit-overflow-scrolling: touch;\n}\n.swal2-container.swal2-backdrop-show {\n  background: rgba(0, 0, 0, 0.4);\n}\n.swal2-container.swal2-backdrop-hide {\n  background: transparent !important;\n}\n.swal2-container.swal2-top {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.swal2-container.swal2-center {\n  -webkit-box-align: center;\n          align-items: center;\n}\n.swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.swal2-container.swal2-bottom {\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.swal2-container.swal2-bottom > :first-child, .swal2-container.swal2-bottom-start > :first-child, .swal2-container.swal2-bottom-left > :first-child, .swal2-container.swal2-bottom-end > :first-child, .swal2-container.swal2-bottom-right > :first-child {\n  margin-top: auto;\n}\n.swal2-container.swal2-grow-fullscreen > .swal2-modal {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-flex: 1;\n          flex: 1;\n  align-self: stretch;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.swal2-container.swal2-grow-row > .swal2-modal {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-flex: 1;\n          flex: 1;\n  align-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.swal2-container.swal2-grow-column {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n  -webkit-box-align: center;\n          align-items: center;\n}\n.swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.swal2-container.swal2-grow-column > .swal2-modal {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-flex: 1;\n          flex: 1;\n  align-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.swal2-container.swal2-no-transition {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen) > .swal2-modal {\n  margin: auto;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-container .swal2-modal {\n    margin: 0 !important;\n  }\n}\n.swal2-popup {\n  display: none;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 32em;\n  max-width: 100%;\n  padding: 1.25em;\n  border: none;\n  border-radius: 0.3125em;\n  background: #fff;\n  font-family: inherit;\n  font-size: 1rem;\n}\n.swal2-popup:focus {\n  outline: none;\n}\n.swal2-popup.swal2-loading {\n  overflow-y: hidden;\n}\n.swal2-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.swal2-title {\n  position: relative;\n  max-width: 100%;\n  margin: 0 0 0.4em;\n  padding: 0;\n  color: #595959;\n  font-size: 1.875em;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  word-wrap: break-word;\n}\n.swal2-actions {\n  display: -webkit-box;\n  display: flex;\n  z-index: 1;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  margin: 1.25em auto 0;\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n  opacity: 0.4;\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.1)));\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled:active {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(rgba(0, 0, 0, 0.2)));\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\n}\n.swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n  box-sizing: border-box;\n  width: 2.5em;\n  height: 2.5em;\n  margin: 0.46875em;\n  padding: 0;\n  -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n          animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n  border: 0.25em solid transparent;\n  border-radius: 100%;\n  border-color: transparent;\n  background-color: transparent !important;\n  color: transparent;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n  margin-right: 30px;\n  margin-left: 30px;\n}\n.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n  content: \"\";\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  margin-left: 5px;\n  -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n          animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n  border: 3px solid #999999;\n  border-radius: 50%;\n  border-right-color: transparent;\n  box-shadow: 1px 1px 1px #fff;\n}\n.swal2-styled {\n  margin: 0.3125em;\n  padding: 0.625em 2em;\n  box-shadow: none;\n  font-weight: 500;\n}\n.swal2-styled:not([disabled]) {\n  cursor: pointer;\n}\n.swal2-styled.swal2-confirm {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #3085d6;\n  color: #fff;\n  font-size: 1.0625em;\n}\n.swal2-styled.swal2-cancel {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #aaa;\n  color: #fff;\n  font-size: 1.0625em;\n}\n.swal2-styled:focus {\n  outline: none;\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4);\n}\n.swal2-styled::-moz-focus-inner {\n  border: 0;\n}\n.swal2-footer {\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 1.25em 0 0;\n  padding: 1em 0 0;\n  border-top: 1px solid #eee;\n  color: #545454;\n  font-size: 1em;\n}\n.swal2-timer-progress-bar-container {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 0.25em;\n  overflow: hidden;\n  border-bottom-right-radius: 0.3125em;\n  border-bottom-left-radius: 0.3125em;\n}\n.swal2-timer-progress-bar {\n  width: 100%;\n  height: 0.25em;\n  background: rgba(0, 0, 0, 0.2);\n}\n.swal2-image {\n  max-width: 100%;\n  margin: 1.25em auto;\n}\n.swal2-close {\n  position: absolute;\n  z-index: 2;\n  /* 1617 */\n  top: 0;\n  right: 0;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 1.2em;\n  height: 1.2em;\n  padding: 0;\n  overflow: hidden;\n  -webkit-transition: color 0.1s ease-out;\n  transition: color 0.1s ease-out;\n  border: none;\n  border-radius: 0;\n  outline: initial;\n  background: transparent;\n  color: #cccccc;\n  font-family: serif;\n  font-size: 2.5em;\n  line-height: 1.2;\n  cursor: pointer;\n}\n.swal2-close:hover {\n  -webkit-transform: none;\n          transform: none;\n  background: transparent;\n  color: #f27474;\n}\n.swal2-close::-moz-focus-inner {\n  border: 0;\n}\n.swal2-content {\n  z-index: 1;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 0;\n  padding: 0;\n  color: #545454;\n  font-size: 1.125em;\n  font-weight: normal;\n  line-height: normal;\n  text-align: center;\n  word-wrap: break-word;\n}\n.swal2-input,\n.swal2-file,\n.swal2-textarea,\n.swal2-select,\n.swal2-radio,\n.swal2-checkbox {\n  margin: 1em auto;\n}\n.swal2-input,\n.swal2-file,\n.swal2-textarea {\n  box-sizing: border-box;\n  width: 100%;\n  -webkit-transition: border-color 0.3s, box-shadow 0.3s;\n  transition: border-color 0.3s, box-shadow 0.3s;\n  border: 1px solid #d9d9d9;\n  border-radius: 0.1875em;\n  background: inherit;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n  color: inherit;\n  font-size: 1.125em;\n}\n.swal2-input.swal2-inputerror,\n.swal2-file.swal2-inputerror,\n.swal2-textarea.swal2-inputerror {\n  border-color: #f27474 !important;\n  box-shadow: 0 0 2px #f27474 !important;\n}\n.swal2-input:focus,\n.swal2-file:focus,\n.swal2-textarea:focus {\n  border: 1px solid #b4dbed;\n  outline: none;\n  box-shadow: 0 0 3px #c4e6f5;\n}\n.swal2-input::-webkit-input-placeholder,\n.swal2-file::-webkit-input-placeholder,\n.swal2-textarea::-webkit-input-placeholder {\n  color: #cccccc;\n}\n.swal2-input::-moz-placeholder,\n.swal2-file::-moz-placeholder,\n.swal2-textarea::-moz-placeholder {\n  color: #cccccc;\n}\n.swal2-input::-ms-input-placeholder,\n.swal2-file::-ms-input-placeholder,\n.swal2-textarea::-ms-input-placeholder {\n  color: #cccccc;\n}\n.swal2-input::placeholder,\n.swal2-file::placeholder,\n.swal2-textarea::placeholder {\n  color: #cccccc;\n}\n.swal2-range {\n  margin: 1em auto;\n  background: #fff;\n}\n.swal2-range input {\n  width: 80%;\n}\n.swal2-range output {\n  width: 20%;\n  color: inherit;\n  font-weight: 600;\n  text-align: center;\n}\n.swal2-range input,\n.swal2-range output {\n  height: 2.625em;\n  padding: 0;\n  font-size: 1.125em;\n  line-height: 2.625em;\n}\n.swal2-input {\n  height: 2.625em;\n  padding: 0 0.75em;\n}\n.swal2-input[type=number] {\n  max-width: 10em;\n}\n.swal2-file {\n  background: inherit;\n  font-size: 1.125em;\n}\n.swal2-textarea {\n  height: 6.75em;\n  padding: 0.75em;\n}\n.swal2-select {\n  min-width: 50%;\n  max-width: 100%;\n  padding: 0.375em 0.625em;\n  background: inherit;\n  color: inherit;\n  font-size: 1.125em;\n}\n.swal2-radio,\n.swal2-checkbox {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #fff;\n  color: inherit;\n}\n.swal2-radio label,\n.swal2-checkbox label {\n  margin: 0 0.6em;\n  font-size: 1.125em;\n}\n.swal2-radio input,\n.swal2-checkbox input {\n  margin: 0 0.4em;\n}\n.swal2-validation-message {\n  display: none;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0.625em;\n  overflow: hidden;\n  background: #f0f0f0;\n  color: #666666;\n  font-size: 1em;\n  font-weight: 300;\n}\n.swal2-validation-message::before {\n  content: \"!\";\n  display: inline-block;\n  width: 1.5em;\n  min-width: 1.5em;\n  height: 1.5em;\n  margin: 0 0.625em;\n  border-radius: 50%;\n  background-color: #f27474;\n  color: #fff;\n  font-weight: 600;\n  line-height: 1.5em;\n  text-align: center;\n}\n.swal2-icon {\n  position: relative;\n  box-sizing: content-box;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 5em;\n  height: 5em;\n  margin: 1.25em auto 1.875em;\n  border: 0.25em solid transparent;\n  border-radius: 50%;\n  font-family: inherit;\n  line-height: 5em;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.swal2-icon .swal2-icon-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 3.75em;\n}\n.swal2-icon.swal2-error {\n  border-color: #f27474;\n  color: #f27474;\n}\n.swal2-icon.swal2-error .swal2-x-mark {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n  display: block;\n  position: absolute;\n  top: 2.3125em;\n  width: 2.9375em;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #f27474;\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n  left: 1.0625em;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n  right: 1em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.swal2-icon.swal2-error.swal2-icon-show {\n  -webkit-animation: swal2-animate-error-icon 0.5s;\n          animation: swal2-animate-error-icon 0.5s;\n}\n.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark {\n  -webkit-animation: swal2-animate-error-x-mark 0.5s;\n          animation: swal2-animate-error-x-mark 0.5s;\n}\n.swal2-icon.swal2-warning {\n  border-color: #facea8;\n  color: #f8bb86;\n}\n.swal2-icon.swal2-info {\n  border-color: #9de0f6;\n  color: #3fc3ee;\n}\n.swal2-icon.swal2-question {\n  border-color: #c9dae1;\n  color: #87adbd;\n}\n.swal2-icon.swal2-success {\n  border-color: #a5dc86;\n  color: #a5dc86;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line] {\n  position: absolute;\n  width: 3.75em;\n  height: 7.5em;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  border-radius: 50%;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left] {\n  top: -0.4375em;\n  left: -2.0635em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 3.75em 3.75em;\n          transform-origin: 3.75em 3.75em;\n  border-radius: 7.5em 0 0 7.5em;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.6875em;\n  left: 1.875em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-transform-origin: 0 3.75em;\n          transform-origin: 0 3.75em;\n  border-radius: 0 7.5em 7.5em 0;\n}\n.swal2-icon.swal2-success .swal2-success-ring {\n  position: absolute;\n  z-index: 2;\n  top: -0.25em;\n  left: -0.25em;\n  box-sizing: content-box;\n  width: 100%;\n  height: 100%;\n  border: 0.25em solid rgba(165, 220, 134, 0.3);\n  border-radius: 50%;\n}\n.swal2-icon.swal2-success .swal2-success-fix {\n  position: absolute;\n  z-index: 1;\n  top: 0.5em;\n  left: 1.625em;\n  width: 0.4375em;\n  height: 5.625em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.swal2-icon.swal2-success [class^=swal2-success-line] {\n  display: block;\n  position: absolute;\n  z-index: 2;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #a5dc86;\n}\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 2.875em;\n  left: 0.8125em;\n  width: 1.5625em;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=long] {\n  top: 2.375em;\n  right: 0.5em;\n  width: 2.9375em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip {\n  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n          animation: swal2-animate-success-line-tip 0.75s;\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long {\n  -webkit-animation: swal2-animate-success-line-long 0.75s;\n          animation: swal2-animate-success-line-long 0.75s;\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right {\n  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n          animation: swal2-rotate-success-circular-line 4.25s ease-in;\n}\n.swal2-progress-steps {\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 0 1.25em;\n  padding: 0;\n  background: inherit;\n  font-weight: 600;\n}\n.swal2-progress-steps li {\n  display: inline-block;\n  position: relative;\n}\n.swal2-progress-steps .swal2-progress-step {\n  z-index: 20;\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  background: #3085d6;\n  color: #fff;\n  line-height: 2em;\n  text-align: center;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {\n  background: #3085d6;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background: #add8e6;\n  color: #fff;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line {\n  background: #add8e6;\n}\n.swal2-progress-steps .swal2-progress-step-line {\n  z-index: 10;\n  width: 2.5em;\n  height: 0.4em;\n  margin: 0 -1px;\n  background: #3085d6;\n}\n[class^=swal2] {\n  -webkit-tap-highlight-color: transparent;\n}\n.swal2-show {\n  -webkit-animation: swal2-show 0.3s;\n          animation: swal2-show 0.3s;\n}\n.swal2-hide {\n  -webkit-animation: swal2-hide 0.15s forwards;\n          animation: swal2-hide 0.15s forwards;\n}\n.swal2-noanimation {\n  -webkit-transition: none;\n  transition: none;\n}\n.swal2-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n.swal2-rtl .swal2-close {\n  right: auto;\n  left: 0;\n}\n.swal2-rtl .swal2-timer-progress-bar {\n  right: 0;\n  left: auto;\n}\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important;\n  }\n  .swal2-range output {\n    display: none;\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important;\n  }\n  .swal2-range output {\n    display: none;\n  }\n}\n@-moz-document url-prefix() {\n  .swal2-close:focus {\n    outline: 2px solid rgba(50, 100, 150, 0.4);\n  }\n}\n@-webkit-keyframes swal2-toast-show {\n  0% {\n    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n            transform: translateY(-0.625em) rotateZ(2deg);\n  }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n  }\n  66% {\n    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n            transform: translateY(0.3125em) rotateZ(2deg);\n  }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0deg);\n            transform: translateY(0) rotateZ(0deg);\n  }\n}\n@keyframes swal2-toast-show {\n  0% {\n    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n            transform: translateY(-0.625em) rotateZ(2deg);\n  }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n  }\n  66% {\n    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n            transform: translateY(0.3125em) rotateZ(2deg);\n  }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0deg);\n            transform: translateY(0) rotateZ(0deg);\n  }\n}\n@-webkit-keyframes swal2-toast-hide {\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0;\n  }\n}\n@keyframes swal2-toast-hide {\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: 0.5625em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 0.125em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 0.625em;\n    left: -0.25em;\n    width: 1.625em;\n  }\n  84% {\n    top: 1.0625em;\n    left: 0.75em;\n    width: 0.5em;\n  }\n  100% {\n    top: 1.125em;\n    left: 0.1875em;\n    width: 0.75em;\n  }\n}\n@keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: 0.5625em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 0.125em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 0.625em;\n    left: -0.25em;\n    width: 1.625em;\n  }\n  84% {\n    top: 1.0625em;\n    left: 0.75em;\n    width: 0.5em;\n  }\n  100% {\n    top: 1.125em;\n    left: 0.1875em;\n    width: 0.75em;\n  }\n}\n@-webkit-keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0;\n  }\n  65% {\n    top: 1.25em;\n    right: 0.9375em;\n    width: 0;\n  }\n  84% {\n    top: 0.9375em;\n    right: 0;\n    width: 1.125em;\n  }\n  100% {\n    top: 0.9375em;\n    right: 0.1875em;\n    width: 1.375em;\n  }\n}\n@keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0;\n  }\n  65% {\n    top: 1.25em;\n    right: 0.9375em;\n    width: 0;\n  }\n  84% {\n    top: 0.9375em;\n    right: 0;\n    width: 1.125em;\n  }\n  100% {\n    top: 0.9375em;\n    right: 0.1875em;\n    width: 1.375em;\n  }\n}\n@-webkit-keyframes swal2-show {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n  }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes swal2-show {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n  }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes swal2-hide {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0;\n  }\n}\n@keyframes swal2-hide {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n@keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n@-webkit-keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@-webkit-keyframes swal2-rotate-success-circular-line {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg);\n  }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg);\n  }\n}\n@keyframes swal2-rotate-success-circular-line {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg);\n  }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg);\n  }\n}\n@-webkit-keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes swal2-animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@keyframes swal2-animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes swal2-rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes swal2-rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\nbody.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  overflow: hidden;\n}\nbody.swal2-height-auto {\n  height: auto !important;\n}\nbody.swal2-no-backdrop .swal2-container {\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  max-width: calc(100% - 0.625em * 2);\n  background-color: transparent !important;\n}\nbody.swal2-no-backdrop .swal2-container > .swal2-modal {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top {\n  top: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top-start, body.swal2-no-backdrop .swal2-container.swal2-top-left {\n  top: 0;\n  left: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top-end, body.swal2-no-backdrop .swal2-container.swal2-top-right {\n  top: 0;\n  right: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center-start, body.swal2-no-backdrop .swal2-container.swal2-center-left {\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center-end, body.swal2-no-backdrop .swal2-container.swal2-center-right {\n  top: 50%;\n  right: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom {\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom-start, body.swal2-no-backdrop .swal2-container.swal2-bottom-left {\n  bottom: 0;\n  left: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom-end, body.swal2-no-backdrop .swal2-container.swal2-bottom-right {\n  right: 0;\n  bottom: 0;\n}\n@media print {\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n    overflow-y: scroll !important;\n  }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden=true] {\n    display: none;\n  }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {\n    position: static !important;\n  }\n}\nbody.swal2-toast-shown .swal2-container {\n  background-color: transparent;\n}\nbody.swal2-toast-shown .swal2-container.swal2-top {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-top-end, body.swal2-toast-shown .swal2-container.swal2-top-right {\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n}\nbody.swal2-toast-shown .swal2-container.swal2-top-start, body.swal2-toast-shown .swal2-container.swal2-top-left {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n}\nbody.swal2-toast-shown .swal2-container.swal2-center-start, body.swal2-toast-shown .swal2-container.swal2-center-left {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-center {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-center-end, body.swal2-toast-shown .swal2-container.swal2-center-right {\n  top: 50%;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom-start, body.swal2-toast-shown .swal2-container.swal2-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 0;\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom-end, body.swal2-toast-shown .swal2-container.swal2-bottom-right {\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: auto;\n}\nbody.swal2-toast-column .swal2-toast {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\nbody.swal2-toast-column .swal2-toast .swal2-actions {\n  -webkit-box-flex: 1;\n          flex: 1;\n  align-self: stretch;\n  height: 2.2em;\n  margin-top: 0.3125em;\n}\nbody.swal2-toast-column .swal2-toast .swal2-loading {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nbody.swal2-toast-column .swal2-toast .swal2-input {\n  height: 2em;\n  margin: 0.3125em auto;\n  font-size: 1em;\n}\nbody.swal2-toast-column .swal2-toast .swal2-validation-message {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvQzpcXFVzZXJzXFxsZWkxMlxcSWRlYVByb2plY3RzXFxsYWItc3lzdGVtLXVzZXItYmFja2VuZFxcbGFiLXN5c3RlbS11c2VyLWZlL25vZGVfbW9kdWxlc1xcc3dlZXRhbGVydDJcXHNyY1xcc2Nzc1xcX3RvYXN0cy5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXGxlaTEyXFxJZGVhUHJvamVjdHNcXGxhYi1zeXN0ZW0tdXNlci1iYWNrZW5kXFxsYWItc3lzdGVtLXVzZXItZmUvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFx2YXJpYWJsZXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3dlZXRhbGVydDIuc2NzcyIsIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvQzpcXFVzZXJzXFxsZWkxMlxcSWRlYVByb2plY3RzXFxsYWItc3lzdGVtLXVzZXItYmFja2VuZFxcbGFiLXN5c3RlbS11c2VyLWZlL25vZGVfbW9kdWxlc1xcc3dlZXRhbGVydDJcXHNyY1xcc2Nzc1xcX21peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXGxlaTEyXFxJZGVhUHJvamVjdHNcXGxhYi1zeXN0ZW0tdXNlci1iYWNrZW5kXFxsYWItc3lzdGVtLXVzZXItZmUvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFxzY3NzXFxfY29yZS5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXGxlaTEyXFxJZGVhUHJvamVjdHNcXGxhYi1zeXN0ZW0tdXNlci1iYWNrZW5kXFxsYWItc3lzdGVtLXVzZXItZmUvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFxzY3NzXFxfcG9seWZpbGxzLnNjc3MiLCJub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL0M6XFxVc2Vyc1xcbGVpMTJcXElkZWFQcm9qZWN0c1xcbGFiLXN5c3RlbS11c2VyLWJhY2tlbmRcXGxhYi1zeXN0ZW0tdXNlci1mZS9ub2RlX21vZHVsZXNcXHN3ZWV0YWxlcnQyXFxzcmNcXHNjc3NcXF90b2FzdHMtYW5pbWF0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXGxlaTEyXFxJZGVhUHJvamVjdHNcXGxhYi1zeXN0ZW0tdXNlci1iYWNrZW5kXFxsYWItc3lzdGVtLXVzZXItZmUvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFxzY3NzXFxfYW5pbWF0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXGxlaTEyXFxJZGVhUHJvamVjdHNcXGxhYi1zeXN0ZW0tdXNlci1iYWNrZW5kXFxsYWItc3lzdGVtLXVzZXItZmUvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFxzY3NzXFxfYm9keS5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXGxlaTEyXFxJZGVhUHJvamVjdHNcXGxhYi1zeXN0ZW0tdXNlci1iYWNrZW5kXFxsYWItc3lzdGVtLXVzZXItZmUvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFxzY3NzXFxfdG9hc3RzLWJvZHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQzRLZ0I7RUQzS2hCLGdCQzRLa0I7RUQzS2xCLGtCQUFBO0VBQ0EsZ0JDUGtCO0VEUWxCLCtCQ21LcUI7QUNuS3pCO0FGRUk7RUFDRSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUVBTjtBRkdJO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLGVDaUtxQjtFRGhLckIsY0NpS3dCO0FDbEs5QjtBRklJO0VBQ0UsaUJDbUtzQjtFRGxLdEIsa0JDa0tzQjtFRGpLdEIsZ0JDbUt5QjtBQ3JLL0I7QUZLSTtFQUNFLGdCQUFBO0VBQ0EsWUNnSjJCO0VEL0kzQixhQ2dKNEI7RUQvSTVCLGdCQ2dKaUM7QUNuSnZDO0FGTUk7RUFDRSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0EsY0NnSjBCO0FDcEpoQztBRk9JO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBRUxOO0FGT007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRUxSO0FDM0NFO0VINENJO0lBT0ksaUJBQUE7RUVKUjtBQUNGO0FGUVE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBRU5WO0FGV1E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBRVRWO0FGV1U7RUFDRSxjQUFBO0FFVFo7QUZZVTtFQUNFLGVBQUE7QUVWWjtBRmdCSTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRWROO0FGaUJJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNDOEYwQjtBQzdHaEM7QUZpQk07RUFDRSw2REM0RjhCO0FDM0d0QztBRm1CSTtFQUNFLHFCQy9EVTtBQzhDaEI7QUZtQk07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGtCQUFBO0FFakJSO0FGbUJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLDBCQUFBO0FFakJWO0FGb0JRO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsMEJBQUE7QUVsQlY7QUZzQk07RUFDRSxVQUFBO0VBQ0EsV0FBQTtBRXBCUjtBRnVCTTtFQUNFLE1BQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FFckJSO0FGd0JNO0VBQ0UsZ0JBQUE7QUV0QlI7QUZ3QlE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUV0QlY7QUZ5QlE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUV2QlY7QUY2QlU7RUFDRSw2REFBQTtVQUFBLHFEQUFBO0FFM0JaO0FGOEJVO0VBQ0UsOERBQUE7VUFBQSxzREFBQTtBRTVCWjtBRmtDSTtFQUNFLHdDQ0l1QjtVREp2QixnQ0NJdUI7QUNwQzdCO0FGbUNJO0VBQ0UsaURDQ3VCO1VERHZCLHlDQ0N1QjtBQ2xDN0I7QUV2SUE7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCSFB3QjtFR1F4QixrQkFBQTtFQUNBLHlDSGEwQjtFR2IxQixpQ0hhMEI7RUdWMUIsaUNBQUE7QUZ1SUY7QUVySUU7RUFDRSw4QkhNYTtBQ2lJakI7QUVwSUU7RUFDRSxrQ0FBQTtBRnNJSjtBRW5JRTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUZxSUo7QUVsSUU7RUFFRSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtBRm1JSjtBRWhJRTtFQUVFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FGaUlKO0FFOUhFO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtBRmdJSjtBRTdIRTtFQUVFLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0FGOEhKO0FFM0hFO0VBRUUseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUY0SEo7QUV6SEU7RUFDRSxzQkFBQTtVQUFBLHFCQUFBO0FGMkhKO0FFeEhFO0VBRUUsc0JBQUE7VUFBQSxxQkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7QUZ5SEo7QUV0SEU7RUFFRSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBRnVISjtBRXBIRTtFQUtFLGdCQUFBO0FGa0hKO0FFL0dFO0VBQ0UsK0JBQUE7RUFBQSx3QkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBRmlISjtBRTlHRTtFQUNFLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUZnSEo7QUU3R0U7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUYrR0o7QUU3R0k7RUFHRSx5QkFBQTtVQUFBLG1CQUFBO0FGNkdOO0FFMUdJO0VBTUUsd0JBQUE7VUFBQSx1QkFBQTtBRnVHTjtBRXBHSTtFQU1FLHNCQUFBO1VBQUEscUJBQUE7QUZpR047QUU5Rkk7RUFDRSwrQkFBQTtFQUFBLHdCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FGZ0dOO0FFNUZFO0VBQ0UsbUNBQUE7RUFBQSwyQkFBQTtBRjhGSjtBRTVFSTtFQUNFLFlBQUE7QUY4RU47QUN0T0U7RUM2SkU7SUFDRSxvQkFBQTtFRjRFSjtBQUNGO0FFeEVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0hsS1k7RUdtS1osZUFBQTtFQUNBLGVIbktjO0VHb0tkLFlIbkthO0VHb0tiLHVCSG5Lb0I7RUdvS3BCLGdCSC9Lb0I7RUdnTHBCLG9CSDFKVztFRzJKWCxlSDFKZ0I7QUNxT2xCO0FFekVFO0VBQ0UsYUFBQTtBRjJFSjtBRXhFRTtFQUNFLGtCQUFBO0FGMEVKO0FFdEVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRnlFRjtBRXRFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCSHZKbUI7RUd3Sm5CLFVBQUE7RUFDQSxjSHhKa0I7RUd5SmxCLGtCSHhKc0I7RUd5SnRCLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FGeUVGO0FFdEVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVIdEV3QjtFR3VFeEIseUJIdEUwQjtVR3NFMUIsbUJIdEUwQjtFR3VFMUIsd0JIdEU4QjtVR3NFOUIsdUJIdEU4QjtFR3VFOUIsV0h0RW9CO0VHdUVwQixxQkh0RXFCO0FDK0l2QjtBRXJFTTtFQUNFLFlBQUE7QUZ1RVI7QUVwRU07RUFDRSxtSEFBQTtFQUFBLHlFQUFBO0FGc0VSO0FFbkVNO0VBQ0UsbUhBQUE7RUFBQSx5RUFBQTtBRnFFUjtBRTlETTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxzRUFBQTtVQUFBLDhEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBRmdFUjtBRTdETTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUYrRFI7QUV6RFE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0VBQUE7VUFBQSw4REFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FGMkRWO0FFcERBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUZ1REY7QUVyREU7RUFDRSxlQUFBO0FGdURKO0FFcERFO0VBQ0UsU0gzSTBCO0VHNEkxQixxQkgzSWlDO0VHNElqQyxtQkFBQTtFQUNBLHlCSDVJb0M7RUc2SXBDLFdIbFNrQjtFR21TbEIsbUJINUk2QjtBQ2tNakM7QUVuREU7RUFDRSxTSDdJeUI7RUc4SXpCLHFCSDdJZ0M7RUc4SWhDLG1CQUFBO0VBQ0Esc0JIOUltQztFRytJbkMsV0gzU2tCO0VHNFNsQixtQkg5STRCO0FDbU1oQztBRWxERTtFQUNFLGFIN0l5QjtFRytJekIsNkRIN0k0QjtBQ2dNaEM7QUVoREU7RUFDRSxTQUFBO0FGa0RKO0FFOUNBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCSGpOb0I7RUdrTnBCLGdCSGpOcUI7RUdrTnJCLDBCQUFBO0VBQ0EsY0hqTm1CO0VHa05uQixjSGpOdUI7QUNrUXpCO0FFOUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxjSHROZ0M7RUd1TmhDLGdCQUFBO0VBQ0Esb0NIL1RvQjtFR2dVcEIsbUNIaFVvQjtBQ2lYdEI7QUU5Q0E7RUFDRSxXQUFBO0VBQ0EsY0g5TmdDO0VHK05oQyw4Qkg5Tm9DO0FDK1F0QztBRTlDQTtFQUNFLGVBQUE7RUFDQSxtQkgzU21CO0FDNFZyQjtBRTlDQTtFQUNFLGtCSC9ONEI7RUdnTzVCLFVBQUE7RUFFQSxTQUFBO0VBQ0EsTUhsT3VCO0VHbU92QixRSG5PdUI7RUdvT3ZCLHlCSDFPK0I7VUcwTy9CLG1CSDFPK0I7RUcyTy9CLHdCSDFPbUM7VUcwT25DLHVCSDFPbUM7RUcyT25DLFlIMU95QjtFRzJPekIsYUgxTzBCO0VHMk8xQixVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0h6TzhCO0VHeU85QiwrQkh6TzhCO0VHME85QixZSHpPMEI7RUcwTzFCLGdCSHpPaUM7RUcwT2pDLGdCSHpPMkI7RUcwTzNCLHVCSHpPOEI7RUcwTzlCLGNIek95QjtFRzBPekIsa0JIek8rQjtFRzBPL0IsZ0JIek82QjtFRzBPN0IsZ0JIcFArQjtFR3FQL0IsZUFBQTtBRmdERjtBRTlDRTtFQUNFLHVCSDNPaUM7VUcyT2pDLGVIM09pQztFRzRPakMsdUJIMU9rQztFRzJPbEMsY0hoVlU7QUNnWWQ7QUU3Q0U7RUFDRSxTQUFBO0FGK0NKO0FFM0NBO0VBQ0UsVUFBQTtFQUNBLHdCSDNVOEI7VUcyVTlCLHVCSDNVOEI7RUc0VTlCLFNIM1VxQjtFRzRVckIsVUgzVXFCO0VHNFVyQixjSDNVb0I7RUc0VXBCLGtCSDNVd0I7RUc0VXhCLG1CSDNVMEI7RUc0VTFCLG1CSDNVMEI7RUc0VTFCLGtCSDNVeUI7RUc0VXpCLHFCSDNVd0I7QUN5WDFCO0FFM0NBOzs7Ozs7RUFNRSxnQkhqVm1CO0FDK1hyQjtBRTNDQTs7O0VBR0Usc0JBQUE7RUFDQSxXSHZWa0I7RUd3VmxCLHNESDVVdUI7RUc0VXZCLDhDSDVVdUI7RUc2VXZCLHlCSHRWbUI7RUd1Vm5CLHVCSHRWMEI7RUd1VjFCLG1CSGpWdUI7RUdrVnZCLCtDSHZWdUI7RUd3VnZCLGNIbFZrQjtFR21WbEIsa0JIclZzQjtBQ21ZeEI7QUU1Q0U7OztFQUNFLGdDQUFBO0VBQ0Esc0NBQUE7QUZnREo7QUU3Q0U7OztFQUNFLHlCSGhXdUI7RUdpV3ZCLGFIaFd3QjtFR2lXeEIsMkJIaFcyQjtBQ2laL0I7QUU5Q0U7OztFQUNFLGNBQUE7QUZrREo7QUVuREU7OztFQUNFLGNBQUE7QUZrREo7QUVuREU7OztFQUNFLGNBQUE7QUZrREo7QUVuREU7OztFQUNFLGNBQUE7QUZrREo7QUU5Q0E7RUFDRSxnQkhsWG1CO0VHbVhuQixnQkhqYm9CO0FDa2V0QjtBRS9DRTtFQUNFLFVBQUE7QUZpREo7QUU5Q0U7RUFDRSxVQUFBO0VBQ0EsY0gvV2dCO0VHZ1hoQixnQkFBQTtFQUNBLGtCQUFBO0FGZ0RKO0FFN0NFOztFQUVFLGVIaFlpQjtFR2lZakIsVUFBQTtFQUNBLGtCSDFYb0I7RUcyWHBCLG9CSG5ZaUI7QUNrYnJCO0FFM0NBO0VBQ0UsZUh4WW1CO0VHeVluQixpQkh4WW9CO0FDc2J0QjtBRTVDRTtFQUNFLGVBQUE7QUY4Q0o7QUUxQ0E7RUFDRSxtQkh4WXVCO0VHeVl2QixrQkgxWXNCO0FDdWJ4QjtBRTFDQTtFQUNFLGNIeFlzQjtFR3lZdEIsZUh4WXVCO0FDcWJ6QjtBRTFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkhyWnVCO0VHc1p2QixjSHJaa0I7RUdzWmxCLGtCSHhac0I7QUNxY3hCO0FFMUNBOztFQUVFLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JIdmVvQjtFR3dlcEIsY0g5WmtCO0FDMmNwQjtBRTNDRTs7RUFDRSxlQUFBO0VBQ0Esa0JIcGFvQjtBQ2tkeEI7QUUzQ0U7O0VBQ0UsZUFBQTtBRjhDSjtBRTFDQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JIcmF5QztVR3FhekMsdUJIcmF5QztFR3NhekMsZ0JIcmFpQztFR3NhakMsZ0JBQUE7RUFDQSxtQkh0YW9DO0VHdWFwQyxjSHRhK0I7RUd1YS9CLGNIdGFtQztFR3VhbkMsZ0JIdGFxQztBQ21kdkM7QUUzQ0U7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLHlCSHBlVTtFR3FlVixXSHpnQmtCO0VHMGdCbEIsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FGNENKO0FFeENBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxVSHRmZ0I7RUd1ZmhCLFdIdmZnQjtFR3dmaEIsMkJIdGZrQjtFR3dmbEIsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9CSGxmdUI7RUdtZnZCLGdCSDdmZ0I7RUc4ZmhCLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBRjBDRjtBRXhDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtBRjBDSjtBRXZDRTtFQUNFLHFCSGxnQlU7RUdtZ0JWLGNIbmdCVTtBQzRpQmQ7QUV2Q0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtBRnlDTjtBRXRDSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCSGpoQlE7QUN5akJkO0FFdENNO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUZ3Q1I7QUVyQ007RUFDRSxVQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBRnVDUjtBRWxDSTtFQUVJLGdEQUFBO1VBQUEsd0NBQUE7QUZtQ1I7QUVqQ1E7RUFDRSxrREFBQTtVQUFBLDBDQUFBO0FGbUNWO0FFN0JFO0VBQ0UscUJBQUE7RUFDQSxjSDNpQlk7QUMwa0JoQjtBRTVCRTtFQUNFLHFCQUFBO0VBQ0EsY0gvaUJTO0FDNmtCYjtBRTNCRTtFQUNFLHFCQUFBO0VBQ0EsY0huakJhO0FDZ2xCakI7QUUxQkU7RUFDRSxxQkg1akJZO0VHNmpCWixjSDdqQlk7QUN5bEJoQjtBRTFCSTtFQUVFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0Esa0JBQUE7QUYyQk47QUV6Qk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsOEJBQUE7QUYyQlI7QUV4Qk07RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsOEJBQUE7QUYwQlI7QUV0Qkk7RUFFRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FGdUJOO0FFcEJJO0VBRUUsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUZxQk47QUVsQkk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCSHRuQlU7QUMwb0JoQjtBRWxCTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUZvQlI7QUVqQk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FGbUJSO0FFWlE7RUFDRSx1REFBQTtVQUFBLCtDQUFBO0FGY1Y7QUVYUTtFQUNFLHdEQUFBO1VBQUEsZ0RBQUE7QUZhVjtBRVZRO0VBQ0UsbUVBQUE7VUFBQSwyREFBQTtBRllWO0FFTEE7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JIaG1CNEI7RUdpbUI1QixVSGhtQjZCO0VHaW1CN0IsbUJIbm1CZ0M7RUdvbUJoQyxnQkhqbUJpQztBQ3ltQm5DO0FFTkU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FGUUo7QUVMRTtFQUNFLFdBQUE7RUFDQSxVSHhtQndCO0VHeW1CeEIsV0h4bUJ5QjtFR3ltQnpCLGtCSHhtQmdDO0VHeW1CaEMsbUJIdG1CMkI7RUd1bUIzQixXSDlzQmtCO0VHK3NCbEIsZ0JINW1CeUI7RUc2bUJ6QixrQkFBQTtBRk9KO0FFTEk7RUFDRSxtQkg1bUJ5QjtBQ21uQi9CO0FFTE07RUFDRSxtQkhqbkJ5QjtFR2tuQnpCLFdIdnRCYztBQzh0QnRCO0FFSk07RUFDRSxtQkh0bkJ5QjtBQzRuQmpDO0FFREU7RUFDRSxXQUFBO0VBQ0EsWUhqb0I0QjtFR2tvQjVCLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJIOW5CMkI7QUNpb0IvQjtBRUVBO0VBQ0Usd0NBQUE7QUZDRjtBRUVBO0VBQ0Usa0NIaHVCcUI7VUdndUJyQiwwQkhodUJxQjtBQ2l1QnZCO0FFRUE7RUFDRSw0Q0hudUJxQjtVR211QnJCLG9DSG51QnFCO0FDb3VCdkI7QUVFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7QUZDRjtBRUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRkFGO0FFS0U7RUFDRSxXQUFBO0VBQ0EsT0gzb0JxQjtBQ3lvQnpCO0FFS0U7RUFDRSxRQUFBO0VBQ0EsVUFBQTtBRkhKO0FHdHdCQTtFQUVJO0lBQ0Usc0JBQUE7RUh3d0JKO0VHcndCRTtJQUNFLGFBQUE7RUh1d0JKO0FBQ0Y7QUdsd0JBO0VBR0k7SUFDRSxzQkFBQTtFSGt3Qko7RUcvdkJFO0lBQ0UsYUFBQTtFSGl3Qko7QUFDRjtBRzV2QkE7RUFFSTtJQUNFLDBDQUFBO0VINnZCSjtBQUNGO0FJOXhCQTtFQUNFO0lBQ0UscURBQUE7WUFBQSw2Q0FBQTtFSmd5QkY7RUk3eEJBO0lBQ0UsK0NBQUE7WUFBQSx1Q0FBQTtFSit4QkY7RUk1eEJBO0lBQ0UscURBQUE7WUFBQSw2Q0FBQTtFSjh4QkY7RUkzeEJBO0lBQ0UsOENBQUE7WUFBQSxzQ0FBQTtFSjZ4QkY7QUFDRjtBSTV5QkE7RUFDRTtJQUNFLHFEQUFBO1lBQUEsNkNBQUE7RUpneUJGO0VJN3hCQTtJQUNFLCtDQUFBO1lBQUEsdUNBQUE7RUoreEJGO0VJNXhCQTtJQUNFLHFEQUFBO1lBQUEsNkNBQUE7RUo4eEJGO0VJM3hCQTtJQUNFLDhDQUFBO1lBQUEsc0NBQUE7RUo2eEJGO0FBQ0Y7QUkxeEJBO0VBQ0U7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0lBQ0EsVUFBQTtFSjR4QkY7QUFDRjtBSWh5QkE7RUFDRTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxVQUFBO0VKNHhCRjtBQUNGO0FJenhCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VKMnhCRjtFSXh4QkE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFFBQUE7RUoweEJGO0VJdnhCQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFSnl4QkY7RUl0eEJBO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VKd3hCRjtFSXJ4QkE7SUFDRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7RUp1eEJGO0FBQ0Y7QUlwekJBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLFFBQUE7RUoyeEJGO0VJeHhCQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsUUFBQTtFSjB4QkY7RUl2eEJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0VKeXhCRjtFSXR4QkE7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUp3eEJGO0VJcnhCQTtJQUNFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtFSnV4QkY7QUFDRjtBSXB4QkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsUUFBQTtFSnN4QkY7RUlueEJBO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0VKcXhCRjtFSWx4QkE7SUFDRSxhQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7RUpveEJGO0VJanhCQTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFSm14QkY7QUFDRjtBSTF5QkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsUUFBQTtFSnN4QkY7RUlueEJBO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0VKcXhCRjtFSWx4QkE7SUFDRSxhQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7RUpveEJGO0VJanhCQTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFSm14QkY7QUFDRjtBS2oyQkE7RUFDRTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7RUxtMkJGO0VLaDJCQTtJQUNFLDhCQUFBO1lBQUEsc0JBQUE7RUxrMkJGO0VLLzFCQTtJQUNFLDhCQUFBO1lBQUEsc0JBQUE7RUxpMkJGO0VLOTFCQTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7RUxnMkJGO0FBQ0Y7QUsvMkJBO0VBQ0U7SUFDRSw2QkFBQTtZQUFBLHFCQUFBO0VMbTJCRjtFS2gyQkE7SUFDRSw4QkFBQTtZQUFBLHNCQUFBO0VMazJCRjtFSy8xQkE7SUFDRSw4QkFBQTtZQUFBLHNCQUFBO0VMaTJCRjtFSzkxQkE7SUFDRSwyQkFBQTtZQUFBLG1CQUFBO0VMZzJCRjtBQUNGO0FLNTFCQTtFQUNFO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtJQUNBLFVBQUE7RUw4MUJGO0VLMzFCQTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7SUFDQSxVQUFBO0VMNjFCRjtBQUNGO0FLdDJCQTtFQUNFO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtJQUNBLFVBQUE7RUw4MUJGO0VLMzFCQTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7SUFDQSxVQUFBO0VMNjFCRjtBQUNGO0FLejFCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VMMjFCRjtFS3gxQkE7SUFDRSxhQUFBO0lBQ0EsYUFBQTtJQUNBLFFBQUE7RUwwMUJGO0VLdjFCQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFTHkxQkY7RUt0MUJBO0lBQ0UsUUFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VMdzFCRjtFS3IxQkE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUx1MUJGO0FBQ0Y7QUtwM0JBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLFFBQUE7RUwyMUJGO0VLeDFCQTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBQ0EsUUFBQTtFTDAxQkY7RUt2MUJBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VMeTFCRjtFS3QxQkE7SUFDRSxRQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUx3MUJGO0VLcjFCQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFTHUxQkY7QUFDRjtBS3AxQkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsUUFBQTtFTHMxQkY7RUtuMUJBO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VMcTFCRjtFS2wxQkE7SUFDRSxhQUFBO0lBQ0EsUUFBQTtJQUNBLGVBQUE7RUxvMUJGO0VLajFCQTtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFTG0xQkY7QUFDRjtBSzEyQkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsUUFBQTtFTHMxQkY7RUtuMUJBO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VMcTFCRjtFS2wxQkE7SUFDRSxhQUFBO0lBQ0EsUUFBQTtJQUNBLGVBQUE7RUxvMUJGO0VLajFCQTtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFTG0xQkY7QUFDRjtBS2gxQkE7RUFDRTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUxrMUJGO0VLLzBCQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUxpMUJGO0VLOTBCQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUxnMUJGO0VLNzBCQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUwrMEJGO0FBQ0Y7QUs5MUJBO0VBQ0U7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VMazFCRjtFSy8wQkE7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VMaTFCRjtFSzkwQkE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VMZzFCRjtFSzcwQkE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VMKzBCRjtBQUNGO0FLMzBCQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSw2QkFBQTtZQUFBLHFCQUFBO0lBQ0EsVUFBQTtFTDYwQkY7RUsxMEJBO0lBQ0UsbUJBQUE7SUFDQSw2QkFBQTtZQUFBLHFCQUFBO0lBQ0EsVUFBQTtFTDQwQkY7RUt6MEJBO0lBQ0Usb0JBQUE7SUFDQSw4QkFBQTtZQUFBLHNCQUFBO0VMMjBCRjtFS3gwQkE7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7WUFBQSxtQkFBQTtJQUNBLFVBQUE7RUwwMEJGO0FBQ0Y7QUtoMkJBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLDZCQUFBO1lBQUEscUJBQUE7SUFDQSxVQUFBO0VMNjBCRjtFSzEwQkE7SUFDRSxtQkFBQTtJQUNBLDZCQUFBO1lBQUEscUJBQUE7SUFDQSxVQUFBO0VMNDBCRjtFS3owQkE7SUFDRSxvQkFBQTtJQUNBLDhCQUFBO1lBQUEsc0JBQUE7RUwyMEJGO0VLeDBCQTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtZQUFBLG1CQUFBO0lBQ0EsVUFBQTtFTDAwQkY7QUFDRjtBS3YwQkE7RUFDRTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VMeTBCRjtFS3QwQkE7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0lBQ0EsVUFBQTtFTHcwQkY7QUFDRjtBS2oxQkE7RUFDRTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VMeTBCRjtFS3QwQkE7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0lBQ0EsVUFBQTtFTHcwQkY7QUFDRjtBS3IwQkE7RUFDRTtJQUNFLCtCQUFBO1lBQUEsdUJBQUE7RUx1MEJGO0VLcDBCQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUxzMEJGO0FBQ0Y7QUs3MEJBO0VBQ0U7SUFDRSwrQkFBQTtZQUFBLHVCQUFBO0VMdTBCRjtFS3AwQkE7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VMczBCRjtBQUNGO0FDaDlCRTtFS2JJLGdCQUFBO0FOZytCTjtBTTU5QkU7RUFDRSx1QkFBQTtBTjg5Qko7QU0xOUJJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1DQUFBO0VBQ0Esd0NBQUE7QU40OUJOO0FNMTlCTTtFQUNFLHVDQUFBO0FONDlCUjtBTXo5Qk07RUFDRSxNQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QU4yOUJSO0FNeDlCTTtFQUVFLE1BQUE7RUFDQSxPQUFBO0FOeTlCUjtBTXQ5Qk07RUFFRSxNQUFBO0VBQ0EsUUFBQTtBTnU5QlI7QU1wOUJNO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FOczlCUjtBTW45Qk07RUFFRSxRQUFBO0VBQ0EsT0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QU5vOUJSO0FNajlCTTtFQUVFLFFBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBTms5QlI7QU0vOEJNO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FOaTlCUjtBTTk4Qk07RUFFRSxTQUFBO0VBQ0EsT0FBQTtBTis4QlI7QU01OEJNO0VBRUUsUUFBQTtFQUNBLFNBQUE7QU42OEJSO0FNeDhCRTtFTGxFQTtJS3FFTSw2QkFBQTtFTnk4Qk47RU12OEJNO0lBQ0UsYUFBQTtFTnk4QlI7RU10OEJNO0lBQ0UsMkJBQUE7RU53OEJSO0FBQ0Y7QU9yaUNJO0VBQ0UsNkJBQUE7QVB1aUNOO0FPcmlDTTtFQUNFLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FQdWlDUjtBT3BpQ007RUFFRSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FQcWlDUjtBT2xpQ007RUFFRSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FQbWlDUjtBT2hpQ007RUFFRSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBUGlpQ1I7QU85aENNO0VBQ0UsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QVBnaUNSO0FPN2hDTTtFQUVFLFFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FQOGhDUjtBTzNoQ007RUFFRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FQNGhDUjtBT3poQ007RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBUDJoQ1I7QU94aENNO0VBRUUsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBUHloQ1I7QU9uaENJO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMEJBQUE7VUFBQSxvQkFBQTtBUHFoQ047QU9uaENNO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QVBxaENSO0FPbGhDTTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QVBvaENSO0FPamhDTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNSaUZzQjtBQ2s4QjlCO0FPaGhDTTtFQUNFLGNSOEUyQjtBQ284Qm5DIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3dlZXRhbGVydDIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2FsMi1wb3B1cCB7XG4gICYuc3dhbDItdG9hc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogJHN3YWwyLXRvYXN0LXdpZHRoO1xuICAgIHBhZGRpbmc6ICRzd2FsMi10b2FzdC1wYWRkaW5nO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItdG9hc3QtYmFja2dyb3VuZDtcbiAgICBib3gtc2hhZG93OiAkc3dhbDItdG9hc3QtYm94LXNoYWRvdztcblxuICAgIC5zd2FsMi1oZWFkZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG5cbiAgICAuc3dhbDItdGl0bGUge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luOiAkc3dhbDItdG9hc3QtdGl0bGUtbWFyZ2luO1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtdGl0bGUtZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1mb290ZXIge1xuICAgICAgbWFyZ2luOiAkc3dhbDItdG9hc3QtZm9vdGVyLW1hcmdpbjtcbiAgICAgIHBhZGRpbmc6ICRzd2FsMi10b2FzdC1mb290ZXItbWFyZ2luO1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtZm9vdGVyLWZvbnQtc2l6ZTtcbiAgICB9XG5cbiAgICAuc3dhbDItY2xvc2Uge1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIHdpZHRoOiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLXdpZHRoO1xuICAgICAgaGVpZ2h0OiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWhlaWdodDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0O1xuICAgIH1cblxuICAgIC5zd2FsMi1jb250ZW50IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLXRvYXN0LWNvbnRlbnQtZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1pY29uIHtcbiAgICAgIHdpZHRoOiAyZW07XG4gICAgICBtaW4td2lkdGg6IDJlbTtcbiAgICAgIGhlaWdodDogMmVtO1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAuc3dhbDItaWNvbi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgQGluY2x1ZGUgaWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjI1ZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1zdWNjZXNzIHtcbiAgICAgICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWVycm9yIHtcbiAgICAgICAgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XG4gICAgICAgICAgdG9wOiAuODc1ZW07XG4gICAgICAgICAgd2lkdGg6IDEuMzc1ZW07XG5cbiAgICAgICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgICAgIGxlZnQ6IC4zMTI1ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJltjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICAgICAgcmlnaHQ6IC4zMTI1ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN3YWwyLWFjdGlvbnMge1xuICAgICAgZmxleC1iYXNpczogYXV0byAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW46IDAgLjMxMjVlbTtcbiAgICB9XG5cbiAgICAuc3dhbDItc3R5bGVkIHtcbiAgICAgIG1hcmdpbjogMCAuMzEyNWVtO1xuICAgICAgcGFkZGluZzogLjMxMjVlbSAuNjI1ZW07XG4gICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC1idXR0b25zLWZvbnQtc2l6ZTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6ICRzd2FsMi10b2FzdC1idXR0b24tZm9jdXMtYm94LXNoYWRvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3dhbDItc3VjY2VzcyB7XG4gICAgICBib3JkZXItY29sb3I6ICRzd2FsMi1zdWNjZXNzO1xuXG4gICAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7IC8vIEVtdWxhdGUgbW92aW5nIGNpcmN1bGFyIGxpbmVcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMS42ZW07XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgICB0b3A6IC0uOGVtO1xuICAgICAgICAgIGxlZnQ6IC0uNWVtO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0ZW0gMCAwIDRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbY2xhc3MkPSdyaWdodCddIHtcbiAgICAgICAgICB0b3A6IC0uMjVlbTtcbiAgICAgICAgICBsZWZ0OiAuOTM3NWVtO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMS41ZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0ZW0gNGVtIDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItc3VjY2Vzcy1maXgge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IC40Mzc1ZW07XG4gICAgICAgIHdpZHRoOiAuNDM3NWVtO1xuICAgICAgICBoZWlnaHQ6IDIuNjg3NWVtO1xuICAgICAgfVxuXG4gICAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XG4gICAgICAgIGhlaWdodDogLjMxMjVlbTtcblxuICAgICAgICAmW2NsYXNzJD0ndGlwJ10ge1xuICAgICAgICAgIHRvcDogMS4xMjVlbTtcbiAgICAgICAgICBsZWZ0OiAuMTg3NWVtO1xuICAgICAgICAgIHdpZHRoOiAuNzVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbY2xhc3MkPSdsb25nJ10ge1xuICAgICAgICAgIHRvcDogLjkzNzVlbTtcbiAgICAgICAgICByaWdodDogLjE4NzVlbTtcbiAgICAgICAgICB3aWR0aDogMS4zNzVlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWljb24tc2hvdyB7XG4gICAgICAgIEBpZiAkc3dhbDItaWNvbi1hbmltYXRpb25zIHtcbiAgICAgICAgICAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gICAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gICAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnN3YWwyLXNob3cge1xuICAgICAgYW5pbWF0aW9uOiAkc3dhbDItdG9hc3Qtc2hvdy1hbmltYXRpb247XG4gICAgfVxuXG4gICAgJi5zd2FsMi1oaWRlIHtcbiAgICAgIGFuaW1hdGlvbjogJHN3YWwyLXRvYXN0LWhpZGUtYW5pbWF0aW9uO1xuICAgIH1cbiAgfVxufVxuIiwiJHN3YWwyLXdoaXRlOiAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kc3dhbDItYmxhY2s6ICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRzd2FsMi1vdXRsaW5lLWNvbG9yOiByZ2JhKDUwLCAxMDAsIDE1MCwgLjQpICFkZWZhdWx0O1xuXG4vLyBDT05UQUlORVJcbiRzd2FsMi1jb250YWluZXItcGFkZGluZzogLjYyNWVtICFkZWZhdWx0O1xuXG4vLyBCT1ggTU9ERUxcbiRzd2FsMi13aWR0aDogMzJlbSAhZGVmYXVsdDtcbiRzd2FsMi1wYWRkaW5nOiAxLjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItYm9yZGVyOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWJvcmRlci1yYWRpdXM6IC4zMTI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItYm94LXNoYWRvdzogI2Q5ZDlkOSAhZGVmYXVsdDtcblxuLy8gQU5JTUFUSU9OU1xuJHN3YWwyLXNob3ctYW5pbWF0aW9uOiBzd2FsMi1zaG93IC4zcyAhZGVmYXVsdDtcbiRzd2FsMi1oaWRlLWFuaW1hdGlvbjogc3dhbDItaGlkZSAuMTVzIGZvcndhcmRzICFkZWZhdWx0O1xuXG4vLyBCQUNLR1JPVU5EXG4kc3dhbDItYmFja2dyb3VuZDogJHN3YWwyLXdoaXRlICFkZWZhdWx0O1xuXG4vLyBUWVBPR1JBUEhZXG4kc3dhbDItZm9udDogaW5oZXJpdCAhZGVmYXVsdDtcbiRzd2FsMi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vIEJBQ0tEUk9QXG4kc3dhbDItYmFja2Ryb3A6IHJnYmEoJHN3YWwyLWJsYWNrLCAuNCkgIWRlZmF1bHQ7XG4kc3dhbDItYmFja2Ryb3AtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXMgIWRlZmF1bHQ7XG5cbi8vIElDT05TXG4kc3dhbDItaWNvbi1zaXplOiA1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItaWNvbi1hbmltYXRpb25zOiB0cnVlICFkZWZhdWx0O1xuJHN3YWwyLWljb24tbWFyZ2luOiAxLjI1ZW0gYXV0byAxLjg3NWVtICFkZWZhdWx0O1xuJHN3YWwyLWljb24tem9vbTogbnVsbCAhZGVmYXVsdDtcbiRzd2FsMi1zdWNjZXNzOiAjYTVkYzg2ICFkZWZhdWx0O1xuJHN3YWwyLXN1Y2Nlc3MtYm9yZGVyOiByZ2JhKCRzd2FsMi1zdWNjZXNzLCAuMykgIWRlZmF1bHQ7XG4kc3dhbDItZXJyb3I6ICNmMjc0NzQgIWRlZmF1bHQ7XG4kc3dhbDItd2FybmluZzogI2Y4YmI4NiAhZGVmYXVsdDtcbiRzd2FsMi1pbmZvOiAjM2ZjM2VlICFkZWZhdWx0O1xuJHN3YWwyLXF1ZXN0aW9uOiAjODdhZGJkICFkZWZhdWx0O1xuJHN3YWwyLWljb24tZm9udC1mYW1pbHk6IGluaGVyaXQgIWRlZmF1bHQ7XG5cbi8vIElNQUdFXG4kc3dhbDItaW1hZ2UtbWFyZ2luOiAxLjI1ZW0gYXV0byAhZGVmYXVsdDtcblxuLy8gVElUTEVcbiRzd2FsMi10aXRsZS1tYXJnaW46IDAgMCAuNGVtICFkZWZhdWx0O1xuJHN3YWwyLXRpdGxlLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgMzUpICFkZWZhdWx0O1xuJHN3YWwyLXRpdGxlLWZvbnQtc2l6ZTogMS44NzVlbSAhZGVmYXVsdDtcblxuLy8gQ09OVEVOVFxuJHN3YWwyLWNvbnRlbnQtanVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1tYXJnaW46IDAgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1wYWRpbmc6IDAgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1jb2xvcjogbGlnaHRlbigkc3dhbDItYmxhY2ssIDMzKSAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LWZvbnQtc2l6ZTogMS4xMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LWZvbnQtd2VpZ2h0OiBub3JtYWwgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1saW5lLWhlaWdodDogbm9ybWFsICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtdGV4dC1hbGlnbjogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtd29yZC13cmFwOiBicmVhay13b3JkICFkZWZhdWx0O1xuXG4vLyBJTlBVVFxuJHN3YWwyLWlucHV0LW1hcmdpbjogMWVtIGF1dG8gIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtd2lkdGg6IDEwMCUgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtaGVpZ2h0OiAyLjYyNWVtICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LXBhZGRpbmc6IDAgLjc1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbigkc3dhbDItYmxhY2ssIDg1KSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1ib3JkZXItcmFkaXVzOiAuMTg3NWVtICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKCRzd2FsMi1ibGFjaywgLjA2KSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1mb2N1cy1ib3JkZXI6IDFweCBzb2xpZCAjYjRkYmVkICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWZvY3VzLW91dGxpbmU6IG5vbmUgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogMCAwIDNweCAjYzRlNmY1ICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTogMS4xMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1iYWNrZ3JvdW5kOiBpbmhlcml0ICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3MsIGJveC1zaGFkb3cgLjNzICFkZWZhdWx0O1xuXG4vLyBURVhUQVJFQSBTUEVDSUZJQyBWQVJJQUJMRVNcbiRzd2FsMi10ZXh0YXJlYS1oZWlnaHQ6IDYuNzVlbSAhZGVmYXVsdDtcbiRzd2FsMi10ZXh0YXJlYS1wYWRkaW5nOiAuNzVlbSAhZGVmYXVsdDtcblxuLy8gVkFMSURBVElPTiBNRVNTQUdFXG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWp1c3RpZnktY29udGVudDogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1wYWRkaW5nOiAuNjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWJhY2tncm91bmQ6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA5NCkgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgNDApICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtZm9udC13ZWlnaHQ6IDMwMCAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi1iYWNrZ3JvdW5kOiAkc3dhbDItZXJyb3IgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWljb24tY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi16b29tOiBudWxsICFkZWZhdWx0O1xuXG4vLyBQUk9HUkVTUyBTVEVQU1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWJhY2tncm91bmQ6IGluaGVyaXQgIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtbWFyZ2luOiAwIDAgMS4yNWVtICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLXBhZGRpbmc6IDAgIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtZm9udC13ZWlnaHQ6IDYwMCAhZGVmYXVsdDtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwcy1kaXN0YW5jZTogMi41ZW0gIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC13aWR0aDogMmVtO1xuJHN3YWwyLXByb2dyZXNzLXN0ZXAtaGVpZ2h0OiAyZW07XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC1ib3JkZXItcmFkaXVzOiAyZW07XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC1iYWNrZ3JvdW5kOiAjYWRkOGU2ICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXAtY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi1hY3RpdmUtc3RlcC1iYWNrZ3JvdW5kOiAjMzA4NWQ2ICFkZWZhdWx0O1xuJHN3YWwyLWFjdGl2ZS1zdGVwLWNvbG9yOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIEZPT1RFUlxuJHN3YWwyLWZvb3Rlci1tYXJnaW46IDEuMjVlbSAwIDAgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLXBhZGRpbmc6IDFlbSAwIDAgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLWJvcmRlci1jb2xvcjogI2VlZSAhZGVmYXVsdDtcbiRzd2FsMi1mb290ZXItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCAzMykgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuXG4vLyBUSU1FUiBQT0dSRVNTIEJBUlxuJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1oZWlnaHQ6IC4yNWVtO1xuJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiByZ2JhKCRzd2FsMi1ibGFjaywgLjIpICFkZWZhdWx0O1xuXG4vLyBDTE9TRSBCVVRUT05cbiRzd2FsMi1jbG9zZS1idXR0b24tYWxpZ24taXRlbXM6IGNlbnRlciAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tanVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLXdpZHRoOiAxLjJlbSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24taGVpZ2h0OiAxLjJlbSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tbGluZS1oZWlnaHQ6IDEuMiAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tcG9zaXRpb246IGFic29sdXRlICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1nYXA6IDAgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLXRyYW5zaXRpb246IGNvbG9yIC4xcyBlYXNlLW91dCAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tYm9yZGVyOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAwICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1vdXRsaW5lOiBpbml0aWFsICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA4MCkgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWZvbnQtZmFtaWx5OiBzZXJpZiAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1zaXplOiAyLjVlbSAhZGVmYXVsdDtcblxuLy8gQ0xPU0UgQlVUVE9OOkhPVkVSXG4kc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLXRyYW5zZm9ybTogbm9uZSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItY29sb3I6ICRzd2FsMi1lcnJvciAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIEFDVElPTlNcbiRzd2FsMi1hY3Rpb25zLWZsZXgtd3JhcDogd3JhcCAhZGVmYXVsdDtcbiRzd2FsMi1hY3Rpb25zLWFsaWduLWl0ZW1zOiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItYWN0aW9ucy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhZGVmYXVsdDtcbiRzd2FsMi1hY3Rpb25zLXdpZHRoOiAxMDAlICFkZWZhdWx0O1xuJHN3YWwyLWFjdGlvbnMtbWFyZ2luOiAxLjI1ZW0gYXV0byAwICFkZWZhdWx0O1xuXG4vLyBDT05GSVJNIEJVVFRPTlxuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJvcmRlcjogMCAhZGVmYXVsdDtcbiRzd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAuMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1jb25maXJtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzA4NWQ2ICFkZWZhdWx0O1xuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWNvbG9yOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG4kc3dhbDItY29uZmlybS1idXR0b24tZm9udC1zaXplOiAxLjA2MjVlbSAhZGVmYXVsdDtcblxuLy8gQ0FOQ0VMIEJVVFRPTlxuJHN3YWwyLWNhbmNlbC1idXR0b24tYm9yZGVyOiAwICFkZWZhdWx0O1xuJHN3YWwyLWNhbmNlbC1idXR0b24tYm9yZGVyLXJhZGl1czogLjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjYWFhICFkZWZhdWx0O1xuJHN3YWwyLWNhbmNlbC1idXR0b24tY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi1jYW5jZWwtYnV0dG9uLWZvbnQtc2l6ZTogMS4wNjI1ZW0gIWRlZmF1bHQ7XG5cbi8vIENPTU1PTiBWQVJJQUJMRVMgRk9SIENPTkZJUk0gQU5EIENBTkNFTCBCVVRUT05TXG4kc3dhbDItYnV0dG9uLWRhcmtlbi1ob3ZlcjogcmdiYSgkc3dhbDItYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZGFya2VuLWFjdGl2ZTogcmdiYSgkc3dhbDItYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZm9jdXMtb3V0bGluZTogbm9uZSAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogbnVsbCAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgMXB4ICRzd2FsMi1iYWNrZ3JvdW5kLCAwIDAgMCAzcHggJHN3YWwyLW91dGxpbmUtY29sb3IgIWRlZmF1bHQ7XG5cbi8vIFRPQVNUU1xuJHN3YWwyLXRvYXN0LXNob3ctYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1zaG93IC41cyAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1oaWRlLWFuaW1hdGlvbjogc3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHMgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtYm9yZGVyOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWJveC1zaGFkb3c6IDAgMCAuNjI1ZW0gI2Q5ZDlkOSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1iYWNrZ3JvdW5kOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLXdpZHRoOiAuOGVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWNsb3NlLWJ1dHRvbi1oZWlnaHQ6IC44ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0OiAuOCAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC13aWR0aDogYXV0byAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1wYWRkaW5nOiAuNjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtdGl0bGUtbWFyZ2luOiAwIC42ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtdGl0bGUtZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY29udGVudC1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1pbnB1dC1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC12YWxpZGF0aW9uLWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWJ1dHRvbnMtZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtYnV0dG9uLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwIDFweCAkc3dhbDItYmFja2dyb3VuZCwgMCAwIDAgM3B4ICRzd2FsMi1vdXRsaW5lLWNvbG9yICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWZvb3Rlci1tYXJnaW46IC41ZW0gMCAwICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWZvb3Rlci1wYWRkaW5nOiAuNWVtIDAgMCAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1mb290ZXItZm9udC1zaXplOiAuOGVtICFkZWZhdWx0O1xuIiwiLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAuNjI1ZW07XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAuNjI1ZW0gI2Q5ZDlkOTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaGVhZGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdGl0bGUge1xuICBmbGV4LWdyb3c6IDE7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwIDAuNmVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItZm9vdGVyIHtcbiAgbWFyZ2luOiAwLjVlbSAwIDA7XG4gIHBhZGRpbmc6IDAuNWVtIDAgMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY2xvc2Uge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICB3aWR0aDogMC44ZW07XG4gIGhlaWdodDogMC44ZW07XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNvbnRlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIHtcbiAgd2lkdGg6IDJlbTtcbiAgbWluLXdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBtYXJnaW46IDA7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24gLnN3YWwyLWljb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIC5zd2FsMi1pY29uLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMC4yNWVtO1xuICB9XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV0ge1xuICB0b3A6IDAuODc1ZW07XG4gIHdpZHRoOiAxLjM3NWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XSB7XG4gIGxlZnQ6IDAuMzEyNWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF0ge1xuICByaWdodDogMC4zMTI1ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnMge1xuICBmbGV4LWJhc2lzOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCAwLjMxMjVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkIHtcbiAgbWFyZ2luOiAwIDAuMzEyNWVtO1xuICBwYWRkaW5nOiAwLjMxMjVlbSAwLjYyNWVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmZmYsIDAgMCAwIDNweCByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogI2E1ZGM4Njtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxLjZlbTtcbiAgaGVpZ2h0OiAzZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF0ge1xuICB0b3A6IC0wLjhlbTtcbiAgbGVmdDogLTAuNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAyZW0gMmVtO1xuICBib3JkZXItcmFkaXVzOiA0ZW0gMCAwIDRlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XSB7XG4gIHRvcDogLTAuMjVlbTtcbiAgbGVmdDogMC45Mzc1ZW07XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgNGVtIDRlbSAwO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXgge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDAuNDM3NWVtO1xuICB3aWR0aDogMC40Mzc1ZW07XG4gIGhlaWdodDogMi42ODc1ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdIHtcbiAgaGVpZ2h0OiAwLjMxMjVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF0ge1xuICB0b3A6IDEuMTI1ZW07XG4gIGxlZnQ6IDAuMTg3NWVtO1xuICB3aWR0aDogMC43NWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9bG9uZ10ge1xuICB0b3A6IDAuOTM3NWVtO1xuICByaWdodDogMC4xODc1ZW07XG4gIHdpZHRoOiAxLjM3NWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gIGFuaW1hdGlvbjogc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIDAuNzVzO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcge1xuICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgMC43NXM7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvdyB7XG4gIGFuaW1hdGlvbjogc3dhbDItdG9hc3Qtc2hvdyAwLjVzO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGUge1xuICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWhpZGUgMC4xcyBmb3J3YXJkcztcbn1cblxuLnN3YWwyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA2MDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC42MjVlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYmFja2Ryb3Atc2hvdyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYmFja2Ryb3AtaGlkZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSA+IDpmaXJzdC1jaGlsZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQgPiA6Zmlyc3QtY2hpbGQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQgPiA6Zmlyc3QtY2hpbGQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCA+IDpmaXJzdC1jaGlsZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHQgPiA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4gPiAuc3dhbDItbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDE7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LXJvdyA+IC5zd2FsMi1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleDogMTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4ge1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1sZWZ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1sZWZ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1yaWdodCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItcmlnaHQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbiA+IC5zd2FsMi1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleDogMTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItbm8tdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi5zd2FsMi1jb250YWluZXI6bm90KC5zd2FsMi10b3ApOm5vdCguc3dhbDItdG9wLXN0YXJ0KTpub3QoLnN3YWwyLXRvcC1lbmQpOm5vdCguc3dhbDItdG9wLWxlZnQpOm5vdCguc3dhbDItdG9wLXJpZ2h0KTpub3QoLnN3YWwyLWNlbnRlci1zdGFydCk6bm90KC5zd2FsMi1jZW50ZXItZW5kKTpub3QoLnN3YWwyLWNlbnRlci1sZWZ0KTpub3QoLnN3YWwyLWNlbnRlci1yaWdodCk6bm90KC5zd2FsMi1ib3R0b20pOm5vdCguc3dhbDItYm90dG9tLXN0YXJ0KTpub3QoLnN3YWwyLWJvdHRvbS1lbmQpOm5vdCguc3dhbDItYm90dG9tLWxlZnQpOm5vdCguc3dhbDItYm90dG9tLXJpZ2h0KTpub3QoLnN3YWwyLWdyb3ctZnVsbHNjcmVlbikgPiAuc3dhbDItbW9kYWwge1xuICBtYXJnaW46IGF1dG87XG59XG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuc3dhbDItY29udGFpbmVyIC5zd2FsMi1tb2RhbCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnN3YWwyLXBvcHVwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMyZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMS4yNWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNWVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnN3YWwyLXBvcHVwOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi1sb2FkaW5nIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uc3dhbDItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN3YWwyLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDAuNGVtO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC1zaXplOiAxLjg3NWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zd2FsMi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMS4yNWVtIGF1dG8gMDtcbn1cbi5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZFtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xufVxuLnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSk7XG59XG4uc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbWFyZ2luOiAwLjQ2ODc1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICBib3JkZXI6IDAuMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyAuc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbCB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG4uc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIDpub3QoLnN3YWwyLXN0eWxlZCkuc3dhbDItY29uZmlybTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICBib3JkZXI6IDNweCBzb2xpZCAjOTk5OTk5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICNmZmY7XG59XG5cbi5zd2FsMi1zdHlsZWQge1xuICBtYXJnaW46IDAuMzEyNWVtO1xuICBwYWRkaW5nOiAwLjYyNWVtIDJlbTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zd2FsMi1zdHlsZWQ6bm90KFtkaXNhYmxlZF0pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJtIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDg1ZDY7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMDYyNWVtO1xufVxuLnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWwge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4wNjI1ZW07XG59XG4uc3dhbDItc3R5bGVkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmZmYsIDAgMCAwIDNweCByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTtcbn1cbi5zd2FsMi1zdHlsZWQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG59XG5cbi5zd2FsMi1mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxLjI1ZW0gMCAwO1xuICBwYWRkaW5nOiAxZW0gMCAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAwLjI1ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjMxMjVlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zMTI1ZW07XG59XG5cbi5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwLjI1ZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnN3YWwyLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEuMjVlbSBhdXRvO1xufVxuXG4uc3dhbDItY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIC8qIDE2MTcgKi9cbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdXRsaW5lOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNjY2NjY2M7XG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN3YWwyLWNsb3NlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmMjc0NzQ7XG59XG4uc3dhbDItY2xvc2U6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG59XG5cbi5zd2FsMi1jb250ZW50IHtcbiAgei1pbmRleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhLFxuLnN3YWwyLXNlbGVjdCxcbi5zd2FsMi1yYWRpbyxcbi5zd2FsMi1jaGVja2JveCB7XG4gIG1hcmdpbjogMWVtIGF1dG87XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzLCBib3gtc2hhZG93IDAuM3M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMTg3NWVtO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbn1cbi5zd2FsMi1pbnB1dC5zd2FsMi1pbnB1dGVycm9yLFxuLnN3YWwyLWZpbGUuc3dhbDItaW5wdXRlcnJvcixcbi5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjI3NDc0ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2YyNzQ3NCAhaW1wb3J0YW50O1xufVxuLnN3YWwyLWlucHV0OmZvY3VzLFxuLnN3YWwyLWZpbGU6Zm9jdXMsXG4uc3dhbDItdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjRkYmVkO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgM3B4ICNjNGU2ZjU7XG59XG4uc3dhbDItaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLnN3YWwyLWZpbGU6OnBsYWNlaG9sZGVyLFxuLnN3YWwyLXRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG4uc3dhbDItcmFuZ2Uge1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnN3YWwyLXJhbmdlIGlucHV0IHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5zd2FsMi1yYW5nZSBvdXRwdXQge1xuICB3aWR0aDogMjAlO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN3YWwyLXJhbmdlIGlucHV0LFxuLnN3YWwyLXJhbmdlIG91dHB1dCB7XG4gIGhlaWdodDogMi42MjVlbTtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxLjEyNWVtO1xuICBsaW5lLWhlaWdodDogMi42MjVlbTtcbn1cblxuLnN3YWwyLWlucHV0IHtcbiAgaGVpZ2h0OiAyLjYyNWVtO1xuICBwYWRkaW5nOiAwIDAuNzVlbTtcbn1cbi5zd2FsMi1pbnB1dFt0eXBlPW51bWJlcl0ge1xuICBtYXgtd2lkdGg6IDEwZW07XG59XG5cbi5zd2FsMi1maWxlIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjEyNWVtO1xufVxuXG4uc3dhbDItdGV4dGFyZWEge1xuICBoZWlnaHQ6IDYuNzVlbTtcbiAgcGFkZGluZzogMC43NWVtO1xufVxuXG4uc3dhbDItc2VsZWN0IHtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4zNzVlbSAwLjYyNWVtO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjEyNWVtO1xufVxuXG4uc3dhbDItcmFkaW8sXG4uc3dhbDItY2hlY2tib3gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uc3dhbDItcmFkaW8gbGFiZWwsXG4uc3dhbDItY2hlY2tib3ggbGFiZWwge1xuICBtYXJnaW46IDAgMC42ZW07XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbn1cbi5zd2FsMi1yYWRpbyBpbnB1dCxcbi5zd2FsMi1jaGVja2JveCBpbnB1dCB7XG4gIG1hcmdpbjogMCAwLjRlbTtcbn1cblxuLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjYyNWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiFcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMS41ZW07XG4gIG1pbi13aWR0aDogMS41ZW07XG4gIGhlaWdodDogMS41ZW07XG4gIG1hcmdpbjogMCAwLjYyNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjc0NzQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN3YWwyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDVlbTtcbiAgaGVpZ2h0OiA1ZW07XG4gIG1hcmdpbjogMS4yNWVtIGF1dG8gMS44NzVlbTtcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiA1ZW07XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzLjc1ZW07XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogI2YyNzQ3NDtcbiAgY29sb3I6ICNmMjc0NzQ7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciAuc3dhbDIteC1tYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWdyb3c6IDE7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMi4zMTI1ZW07XG4gIHdpZHRoOiAyLjkzNzVlbTtcbiAgaGVpZ2h0OiAwLjMxMjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzQ3NDtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XSB7XG4gIGxlZnQ6IDEuMDYyNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRdIHtcbiAgcmlnaHQ6IDFlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLWVycm9yLnN3YWwyLWljb24tc2hvdyB7XG4gIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIDAuNXM7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXgtbWFyayB7XG4gIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgMC41cztcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6ICNmYWNlYTg7XG4gIGNvbG9yOiAjZjhiYjg2O1xufVxuLnN3YWwyLWljb24uc3dhbDItaW5mbyB7XG4gIGJvcmRlci1jb2xvcjogIzlkZTBmNjtcbiAgY29sb3I6ICMzZmMzZWU7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbiB7XG4gIGJvcmRlci1jb2xvcjogI2M5ZGFlMTtcbiAgY29sb3I6ICM4N2FkYmQ7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjYTVkYzg2O1xuICBjb2xvcjogI2E1ZGM4Njtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMy43NWVtO1xuICBoZWlnaHQ6IDcuNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1sZWZ0XSB7XG4gIHRvcDogLTAuNDM3NWVtO1xuICBsZWZ0OiAtMi4wNjM1ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDMuNzVlbSAzLjc1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDcuNWVtIDAgMCA3LjVlbTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF0ge1xuICB0b3A6IC0wLjY4NzVlbTtcbiAgbGVmdDogMS44NzVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAzLjc1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgNy41ZW0gNy41ZW0gMDtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAtMC4yNWVtO1xuICBsZWZ0OiAtMC4yNWVtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgcmdiYSgxNjUsIDIyMCwgMTM0LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwLjVlbTtcbiAgbGVmdDogMS42MjVlbTtcbiAgd2lkdGg6IDAuNDM3NWVtO1xuICBoZWlnaHQ6IDUuNjI1ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMC4zMTI1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWRjODY7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXSB7XG4gIHRvcDogMi44NzVlbTtcbiAgbGVmdDogMC44MTI1ZW07XG4gIHdpZHRoOiAxLjU2MjVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmddIHtcbiAgdG9wOiAyLjM3NWVtO1xuICByaWdodDogMC41ZW07XG4gIHdpZHRoOiAyLjkzNzVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgMC43NXM7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcge1xuICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgMC43NXM7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW47XG59XG5cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDEuMjVlbTtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwIHtcbiAgei1pbmRleDogMjA7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIGJhY2tncm91bmQ6ICMzMDg1ZDY7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXAge1xuICBiYWNrZ3JvdW5kOiAjMzA4NWQ2O1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwIH4gLnN3YWwyLXByb2dyZXNzLXN0ZXAge1xuICBiYWNrZ3JvdW5kOiAjYWRkOGU2O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcCB+IC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmUge1xuICBiYWNrZ3JvdW5kOiAjYWRkOGU2O1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmUge1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDAuNGVtO1xuICBtYXJnaW46IDAgLTFweDtcbiAgYmFja2dyb3VuZDogIzMwODVkNjtcbn1cblxuW2NsYXNzXj1zd2FsMl0ge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc3dhbDItc2hvdyB7XG4gIGFuaW1hdGlvbjogc3dhbDItc2hvdyAwLjNzO1xufVxuXG4uc3dhbDItaGlkZSB7XG4gIGFuaW1hdGlvbjogc3dhbDItaGlkZSAwLjE1cyBmb3J3YXJkcztcbn1cblxuLnN3YWwyLW5vYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLnN3YWwyLXNjcm9sbGJhci1tZWFzdXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC05OTk5cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5zd2FsMi1ydGwgLnN3YWwyLWNsb3NlIHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG59XG4uc3dhbDItcnRsIC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbn1cblxuQHN1cHBvcnRzICgtbXMtYWNjZWxlcmF0b3I6IHRydWUpIHtcbiAgLnN3YWwyLXJhbmdlIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5zd2FsMi1yYW5nZSBvdXRwdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5zd2FsMi1yYW5nZSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAuc3dhbDItY2xvc2U6Zm9jdXMge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC42MjVlbSkgcm90YXRlWigyZGVnKTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtcbiAgfVxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjMxMjVlbSkgcm90YXRlWigyZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1oaWRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDFkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogMC41NjI1ZW07XG4gICAgbGVmdDogMC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNTQlIHtcbiAgICB0b3A6IDAuMTI1ZW07XG4gICAgbGVmdDogMC4xMjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA3MCUge1xuICAgIHRvcDogMC42MjVlbTtcbiAgICBsZWZ0OiAtMC4yNWVtO1xuICAgIHdpZHRoOiAxLjYyNWVtO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAwLjc1ZW07XG4gICAgd2lkdGg6IDAuNWVtO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMS4xMjVlbTtcbiAgICBsZWZ0OiAwLjE4NzVlbTtcbiAgICB3aWR0aDogMC43NWVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAxLjYyNWVtO1xuICAgIHJpZ2h0OiAxLjM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDY1JSB7XG4gICAgdG9wOiAxLjI1ZW07XG4gICAgcmlnaHQ6IDAuOTM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAwLjkzNzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMS4xMjVlbTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDAuOTM3NWVtO1xuICAgIHJpZ2h0OiAwLjE4NzVlbTtcbiAgICB3aWR0aDogMS4zNzVlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxuICA0NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItaGlkZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogMS4xODc1ZW07XG4gICAgbGVmdDogMC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNTQlIHtcbiAgICB0b3A6IDEuMDYyNWVtO1xuICAgIGxlZnQ6IDAuMTI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNzAlIHtcbiAgICB0b3A6IDIuMTg3NWVtO1xuICAgIGxlZnQ6IC0wLjM3NWVtO1xuICAgIHdpZHRoOiAzLjEyNWVtO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAzZW07XG4gICAgbGVmdDogMS4zMTI1ZW07XG4gICAgd2lkdGg6IDEuMDYyNWVtO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMi44MTI1ZW07XG4gICAgbGVmdDogMC44MTI1ZW07XG4gICAgd2lkdGg6IDEuNTYyNWVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDY1JSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAyLjE4NzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMy40Mzc1ZW07XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjM3NWVtO1xuICAgIHJpZ2h0OiAwLjVlbTtcbiAgICB3aWR0aDogMi45Mzc1ZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDEyJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsge1xuICAwJSB7XG4gICAgbWFyZ2luLXRvcDogMS42MjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgODAlIHtcbiAgICBtYXJnaW4tdG9wOiAtMC4zNzVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbmJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYm9keS5zd2FsMi1oZWlnaHQtYXV0byB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyIHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiBhdXRvO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDAuNjI1ZW0gKiAyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lciA+IC5zd2FsMi1tb2RhbCB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Age1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdCB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbkBtZWRpYSBwcmludCB7XG4gIGJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuICB9XG4gIGJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikgPiBbYXJpYS1oaWRkZW49dHJ1ZV0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgYm9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSAuc3dhbDItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogYXV0bztcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtbGVmdCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogMDtcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCB7XG4gIHRvcDogNTAlO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyIHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IGF1dG87XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xuICB0b3A6IGF1dG87XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiBhdXRvO1xufVxuYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5ib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnMge1xuICBmbGV4OiAxO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBoZWlnaHQ6IDIuMmVtO1xuICBtYXJnaW4tdG9wOiAwLjMxMjVlbTtcbn1cbmJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1pbnB1dCB7XG4gIGhlaWdodDogMmVtO1xuICBtYXJnaW46IDAuMzEyNWVtIGF1dG87XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDFlbTtcbn0iLCJAbWl4aW4gaWUge1xuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMDI1MDE2MVxuQG1peGluIG5vdCgkaWdub3ItbGlzdC4uLikge1xuICBAaWYgKGxlbmd0aCgkaWdub3ItbGlzdCkgPT0gMSkge1xuICAgICRpZ25vci1saXN0OiBudGgoJGlnbm9yLWxpc3QsIDEpO1xuICB9XG5cbiAgJG5vdC1vdXRwdXQ6ICcnO1xuXG4gIEBlYWNoICRub3QgaW4gJGlnbm9yLWxpc3Qge1xuICAgICRub3Qtb3V0cHV0OiAkbm90LW91dHB1dCArICc6bm90KCN7JG5vdH0pJzsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBzY3NzL25vLWR1cGxpY2F0ZS1kb2xsYXItdmFyaWFibGVzXG4gIH1cblxuICAmI3skbm90LW91dHB1dH0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCIuc3dhbDItY29udGFpbmVyIHtcbiAgLy8gY2VudGVyaW5nXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA2MDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogJHN3YWwyLWNvbnRhaW5lci1wYWRkaW5nO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246ICRzd2FsMi1iYWNrZHJvcC10cmFuc2l0aW9uO1xuXG4gIC8vIHN3ZWV0YWxlcnQyL2lzc3Vlcy85MDVcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gICYuc3dhbDItYmFja2Ryb3Atc2hvdyB7XG4gICAgYmFja2dyb3VuZDogJHN3YWwyLWJhY2tkcm9wO1xuICB9XG5cbiAgJi5zd2FsMi1iYWNrZHJvcC1oaWRlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG5cbiAgJi5zd2FsMi10b3Age1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJi5zd2FsMi10b3Atc3RhcnQsXG4gICYuc3dhbDItdG9wLWxlZnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICYuc3dhbDItdG9wLWVuZCxcbiAgJi5zd2FsMi10b3AtcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cblxuICAmLnN3YWwyLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICYuc3dhbDItY2VudGVyLXN0YXJ0LFxuICAmLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICYuc3dhbDItY2VudGVyLWVuZCxcbiAgJi5zd2FsMi1jZW50ZXItcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gICYuc3dhbDItYm90dG9tIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cblxuICAmLnN3YWwyLWJvdHRvbS1zdGFydCxcbiAgJi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICYuc3dhbDItYm90dG9tLWVuZCxcbiAgJi5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgJi5zd2FsMi1ib3R0b20gPiA6Zmlyc3QtY2hpbGQsXG4gICYuc3dhbDItYm90dG9tLXN0YXJ0ID4gOmZpcnN0LWNoaWxkLFxuICAmLnN3YWwyLWJvdHRvbS1sZWZ0ID4gOmZpcnN0LWNoaWxkLFxuICAmLnN3YWwyLWJvdHRvbS1lbmQgPiA6Zmlyc3QtY2hpbGQsXG4gICYuc3dhbDItYm90dG9tLXJpZ2h0ID4gOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG5cbiAgJi5zd2FsMi1ncm93LWZ1bGxzY3JlZW4gPiAuc3dhbDItbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAmLnN3YWwyLWdyb3ctcm93ID4gLnN3YWwyLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAmLnN3YWwyLWdyb3ctY29sdW1uIHtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAmLnN3YWwyLXRvcCxcbiAgICAmLnN3YWwyLWNlbnRlcixcbiAgICAmLnN3YWwyLWJvdHRvbSB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICYuc3dhbDItdG9wLXN0YXJ0LFxuICAgICYuc3dhbDItY2VudGVyLXN0YXJ0LFxuICAgICYuc3dhbDItYm90dG9tLXN0YXJ0LFxuICAgICYuc3dhbDItdG9wLWxlZnQsXG4gICAgJi5zd2FsMi1jZW50ZXItbGVmdCxcbiAgICAmLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgICYuc3dhbDItdG9wLWVuZCxcbiAgICAmLnN3YWwyLWNlbnRlci1lbmQsXG4gICAgJi5zd2FsMi1ib3R0b20tZW5kLFxuICAgICYuc3dhbDItdG9wLXJpZ2h0LFxuICAgICYuc3dhbDItY2VudGVyLXJpZ2h0LFxuICAgICYuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAmID4gLnN3YWwyLW1vZGFsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmLnN3YWwyLW5vLXRyYW5zaXRpb24ge1xuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG5vdCgnLnN3YWwyLXRvcCcsXG4gICcuc3dhbDItdG9wLXN0YXJ0JyxcbiAgJy5zd2FsMi10b3AtZW5kJyxcbiAgJy5zd2FsMi10b3AtbGVmdCcsXG4gICcuc3dhbDItdG9wLXJpZ2h0JyxcbiAgJy5zd2FsMi1jZW50ZXItc3RhcnQnLFxuICAnLnN3YWwyLWNlbnRlci1lbmQnLFxuICAnLnN3YWwyLWNlbnRlci1sZWZ0JyxcbiAgJy5zd2FsMi1jZW50ZXItcmlnaHQnLFxuICAnLnN3YWwyLWJvdHRvbScsXG4gICcuc3dhbDItYm90dG9tLXN0YXJ0JyxcbiAgJy5zd2FsMi1ib3R0b20tZW5kJyxcbiAgJy5zd2FsMi1ib3R0b20tbGVmdCcsXG4gICcuc3dhbDItYm90dG9tLXJpZ2h0JyxcbiAgJy5zd2FsMi1ncm93LWZ1bGxzY3JlZW4nKSB7XG4gICAgJiA+IC5zd2FsMi1tb2RhbCB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgaWUge1xuICAgIC5zd2FsMi1tb2RhbCB7XG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnN3YWwyLXBvcHVwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6ICRzd2FsMi13aWR0aDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAkc3dhbDItcGFkZGluZztcbiAgYm9yZGVyOiAkc3dhbDItYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogJHN3YWwyLWJhY2tncm91bmQ7XG4gIGZvbnQtZmFtaWx5OiAkc3dhbDItZm9udDtcbiAgZm9udC1zaXplOiAkc3dhbDItZm9udC1zaXplO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmLnN3YWwyLWxvYWRpbmcge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgfVxufVxuXG4uc3dhbDItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN3YWwyLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogJHN3YWwyLXRpdGxlLW1hcmdpbjtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICRzd2FsMi10aXRsZS1jb2xvcjtcbiAgZm9udC1zaXplOiAkc3dhbDItdGl0bGUtZm9udC1zaXplO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zd2FsMi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTsgLy8gcHJldmVudCBzdWNlc3MgaWNvbiBmcm9tIG92ZXJsYXBwaW5nIGJ1dHRvbnNcbiAgZmxleC13cmFwOiAkc3dhbDItYWN0aW9ucy1mbGV4LXdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkc3dhbDItYWN0aW9ucy1hbGlnbi1pdGVtcztcbiAganVzdGlmeS1jb250ZW50OiAkc3dhbDItYWN0aW9ucy1qdXN0aWZ5LWNvbnRlbnQ7XG4gIHdpZHRoOiAkc3dhbDItYWN0aW9ucy13aWR0aDtcbiAgbWFyZ2luOiAkc3dhbDItYWN0aW9ucy1tYXJnaW47XG5cbiAgJjpub3QoLnN3YWwyLWxvYWRpbmcpIHtcbiAgICAuc3dhbDItc3R5bGVkIHtcbiAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN3YWwyLWJ1dHRvbi1kYXJrZW4taG92ZXIsICRzd2FsMi1idXR0b24tZGFya2VuLWhvdmVyKTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN3YWwyLWJ1dHRvbi1kYXJrZW4tYWN0aXZlLCAkc3dhbDItYnV0dG9uLWRhcmtlbi1hY3RpdmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItbG9hZGluZyB7XG4gICAgLnN3YWwyLXN0eWxlZCB7XG4gICAgICAmLnN3YWwyLWNvbmZpcm0ge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgIG1hcmdpbjogLjQ2ODc1ZW07XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICAgICAgICBib3JkZXI6IC4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItY2FuY2VsIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6bm90KC5zd2FsMi1zdHlsZWQpIHtcbiAgICAgICYuc3dhbDItY29uZmlybSB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRlbigkc3dhbDItYmxhY2ssIDYwKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAkc3dhbDItd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN3YWwyLXN0eWxlZCB7XG4gIG1hcmdpbjogLjMxMjVlbTtcbiAgcGFkZGluZzogLjYyNWVtIDJlbTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJi5zd2FsMi1jb25maXJtIHtcbiAgICBib3JkZXI6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXI7XG4gICAgYm9yZGVyLXJhZGl1czogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJvcmRlci1yYWRpdXM7XG4gICAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItY29uZmlybS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWZvbnQtc2l6ZTtcbiAgfVxuXG4gICYuc3dhbDItY2FuY2VsIHtcbiAgICBib3JkZXI6ICRzd2FsMi1jYW5jZWwtYnV0dG9uLWJvcmRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3JkZXItcmFkaXVzO1xuICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWNhbmNlbC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogJHN3YWwyLWNhbmNlbC1idXR0b24tY29sb3I7XG4gICAgZm9udC1zaXplOiAkc3dhbDItY2FuY2VsLWJ1dHRvbi1mb250LXNpemU7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAkc3dhbDItYnV0dG9uLWZvY3VzLW91dGxpbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWJ1dHRvbi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGJveC1zaGFkb3c6ICRzd2FsMi1idXR0b24tZm9jdXMtYm94LXNoYWRvdztcbiAgfVxuXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG4uc3dhbDItZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogJHN3YWwyLWZvb3Rlci1tYXJnaW47XG4gIHBhZGRpbmc6ICRzd2FsMi1mb290ZXItcGFkZGluZztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRzd2FsMi1mb290ZXItYm9yZGVyLWNvbG9yO1xuICBjb2xvcjogJHN3YWwyLWZvb3Rlci1jb2xvcjtcbiAgZm9udC1zaXplOiAkc3dhbDItZm9vdGVyLWZvbnQtc2l6ZTtcbn1cblxuLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1oZWlnaHQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkc3dhbDItYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHN3YWwyLWJvcmRlci1yYWRpdXM7XG59XG5cbi5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAkc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWhlaWdodDtcbiAgYmFja2dyb3VuZDogJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kO1xufVxuXG4uc3dhbDItaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogJHN3YWwyLWltYWdlLW1hcmdpbjtcbn1cblxuLnN3YWwyLWNsb3NlIHtcbiAgcG9zaXRpb246ICRzd2FsMi1jbG9zZS1idXR0b24tcG9zaXRpb247XG4gIHotaW5kZXg6IDI7XG5cbiAgLyogMTYxNyAqL1xuICB0b3A6ICRzd2FsMi1jbG9zZS1idXR0b24tZ2FwO1xuICByaWdodDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1nYXA7XG4gIGFsaWduLWl0ZW1zOiAkc3dhbDItY2xvc2UtYnV0dG9uLWFsaWduLWl0ZW1zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRzd2FsMi1jbG9zZS1idXR0b24tanVzdGlmeS1jb250ZW50O1xuICB3aWR0aDogJHN3YWwyLWNsb3NlLWJ1dHRvbi13aWR0aDtcbiAgaGVpZ2h0OiAkc3dhbDItY2xvc2UtYnV0dG9uLWhlaWdodDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogJHN3YWwyLWNsb3NlLWJ1dHRvbi10cmFuc2l0aW9uO1xuICBib3JkZXI6ICRzd2FsMi1jbG9zZS1idXR0b24tYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItY2xvc2UtYnV0dG9uLWJvcmRlci1yYWRpdXM7XG4gIG91dGxpbmU6ICRzd2FsMi1jbG9zZS1idXR0b24tb3V0bGluZTtcbiAgYmFja2dyb3VuZDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1iYWNrZ3JvdW5kO1xuICBjb2xvcjogJHN3YWwyLWNsb3NlLWJ1dHRvbi1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWNsb3NlLWJ1dHRvbi1mb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkc3dhbDItY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiAkc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLXRyYW5zZm9ybTtcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ7XG4gICAgY29sb3I6ICRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItY29sb3I7XG4gIH1cblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuLnN3YWwyLWNvbnRlbnQge1xuICB6LWluZGV4OiAxOyAvLyBwcmV2ZW50IHN1Y2VzcyBpY29uIG92ZXJsYXBwaW5nIHRoZSBjb250ZW50XG4gIGp1c3RpZnktY29udGVudDogJHN3YWwyLWNvbnRlbnQtanVzdGlmeS1jb250ZW50O1xuICBtYXJnaW46ICRzd2FsMi1jb250ZW50LW1hcmdpbjtcbiAgcGFkZGluZzogJHN3YWwyLWNvbnRlbnQtcGFkaW5nO1xuICBjb2xvcjogJHN3YWwyLWNvbnRlbnQtY29sb3I7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWNvbnRlbnQtZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJHN3YWwyLWNvbnRlbnQtZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkc3dhbDItY29udGVudC1saW5lLWhlaWdodDtcbiAgdGV4dC1hbGlnbjogJHN3YWwyLWNvbnRlbnQtdGV4dC1hbGlnbjtcbiAgd29yZC13cmFwOiAkc3dhbDItY29udGVudC13b3JkLXdyYXA7XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhLFxuLnN3YWwyLXNlbGVjdCxcbi5zd2FsMi1yYWRpbyxcbi5zd2FsMi1jaGVja2JveCB7XG4gIG1hcmdpbjogJHN3YWwyLWlucHV0LW1hcmdpbjtcbn1cblxuLnN3YWwyLWlucHV0LFxuLnN3YWwyLWZpbGUsXG4uc3dhbDItdGV4dGFyZWEge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogJHN3YWwyLWlucHV0LXdpZHRoO1xuICB0cmFuc2l0aW9uOiAkc3dhbDItaW5wdXQtdHJhbnNpdGlvbjtcbiAgYm9yZGVyOiAkc3dhbDItaW5wdXQtYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItaW5wdXQtYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogJHN3YWwyLWlucHV0LWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6ICRzd2FsMi1pbnB1dC1ib3gtc2hhZG93O1xuICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi1pbnB1dC1mb250LXNpemU7XG5cbiAgJi5zd2FsMi1pbnB1dGVycm9yIHtcbiAgICBib3JkZXItY29sb3I6ICRzd2FsMi1lcnJvciAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAycHggJHN3YWwyLWVycm9yICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6ICRzd2FsMi1pbnB1dC1mb2N1cy1ib3JkZXI7XG4gICAgb3V0bGluZTogJHN3YWwyLWlucHV0LWZvY3VzLW91dGxpbmU7XG4gICAgYm94LXNoYWRvdzogJHN3YWwyLWlucHV0LWZvY3VzLWJveC1zaGFkb3c7XG4gIH1cblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA4MCk7XG4gIH1cbn1cblxuLnN3YWwyLXJhbmdlIHtcbiAgbWFyZ2luOiAkc3dhbDItaW5wdXQtbWFyZ2luO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItYmFja2dyb3VuZDtcblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIG91dHB1dCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaW5wdXQsXG4gIG91dHB1dCB7XG4gICAgaGVpZ2h0OiAkc3dhbDItaW5wdXQtaGVpZ2h0O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAkc3dhbDItaW5wdXQtZm9udC1zaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc3dhbDItaW5wdXQtaGVpZ2h0O1xuICB9XG59XG5cbi5zd2FsMi1pbnB1dCB7XG4gIGhlaWdodDogJHN3YWwyLWlucHV0LWhlaWdodDtcbiAgcGFkZGluZzogJHN3YWwyLWlucHV0LXBhZGRpbmc7XG5cbiAgJlt0eXBlPSdudW1iZXInXSB7XG4gICAgbWF4LXdpZHRoOiAxMGVtO1xuICB9XG59XG5cbi5zd2FsMi1maWxlIHtcbiAgYmFja2dyb3VuZDogJHN3YWwyLWlucHV0LWJhY2tncm91bmQ7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTtcbn1cblxuLnN3YWwyLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiAkc3dhbDItdGV4dGFyZWEtaGVpZ2h0O1xuICBwYWRkaW5nOiAkc3dhbDItdGV4dGFyZWEtcGFkZGluZztcbn1cblxuLnN3YWwyLXNlbGVjdCB7XG4gIG1pbi13aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IC4zNzVlbSAuNjI1ZW07XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1pbnB1dC1iYWNrZ3JvdW5kO1xuICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi1pbnB1dC1mb250LXNpemU7XG59XG5cbi5zd2FsMi1yYWRpbyxcbi5zd2FsMi1jaGVja2JveCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItYmFja2dyb3VuZDtcbiAgY29sb3I6ICRzd2FsMi1pbnB1dC1jb2xvcjtcblxuICBsYWJlbCB7XG4gICAgbWFyZ2luOiAwIC42ZW07XG4gICAgZm9udC1zaXplOiAkc3dhbDItaW5wdXQtZm9udC1zaXplO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbjogMCAuNGVtO1xuICB9XG59XG5cbi5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtanVzdGlmeS1jb250ZW50O1xuICBwYWRkaW5nOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLXBhZGRpbmc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtYmFja2dyb3VuZDtcbiAgY29sb3I6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtY29sb3I7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1mb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWZvbnQtd2VpZ2h0O1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyEnO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMS41ZW07XG4gICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIG1hcmdpbjogMCAuNjI1ZW07XG4gICAgem9vbTogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1pY29uLXpvb207XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi1iYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWljb24tY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5zd2FsMi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAkc3dhbDItaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRzd2FsMi1pY29uLXNpemU7XG4gIG1hcmdpbjogJHN3YWwyLWljb24tbWFyZ2luO1xuICB6b29tOiAkc3dhbDItaWNvbi16b29tO1xuICBib3JkZXI6IC4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtZmFtaWx5OiAkc3dhbDItaWNvbi1mb250LWZhbWlseTtcbiAgbGluZS1oZWlnaHQ6ICRzd2FsMi1pY29uLXNpemU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLnN3YWwyLWljb24tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMy43NWVtO1xuICB9XG5cbiAgJi5zd2FsMi1lcnJvciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkc3dhbDItZXJyb3I7XG4gICAgY29sb3I6ICRzd2FsMi1lcnJvcjtcblxuICAgIC5zd2FsMi14LW1hcmsge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cblxuICAgIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ10ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDIuMzEyNWVtO1xuICAgICAgd2lkdGg6IDIuOTM3NWVtO1xuICAgICAgaGVpZ2h0OiAuMzEyNWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjEyNWVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWVycm9yO1xuXG4gICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgbGVmdDogMS4wNjI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgJltjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICByaWdodDogMWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVycm9yIGljb24gYW5pbWF0aW9uXG4gICAgJi5zd2FsMi1pY29uLXNob3cge1xuICAgICAgQGlmICRzd2FsMi1pY29uLWFuaW1hdGlvbnMge1xuICAgICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXM7XG5cbiAgICAgICAgLnN3YWwyLXgtbWFyayB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAuNXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnN3YWwyLXdhcm5pbmcge1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigkc3dhbDItd2FybmluZywgNyk7XG4gICAgY29sb3I6ICRzd2FsMi13YXJuaW5nO1xuICB9XG5cbiAgJi5zd2FsMi1pbmZvIHtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWluZm8sIDIwKTtcbiAgICBjb2xvcjogJHN3YWwyLWluZm87XG4gIH1cblxuICAmLnN3YWwyLXF1ZXN0aW9uIHtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLXF1ZXN0aW9uLCAyMCk7XG4gICAgY29sb3I6ICRzd2FsMi1xdWVzdGlvbjtcbiAgfVxuXG4gICYuc3dhbDItc3VjY2VzcyB7XG4gICAgYm9yZGVyLWNvbG9yOiAkc3dhbDItc3VjY2VzcztcbiAgICBjb2xvcjogJHN3YWwyLXN1Y2Nlc3M7XG5cbiAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7XG4gICAgICAvLyBFbXVsYXRlIG1vdmluZyBjaXJjdWxhciBsaW5lXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMy43NWVtO1xuICAgICAgaGVpZ2h0OiA3LjVlbTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgJltjbGFzcyQ9J2xlZnQnXSB7XG4gICAgICAgIHRvcDogLS40Mzc1ZW07XG4gICAgICAgIGxlZnQ6IC0yLjA2MzVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMy43NWVtIDMuNzVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNy41ZW0gMCAwIDcuNWVtO1xuICAgICAgfVxuXG4gICAgICAmW2NsYXNzJD0ncmlnaHQnXSB7XG4gICAgICAgIHRvcDogLS42ODc1ZW07XG4gICAgICAgIGxlZnQ6IDEuODc1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMy43NWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDcuNWVtIDcuNWVtIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAvLyBSaW5nXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgdG9wOiAtLjI1ZW07XG4gICAgICBsZWZ0OiAtLjI1ZW07XG4gICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyOiAuMjVlbSBzb2xpZCAkc3dhbDItc3VjY2Vzcy1ib3JkZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcbiAgICAgIC8vIEhpZGUgY29ybmVycyBsZWZ0IGZyb20gYW5pbWF0aW9uXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgdG9wOiAuNWVtO1xuICAgICAgbGVmdDogMS42MjVlbTtcbiAgICAgIHdpZHRoOiAuNDM3NWVtO1xuICAgICAgaGVpZ2h0OiA1LjYyNWVtO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB9XG5cbiAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBoZWlnaHQ6IC4zMTI1ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAuMTI1ZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItc3VjY2VzcztcblxuICAgICAgJltjbGFzcyQ9J3RpcCddIHtcbiAgICAgICAgdG9wOiAyLjg3NWVtO1xuICAgICAgICBsZWZ0OiAuODEyNWVtO1xuICAgICAgICB3aWR0aDogMS41NjI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgJltjbGFzcyQ9J2xvbmcnXSB7XG4gICAgICAgIHRvcDogMi4zNzVlbTtcbiAgICAgICAgcmlnaHQ6IC41ZW07XG4gICAgICAgIHdpZHRoOiAyLjkzNzVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdWNjZXNzIGljb24gYW5pbWF0aW9uXG4gICAgJi5zd2FsMi1pY29uLXNob3cge1xuICAgICAgQGlmICRzd2FsMi1pY29uLWFuaW1hdGlvbnMge1xuICAgICAgICAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXM7XG4gICAgICAgIH1cblxuICAgICAgICAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0IHtcbiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46ICRzd2FsMi1wcm9ncmVzcy1zdGVwcy1tYXJnaW47XG4gIHBhZGRpbmc6ICRzd2FsMi1wcm9ncmVzcy1zdGVwcy1wYWRkaW5nO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtYmFja2dyb3VuZDtcbiAgZm9udC13ZWlnaHQ6ICRzd2FsMi1wcm9ncmVzcy1zdGVwcy1mb250LXdlaWdodDtcblxuICBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5zd2FsMi1wcm9ncmVzcy1zdGVwIHtcbiAgICB6LWluZGV4OiAyMDtcbiAgICB3aWR0aDogJHN3YWwyLXByb2dyZXNzLXN0ZXAtd2lkdGg7XG4gICAgaGVpZ2h0OiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC1oZWlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogJHN3YWwyLXByb2dyZXNzLXN0ZXAtYm9yZGVyLXJhZGl1cztcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItYWN0aXZlLXN0ZXAtYmFja2dyb3VuZDtcbiAgICBjb2xvcjogJHN3YWwyLWFjdGl2ZS1zdGVwLWNvbG9yO1xuICAgIGxpbmUtaGVpZ2h0OiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC1oZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJi5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkc3dhbDItYWN0aXZlLXN0ZXAtYmFja2dyb3VuZDtcblxuICAgICAgfiAuc3dhbDItcHJvZ3Jlc3Mtc3RlcCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLWJhY2tncm91bmQ7XG4gICAgICAgIGNvbG9yOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgfiAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5lIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHN3YWwyLXByb2dyZXNzLXN0ZXAtYmFja2dyb3VuZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5lIHtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB3aWR0aDogJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWRpc3RhbmNlO1xuICAgIGhlaWdodDogLjRlbTtcbiAgICBtYXJnaW46IDAgLTFweDtcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItYWN0aXZlLXN0ZXAtYmFja2dyb3VuZDtcbiAgfVxufVxuXG4vLyBnaXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yNjhcbltjbGFzc149J3N3YWwyJ10ge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc3dhbDItc2hvdyB7XG4gIGFuaW1hdGlvbjogJHN3YWwyLXNob3ctYW5pbWF0aW9uO1xufVxuXG4uc3dhbDItaGlkZSB7XG4gIGFuaW1hdGlvbjogJHN3YWwyLWhpZGUtYW5pbWF0aW9uO1xufVxuXG4uc3dhbDItbm9hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG4vLyBNZWFzdXJlIHNjcm9sbGJhciB3aWR0aCBmb3IgcGFkZGluZyBib2R5IGR1cmluZyBtb2RhbCBzaG93L2hpZGVcbi5zd2FsMi1zY3JvbGxiYXItbWVhc3VyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4vLyBSaWdodC10by1sZWZ0IHN1cHBvcnRcbi5zd2FsMi1ydGwge1xuICAuc3dhbDItY2xvc2Uge1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6ICRzd2FsMi1jbG9zZS1idXR0b24tZ2FwO1xuICB9XG5cbiAgLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhciB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vdmFyaWFibGVzJztcblxuLy8gTWljcm9zb2Z0IEVkZ2VcbkBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOiB0cnVlKSB7XG4gIC5zd2FsMi1yYW5nZSB7XG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBvdXRwdXQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gSUUxMVxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSxcbiAgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLnN3YWwyLXJhbmdlIHtcbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIG91dHB1dCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBGaXJlZm94XG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAuc3dhbDItY2xvc2Uge1xuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMnB4IHNvbGlkICRzd2FsMi1vdXRsaW5lLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjYyNWVtKSByb3RhdGVaKDJkZWcpO1xuICB9XG5cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7XG4gIH1cblxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1oaWRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDFkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAge1xuICAwJSB7XG4gICAgdG9wOiAuNTYyNWVtO1xuICAgIGxlZnQ6IC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA1NCUge1xuICAgIHRvcDogLjEyNWVtO1xuICAgIGxlZnQ6IC4xMjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDcwJSB7XG4gICAgdG9wOiAuNjI1ZW07XG4gICAgbGVmdDogLS4yNWVtO1xuICAgIHdpZHRoOiAxLjYyNWVtO1xuICB9XG5cbiAgODQlIHtcbiAgICB0b3A6IDEuMDYyNWVtO1xuICAgIGxlZnQ6IC43NWVtO1xuICAgIHdpZHRoOiAuNWVtO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdG9wOiAxLjEyNWVtO1xuICAgIGxlZnQ6IC4xODc1ZW07XG4gICAgd2lkdGg6IC43NWVtO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gIDAlIHtcbiAgICB0b3A6IDEuNjI1ZW07XG4gICAgcmlnaHQ6IDEuMzc1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA2NSUge1xuICAgIHRvcDogMS4yNWVtO1xuICAgIHJpZ2h0OiAuOTM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgODQlIHtcbiAgICB0b3A6IC45Mzc1ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEuMTI1ZW07XG4gIH1cblxuICAxMDAlIHtcbiAgICB0b3A6IC45Mzc1ZW07XG4gICAgcmlnaHQ6IC4xODc1ZW07XG4gICAgd2lkdGg6IDEuMzc1ZW07XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3RvYXN0cy1hbmltYXRpb25zJztcblxuLy8gQXBwZWFyYW5jZSBhbmltYXRpb25cbkBrZXlmcmFtZXMgc3dhbDItc2hvdyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC43KTtcbiAgfVxuXG4gIDQ1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4vLyBEaXNwcGVhcmFuY2UgYW5pbWF0aW9uXG5Aa2V5ZnJhbWVzIHN3YWwyLWhpZGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4vLyBTdWNjZXNzIGljb24gYW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAge1xuICAwJSB7XG4gICAgdG9wOiAxLjE4NzVlbTtcbiAgICBsZWZ0OiAuMDYyNWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNTQlIHtcbiAgICB0b3A6IDEuMDYyNWVtO1xuICAgIGxlZnQ6IC4xMjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDcwJSB7XG4gICAgdG9wOiAyLjE4NzVlbTtcbiAgICBsZWZ0OiAtLjM3NWVtO1xuICAgIHdpZHRoOiAzLjEyNWVtO1xuICB9XG5cbiAgODQlIHtcbiAgICB0b3A6IDNlbTtcbiAgICBsZWZ0OiAxLjMxMjVlbTtcbiAgICB3aWR0aDogMS4wNjI1ZW07XG4gIH1cblxuICAxMDAlIHtcbiAgICB0b3A6IDIuODEyNWVtO1xuICAgIGxlZnQ6IC44MTI1ZW07XG4gICAgd2lkdGg6IDEuNTYyNWVtO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gIDAlIHtcbiAgICB0b3A6IDMuMzc1ZW07XG4gICAgcmlnaHQ6IDIuODc1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA2NSUge1xuICAgIHRvcDogMy4zNzVlbTtcbiAgICByaWdodDogMi44NzVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDg0JSB7XG4gICAgdG9wOiAyLjE4NzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMy40Mzc1ZW07XG4gIH1cblxuICAxMDAlIHtcbiAgICB0b3A6IDIuMzc1ZW07XG4gICAgcmlnaHQ6IC41ZW07XG4gICAgd2lkdGg6IDIuOTM3NWVtO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cblxuICAxMiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cbn1cblxuLy8gRXJyb3IgaWNvbiBhbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIHtcbiAgMCUge1xuICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDUwJSB7XG4gICAgbWFyZ2luLXRvcDogMS42MjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC40KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgODAlIHtcbiAgICBtYXJnaW4tdG9wOiAtLjM3NWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtbG9hZGluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3RvYXN0cy1ib2R5JztcblxuQG1peGluIHN3ZWV0YWxlcnQyLWJvZHkoKSB7XG4gICYuc3dhbDItc2hvd24ge1xuICAgIEBpbmNsdWRlIG5vdCgnLnN3YWwyLW5vLWJhY2tkcm9wJywgJy5zd2FsMi10b2FzdC1zaG93bicpIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8vIG5vdCBvdmVyZmxvdy15IGJlY2F1c2Ugb2YgU2FyYXJpLCAjMTI1M1xuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItaGVpZ2h0LWF1dG8ge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyAvLyAjNzgxICMxMTA3XG4gIH1cblxuICAmLnN3YWwyLW5vLWJhY2tkcm9wIHtcbiAgICAuc3dhbDItY29udGFpbmVyIHtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gI3skc3dhbDItY29udGFpbmVyLXBhZGRpbmd9ICogMik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAmID4gLnN3YWwyLW1vZGFsIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJHN3YWwyLWJhY2tkcm9wO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLXRvcCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItdG9wLXN0YXJ0LFxuICAgICAgJi5zd2FsMi10b3AtbGVmdCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3AtZW5kLFxuICAgICAgJi5zd2FsMi10b3AtcmlnaHQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlciB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlci1zdGFydCxcbiAgICAgICYuc3dhbDItY2VudGVyLWxlZnQge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlci1lbmQsXG4gICAgICAmLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tLXN0YXJ0LFxuICAgICAgJi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20tZW5kLFxuICAgICAgJi5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBwcmludCB7XG4gICAgJi5zd2FsMi1zaG93biB7XG4gICAgICBAaW5jbHVkZSBub3QoJy5zd2FsMi1uby1iYWNrZHJvcCcsICcuc3dhbDItdG9hc3Qtc2hvd24nKSB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuXG4gICAgICAgID4gW2FyaWEtaGlkZGVuPSd0cnVlJ10ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3dhbDItY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBzd2VldGFsZXJ0Mi10b2FzdHMtYm9keSgpIHtcbiAgJi5zd2FsMi10b2FzdC1zaG93biB7XG4gICAgLnN3YWwyLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgJi5zd2FsMi10b3Age1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLXRvcC1lbmQsXG4gICAgICAmLnN3YWwyLXRvcC1yaWdodCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3Atc3RhcnQsXG4gICAgICAmLnN3YWwyLXRvcC1sZWZ0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlci1zdGFydCxcbiAgICAgICYuc3dhbDItY2VudGVyLWxlZnQge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlciB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlci1lbmQsXG4gICAgICAmLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tLXN0YXJ0LFxuICAgICAgJi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20ge1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbS1lbmQsXG4gICAgICAmLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnN3YWwyLXRvYXN0LWNvbHVtbiB7XG4gICAgLnN3YWwyLXRvYXN0IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgLnN3YWwyLWFjdGlvbnMge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICBoZWlnaHQ6IDIuMmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAuMzEyNWVtO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItbG9hZGluZyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItaW5wdXQge1xuICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgbWFyZ2luOiAuMzEyNWVtIGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLXRvYXN0LWlucHV0LWZvbnQtc2l6ZTtcbiAgICAgIH1cblxuICAgICAgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLXRvYXN0LXZhbGlkYXRpb24tZm9udC1zaXplO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/core/api.service.ts":
/*!*************************************!*\
  !*** ./src/app/core/api.service.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");





let ApiService = class ApiService {
    constructor(http, router, authService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.urlPrefix = 'http://192.168.1.84:8080';
    }
    upload(file) {
        const headers = {};
        this.addAuthorizationHeader(headers);
        headers['Content-Type'] = 'application/json';
        const formData = new FormData();
        formData.append('file', file);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', `${this.urlPrefix}/lei/excel/upload`, formData, {
            reportProgress: true,
            responseType: 'json'
        });
        return this.http.request(req);
    }
    upload2(file) {
        const headers = {};
        this.addAuthorizationHeader(headers);
        headers['Content-Type'] = 'application/json';
        const formData = new FormData();
        formData.append('file', file);
        return this.authService.authorizeRequest(this.http.post(this.urlPrefix + `/lei/excel/upload`, formData, { headers }));
    }
    addAuthorizationHeader(headers) {
        const token = this.authService.getToken();
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
    }
    get(url) {
        const headers = {};
        this.addAuthorizationHeader(headers);
        return this.authService.authorizeRequest(this.http.get(this.urlPrefix + url, { headers }));
    }
    post(url, data) {
        const headers = {};
        this.addAuthorizationHeader(headers);
        headers['Content-Type'] = 'application/json';
        return this.authService.authorizeRequest(this.http.post(this.urlPrefix + url, data, { headers }));
    }
    put(url, data) {
        const headers = {};
        this.addAuthorizationHeader(headers);
        headers['Content-Type'] = 'application/json';
        return this.authService.authorizeRequest(this.http.put(this.urlPrefix + url, data, { headers }));
    }
    delete(url) {
        const headers = {};
        this.addAuthorizationHeader(headers);
        return this.authService.authorizeRequest(this.http.delete(`${this.urlPrefix}${url}`, { headers }));
    }
    postFormData(url, formData) {
        const headers = {};
        this.addAuthorizationHeader(headers);
        return this.authService.authorizeRequest(this.http.post(this.urlPrefix + url, formData, { headers }));
    }
    getBlob(url) {
        const headers = {};
        this.addAuthorizationHeader(headers);
        return this.authService.authorizeRequest(this.http.get(this.urlPrefix + url, { headers, responseType: 'blob' }));
    }
    putFormData(url, formData) {
        const headers = {};
        this.addAuthorizationHeader(headers);
        return this.authService.authorizeRequest(this.http.put(this.urlPrefix + url, formData, { headers }));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ApiService);



/***/ }),

/***/ "./src/app/system/create/create.component.css":
/*!****************************************************!*\
  !*** ./src/app/system/create/create.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/system/create/create.component.ts":
/*!***************************************************!*\
  !*** ./src/app/system/create/create.component.ts ***!
  \***************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let CreateComponent = class CreateComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.onConfirm = data.onConfirm;
    }
    confirm(data) {
        this.onConfirm(data);
        this.dialogRef.close();
    }
    ngOnInit() {
    }
};
CreateComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-advert-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/create/create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create.component.css */ "./src/app/system/create/create.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], CreateComponent);



/***/ }),

/***/ "./src/app/system/log/date-modal/date-modal.component.css":
/*!****************************************************************!*\
  !*** ./src/app/system/log/date-modal/date-modal.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  text-align: center;\r\n}\r\n\r\ndiv.mat-dialog-actions {\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2xvZy9kYXRlLW1vZGFsL2RhdGUtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL2xvZy9kYXRlLW1vZGFsL2RhdGUtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/system/log/date-modal/date-modal.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/system/log/date-modal/date-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: DateModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateModalComponent", function() { return DateModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DateModalComponent = class DateModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.oldDate = data.date;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DateModalComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DateModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-total-moisture-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./date-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/log/date-modal/date-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./date-modal.component.css */ "./src/app/system/log/date-modal/date-modal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DateModalComponent);



/***/ }),

/***/ "./src/app/system/log/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/system/log/list/list.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  text-align: center;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  max-width: 1500px;\r\n  width: 100%;\r\n}\r\n\r\ntable th:first-child {\r\n  width: 50px;\r\n}\r\n\r\ntable th:last-child {\r\n  width: 10px;\r\n}\r\n\r\n.mat-row:hover {\r\n  background-color: lightgrey;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #3f51b5;\r\n  color: white;\r\n  text-align: center;\r\n\r\n}\r\n\r\nmat-form-field {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n.mat-stroked-button {\r\n  background-color: white;\r\n  margin-right: 10px;\r\n}\r\n\r\n.mat-paginator {\r\n  background-color: #3f51b5;\r\n  color: white;\r\n}\r\n\r\n.footer-icon {\r\n  background-color: #3f51b5;\r\n  color: white;\r\n}\r\n\r\n.mat-card-title {\r\n  font-size: 10px;\r\n  padding: 0px;\r\n}\r\n\r\n.mat-card-content {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.mat-card-actions {\r\n  margin: 0px;\r\n}\r\n\r\nmat-card.example-card {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0px;\r\n  width: 20%;\r\n  background-color: #3f51b5;\r\n  color: white;\r\n  text-align: center;\r\n  height: 32px;\r\n  margin: 0px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2xvZy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7O0FBRWIiLCJmaWxlIjoic3JjL2FwcC9zeXN0ZW0vbG9nL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDE1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGFibGUgdGg6Zmlyc3QtY2hpbGQge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG50YWJsZSB0aDpsYXN0LWNoaWxkIHtcclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuLm1hdC1wYWdpbmF0b3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9vdGVyLWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxubWF0LWNhcmQuZXhhbXBsZS1jYXJkIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/system/log/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/system/log/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/system/log/modal/modal.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _date_modal_date_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../date-modal/date-modal.component */ "./src/app/system/log/date-modal/date-modal.component.ts");
/* harmony import */ var _shared_decoder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/decoder.service */ "./src/app/system/shared/decoder.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");












const URL = 'http://localhost:8080/lei/results/import';
let ListComponent = class ListComponent {
    // @ts-ignore
    constructor(datePipe, api, dialog, decoder, authService) {
        this.datePipe = datePipe;
        this.api = api;
        this.dialog = dialog;
        this.decoder = decoder;
        this.authService = authService;
        this.results = [];
        this.excelDate = new Date();
        this.headers = {};
        this.progress = 0;
        this.message = '';
        this.year = new Date().getFullYear();
        this.headers['Content-Type'] = 'application/json';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploader"]({
            url: URL
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.response = '';
        this.uploader.response.subscribe(res => this.response = res);
    }
    ngOnInit() {
        if (this.decoder.isAdmin() === true) {
            this.displayedColumns = ['no', 'protocolId', 'sampleId', 'ashValue', 'totalMoistureValue', 'calorificValue', 'date', 'actions'];
        }
        else {
            this.displayedColumns = ['no', 'protocolId', 'sampleId', 'ashValue', 'totalMoistureValue', 'calorificValue', 'date'];
        }
        this.uploader.onAfterAddingFile = (file) => {
            file.withCredentials = false;
        };
        this.getResults();
        console.log(this.decoder.getUser());
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    getResults() {
        if (this.decoder.getUser() !== 'admin') {
            this.api.get('/lei/results').subscribe((data) => this.dataSource.data = data.filter(x => x.customerId = this.decoder.getUser()).filter(x => x.date = new Date(x.date).toLocaleString()));
        }
        else {
            this.api.get('/lei/results').subscribe((data) => this.dataSource.data = data.filter(x => x.date = new Date(x.date).toLocaleString()));
        }
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;
    }
    upload() {
        this.progress = 0;
        this.currentFile = this.selectedFiles.item(0);
        this.api.upload(this.currentFile).subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
                this.message = 'Rezultatai įkelti.';
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpResponse"]) {
                this.message = event.body.message;
            }
        }, err => {
            this.progress = 0;
            // this.message = 'Could not upload the file!';
            this.currentFile = undefined;
        });
        this.selectedFiles = undefined;
        this.dataSource.data = [];
        setTimeout(() => this.getResults(), 1000);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Rezultatai įkelti.', '', 'success');
    }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    fileOverAnother(e) {
        this.hasAnotherDropZoneOver = e;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    delete(id) {
        this.api.delete(`/lei/results/${id}`).subscribe(() => this.results = this.results.filter(item => item.id !== id));
        this.dataSource.data = [];
        setTimeout(() => this.getResults(), 1000);
    }
    openDialog(result) {
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], {
            width: '250px',
            data: {
                id: result ? result.id : null,
                protocolId: result ? result.protocolId : null,
                sampleId: result ? result.sampleId : null,
                ashValue: result ? result.ashValue : null,
                totalMoistureValue: result ? result.totalMoistureValue : null,
                calorificValue: result ? result.calorificValue : null,
                date: result ? result.date : null
            }
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.api.post('/lei/results', data).subscribe((resultt) => {
                    const row = this.results.find(item => item.id === result.id);
                    if (row) {
                        row.protocolId = resultt.protocolId;
                        row.sampleId = resultt.sampleId;
                        row.ashValue = resultt.ashValue;
                        row.totalMoistureValue = resultt.totalMoistureValue;
                        row.calorificValue = resultt.calorificValue;
                        row.date = resultt.date;
                    }
                    else {
                        this.results = [...this.results, result];
                    }
                });
            }
        });
    }
    swalOrderDelete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Rezultatas ištrintas.', '', 'success');
    }
    displayFilter(value) {
        if (value === 'pilnas') {
            this.api.get('/lei/results');
            this.api.get('/lei/results')
                .subscribe((data) => this.dataSource.data = data
                .filter(x => ((x.date = new Date(x.date)
                .toLocaleString()))));
            const date = new Date();
            console.log(date.getFullYear() + '-' + date.getMonth() + 1);
            console.log(this.dataSource.data[1].date.toString()
                .substring(0, 10));
        }
    }
    openDialog2(excelDate) {
        const dialogRef = this.dialog.open(_date_modal_date_modal_component__WEBPACK_IMPORTED_MODULE_6__["DateModalComponent"], {
            width: '250px',
            data: {
                date: excelDate ? excelDate : null,
            }
        });
        dialogRef.afterClosed().subscribe(dataa => {
            if (dataa) {
                this.api.get('/lei/results')
                    // tslint:disable-next-line:no-shadowed-variable
                    .subscribe((data) => this.dataSource.data = data
                    .filter(x => ((x.date = new Date(x.date).toLocaleString()
                    .substring(0, 9).replace(',', '').replace('\\s+', '')) === dataa.date)));
                console.log(dataa.date);
            }
        });
    }
};
ListComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] },
    { type: _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _shared_decoder_service__WEBPACK_IMPORTED_MODULE_7__["DecoderService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/log/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.css */ "./src/app/system/log/list/list.component.css")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/system/log/modal/modal.component.css":
/*!******************************************************!*\
  !*** ./src/app/system/log/modal/modal.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  text-align: center;\r\n}\r\n\r\ndiv.mat-dialog-actions {\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2xvZy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zeXN0ZW0vbG9nL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaXYubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/system/log/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/system/log/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let ModalComponent = class ModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.oldProtocolId = data.protocolId;
        data.oldSampleId = data.sampleId;
        data.oldAshValue = data.ashValue;
        data.oldTotalMoistureValue = data.totalMoistureValue;
        data.oldCalorificValue = data.calorificValue;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    swalOrderUpdate() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Rezultatas papildytas.', '', 'success');
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/log/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/system/log/modal/modal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalComponent);



/***/ }),

/***/ "./src/app/system/order/form/Customers.ts":
/*!************************************************!*\
  !*** ./src/app/system/order/form/Customers.ts ***!
  \************************************************/
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
        names: []
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

/***/ "./src/app/system/order/form/DropdownList.ts":
/*!***************************************************!*\
  !*** ./src/app/system/order/form/DropdownList.ts ***!
  \***************************************************/
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
    { item_id: 48, item_text: 'Radiacija' },
];


/***/ }),

/***/ "./src/app/system/order/form/SampleType.ts":
/*!*************************************************!*\
  !*** ./src/app/system/order/form/SampleType.ts ***!
  \*************************************************/
/*! exports provided: sampleTypeGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sampleTypeGroups", function() { return sampleTypeGroups; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

let sampleTypeGroups = [{
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

/***/ "./src/app/system/order/form/form.component.css":
/*!******************************************************!*\
  !*** ./src/app/system/order/form/form.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\nh1 {\r\n  text-align: center;\r\n}\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 1000px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n\r\n}\r\n.example-full-width {\r\n  width: 100%;\r\n padding-bottom: 50px;\r\n}\r\ntd {\r\n  padding-right: 8px;\r\n}\r\nh3 {\r\n  text-align: center;\r\n}\r\ndiv{\r\n\r\n}\r\n.example-margin{\r\nmargin-right: 50px;\r\n}\r\n.form-control.ng-touched.ng-invalid{\r\n  border:2px solid red;\r\n}\r\n.container-fluid{\r\n  width: 600px;\r\n}\r\nol{\r\n  font-size: 25px;\r\n}\r\n.mat-raised-button {\r\n\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 5px;\r\n}\r\n.aParent div {\r\n  float: left;\r\n  clear: none;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL29yZGVyL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMkVBQTJFO0FBQzNFO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjOztBQUVoQjtBQUVBO0VBQ0UsV0FBVztDQUNaLG9CQUFvQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL29yZGVyL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly91bnBrZy5jb20vYm9vdHN0cmFwQDMuMy43L2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyk7XHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5kaXZ7XHJcblxyXG59XHJcbi5leGFtcGxlLW1hcmdpbntcclxubWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wubmctdG91Y2hlZC5uZy1pbnZhbGlke1xyXG4gIGJvcmRlcjoycHggc29saWQgcmVkO1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59XHJcbm9se1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB3aWR0aDogNXB4O1xyXG59XHJcbi5hUGFyZW50IGRpdiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY2xlYXI6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/system/order/form/form.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/system/order/form/form.component.ts ***!
  \*****************************************************/
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
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _DropdownList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownList */ "./src/app/system/order/form/DropdownList.ts");
/* harmony import */ var _Customers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Customers */ "./src/app/system/order/form/Customers.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/system/order/modal/modal.component.ts");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var _tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../tab.service */ "./src/app/tab.service.ts");
/* harmony import */ var _SampleType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SampleType */ "./src/app/system/order/form/SampleType.ts");













// tslint:disable-next-line:variable-name
const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
let FormComponent = class FormComponent {
    // tslint:disable-next-line:variable-name
    constructor(_formBuilder, 
    // tslint:disable-next-line:variable-name
    _formBuilder2, api, dialog) {
        this._formBuilder = _formBuilder;
        this._formBuilder2 = _formBuilder2;
        this.api = api;
        this.dialog = dialog;
        this.orders = {};
        this.samples = {};
        this.typeHasError = true;
        this.customers = [];
        this.sampleTypes = [];
        this.sampleList = [];
        this.showVar = false;
        this.dropdownList = Array();
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.customerForm = this._formBuilder.group({
            customerGroup: '',
        });
        this.sampleTypeForm = this._formBuilder2.group({
            sampleTypeGroup: '',
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
        this.api.get('/lei/st')
            .subscribe((samples) => {
            this.sampleTypes = samples;
            console.log(this.sampleTypes);
            for (const entry of this.sampleTypes) {
                console.log(entry);
                const letteri = entry.title.charAt(0);
                const name = entry.title;
                const result = _SampleType__WEBPACK_IMPORTED_MODULE_12__["sampleTypeGroups"].find(({ letter }) => letter === letteri);
                result.names.push(name);
                console.log(result);
            }
            console.log(_SampleType__WEBPACK_IMPORTED_MODULE_12__["sampleTypeGroups"]);
        });
        this.selectedOption = 'Kuro rūšis';
        this.samples.sampleWeight = 0;
        // tslint:disable-next-line:no-non-null-assertion
        this.customerGroupOptions = this.customerForm.get('customerGroup').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => this._filterGroup(value)));
        // tslint:disable-next-line:no-non-null-assertion
        this.sampleTypeGroupOptions = this.sampleTypeForm.get('sampleTypeGroup').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => this._filterGroup2(value)));
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
    delete2(titlee) {
        const result = this.sampleTypes.find(({ title }) => title === titlee);
        this.api.delete(`/lei/st/${result.title}`).subscribe(() => this.sampleTypes = this.sampleTypes.filter(item => item.title !== result.title));
        _SampleType__WEBPACK_IMPORTED_MODULE_12__["sampleTypeGroups"].push();
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
    _filterGroup2(value) {
        if (value) {
            return _SampleType__WEBPACK_IMPORTED_MODULE_12__["sampleTypeGroups"]
                .map(group => ({
                letter: group.letter, names: _filter(group.names, value)
            }))
                .filter(group => group.names.length > 0);
        }
        return _SampleType__WEBPACK_IMPORTED_MODULE_12__["sampleTypeGroups"];
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
            this.sampleList = [];
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
    openDialog2() {
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], {
            width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.api.post('/lei/st', data).subscribe((result) => {
                    const row = this.sampleTypes.find(item => item.id === result.id);
                    if (row) {
                        row.title = result.title;
                    }
                    else {
                        this.sampleTypes = [...this.sampleTypes, result];
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/order/form/form.component.html")).default,
        providers: [_tab_service__WEBPACK_IMPORTED_MODULE_11__["TabService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.css */ "./src/app/system/order/form/form.component.css")).default]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/system/order/modal/modal.component.css":
/*!********************************************************!*\
  !*** ./src/app/system/order/modal/modal.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  text-align: center;\r\n}\r\n\r\ndiv.mat-dialog-actions {\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL29yZGVyL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9vcmRlci9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2Lm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/system/order/modal/modal.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/system/order/modal/modal.component.ts ***!
  \*******************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/order/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/system/order/modal/modal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalComponent);



/***/ }),

/***/ "./src/app/system/system-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/system/system-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SystemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemRoutingModule", function() { return SystemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _log_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log/list/list.component */ "./src/app/system/log/list/list.component.ts");




const routes = [
    {
        path: '',
        component: _log_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }
];
let SystemRoutingModule = class SystemRoutingModule {
};
SystemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SystemRoutingModule);



/***/ }),

/***/ "./src/app/system/system.module.ts":
/*!*****************************************!*\
  !*** ./src/app/system/system.module.ts ***!
  \*****************************************/
/*! exports provided: SystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModule", function() { return SystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _system_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-routing.module */ "./src/app/system/system-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ "./src/app/system/create/create.component.ts");
/* harmony import */ var _log_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./log/modal/modal.component */ "./src/app/system/log/modal/modal.component.ts");
/* harmony import */ var _order_form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order/form/form.component */ "./src/app/system/order/form/form.component.ts");
/* harmony import */ var _log_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./log/list/list.component */ "./src/app/system/log/list/list.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm2015/mat-table-exporter.js");
/* harmony import */ var _log_date_modal_date_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./log/date-modal/date-modal.component */ "./src/app/system/log/date-modal/date-modal.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");














let SystemModule = class SystemModule {
};
SystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_log_date_modal_date_modal_component__WEBPACK_IMPORTED_MODULE_12__["DateModalComponent"], _log_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"], _order_form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"], _log_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _system_routing_module__WEBPACK_IMPORTED_MODULE_3__["SystemRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"],
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_11__["MatTableExporterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileUploadModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        exports: [_log_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"]],
        entryComponents: [
            _log_date_modal_date_modal_component__WEBPACK_IMPORTED_MODULE_12__["DateModalComponent"], _log_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"]
        ]
    })
], SystemModule);



/***/ }),

/***/ "./src/app/tab.service.ts":
/*!********************************!*\
  !*** ./src/app/tab.service.ts ***!
  \********************************/
/*! exports provided: TabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabService", function() { return TabService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TabService = class TabService {
    constructor() {
        this.selectedInput = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
    }
};
TabService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TabService);



/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~auth-user-module~system-system-module-es2015.js.map