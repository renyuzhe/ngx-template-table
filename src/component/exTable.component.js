/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
var ExTableComponent = (function () {
    function ExTableComponent() {
        this.onSearch = new EventEmitter();
        this.onRowClick = new EventEmitter();
        this.onBtnClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ExTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.index = 1;
        this.size = 10;
        this.searchConfig.map(function (item) {
            if (item.type === 'time') {
                item.value = null;
            }
            if (item.type === 'timeBetween') {
                item.value = null;
                item.secondValue = null;
            }
        });
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ExTableComponent.prototype.btnClick = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.onBtnClick.emit(key);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ExTableComponent.prototype.pageIndexChange = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.index = index;
        console.log(index);
        this.search();
    };
    /**
     * @return {?}
     */
    ExTableComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        console.log(this.tableConfig);
        console.log(this.tableData);
        var /** @type {?} */ searchs = {
            index: this.index,
            size: this.size,
            queryList: []
        };
        this.searchConfig.map(function (item) {
            if (item.value || item.secondValue || item.value === 0 || item.secondValue === 0) {
                if (item.secondValue) {
                    var /** @type {?} */ search = {
                        key: item.key,
                        primaryValue: item.value,
                        secondValue: item.secondValue
                    };
                    searchs.queryList.push(search);
                }
                else {
                    var /** @type {?} */ search = {
                        key: item.key,
                        primaryValue: item.value
                    };
                    searchs.queryList.push(search);
                }
            }
        });
        var /** @type {?} */ searchList = new Object();
        var /** @type {?} */ key;
        searchs.queryList.map(function (item, index) {
            key = item.key;
            searchList[key] = item;
        });
        searchs.queryList = searchList;
        this.onSearch.emit(searchs);
    };
    /**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    ExTableComponent.prototype.rowClick = /**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    function (row, index) {
        this.onRowClick.emit(row);
        for (var /** @type {?} */ i = 0; i < this.tableList.nativeElement.children.length; i++) {
            this.tableList.nativeElement.children[i].style.backgroundColor = 'white';
        }
        this.tableList.nativeElement.children[index].style.backgroundColor = 'RGBA(236,246,253,1)';
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ExTableComponent.prototype.nzPageSizeChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log(event);
        this.size = event;
        this.search();
    };
    /**
     * @return {?}
     */
    ExTableComponent.prototype.reSet = /**
     * @return {?}
     */
    function () {
        this.searchConfig.map(function (item) {
            if (item.value) {
                item.value = null;
            }
            if (item.secondValue) {
                item.secondValue = null;
            }
        });
    };
    ExTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ex-table',
                    template: "<div nz-row> <div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"12\" [nzLg]=\"12\" [nzXl]=\"8\" *ngFor=\"let item of searchConfig\" class=\"search\"> <div nz-col [nzSpan]=\"8\" class=\"label\"> <label class=\"labelItem\">{{item.label}}</label> </div> <ng-container [ngSwitch]='item.type'> <ng-container *ngSwitchCase=\"'text'\"> <div nz-col [nzSpan]=\"16\"> <nz-input [(ngModel)]=\"item.value\" [nzPlaceHolder]=\"'请输入' + item.label\" [nzSize]=\"'large'\"></nz-input> </div> </ng-container> <ng-container *ngSwitchCase=\"'time'\"> <div nz-col [nzSpan]=\"16\" class=\"time\"> <nz-datepicker [(ngModel)]=\"item.value\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请选择' + item.label\"></nz-datepicker> </div> </ng-container> <ng-container *ngSwitchCase=\"'timeBetween'\"> <div nz-col [nzSpan]=\"16\" class=\"timeBetween\"> <nz-datepicker [(ngModel)]=\"item.value\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请选择起始' + item.label\"></nz-datepicker> <label>至</label> <nz-datepicker [(ngModel)]=\"item.secondValue\" [nzSize]=\"'large'\" [nzPlaceHolder]=\"'请选择终止' + item.label\"></nz-datepicker> </div> </ng-container> <ng-container *ngSwitchCase=\"'select'\"> <div nz-col [nzSpan]=\"16\" class=\"select\"> <nz-select nzAllowClear [nzPlaceHolder]=\"'请选择' + item.label\" [(ngModel)]=\"item.value\" [nzSize]=\"'large'\" nzShowSearch> <nz-option *ngFor=\"let option of item.searchList\" [nzLabel]=\"option.label\" [nzValue]=\"option.value\" [nzDisabled]=\"option.disabled\"> </nz-option> </nz-select> </div> </ng-container> <ng-container *ngSwitchCase=\"'mulSelect'\"> <div nz-col [nzSpan]=\"16\" class=\"select\"> <nz-select [nzSize]=\"'large'\" [nzMode]=\"'multiple'\" [nzPlaceHolder]=\"'请选择人员'\" [(ngModel)]=\"item.value\" [nzNotFoundContent]=\"'无法找到'\"> <nz-option *ngFor=\"let option of item.searchList\" [nzLabel]=\"option.label\" [nzValue]=\"option.value\" [nzDisabled]=\"option.disabled\"> </nz-option> </nz-select> </div> </ng-container> </ng-container> </div> </div> <div class=\"btnList\"> <div class=\"btns\"> <button *ngFor = \"let item of buttonConfig\" nz-button [nzType]=\"'primary'\" (click)=\"btnClick(item.key)\"> <span>{{item.labal}}</span> </button> <ng-container *ngIf=\"searchConfig.length > 0\"> <button nz-button [nzType]=\"'primary'\" (click)=\"reSet()\"> <span>重置</span> </button> <button nz-button [nzType]=\"'primary'\" (click)=\"search()\"> <span>搜索</span> </button> </ng-container> </div> </div> <nz-table #nzTable [nzTotal]=\"totel\" [nzShowSizeChanger]=\"true\" (nzPageSizeChange)=\"nzPageSizeChange($event)\" [nzPageSizeSelectorValues]=\"pageSizeSelectorValues\" [nzAjaxData]=\"tableData\" [nzShowTotal] = \"true\" (nzPageIndexChange)=\"pageIndexChange($event)\"> <thead nz-thead> <tr> <th nz-th *ngFor=\"let label of tableConfig\" [nzWidth] = \"label.width\"> <span>{{label.name}}</span> </th> </tr> </thead> <tbody nz-tbody #tableList> <tr nz-tbody-tr *ngFor=\"let data of tableData; let index = index\" (click)=\"rowClick(data, index)\"> <!-- <td nz-td> <ng-container *ngTemplateOutlet=\"test.cell; context: {row: data, index: index}\"> </ng-container> </td> --> <td nz-td *ngFor=\"let item of tableConfig\"> <ng-container [ngSwitch]='item.type'> <ng-container *ngSwitchCase=\"'text'\">{{data[item.key]}}</ng-container> <ng-container *ngSwitchDefault> <ng-container *ngTemplateOutlet=\"item.cell; context: {row: data, index: index, key: item.key}\"></ng-container> </ng-container> </ng-container> </td> </tr> </tbody> </nz-table>",
                    styles: [".search { margin: 10px 0 0px 0px; padding: 0 10px; display: flex; flex-direction: row; align-items: center; } .btnList { display: flex; flex-direction: row-reverse; margin: 10px 10px; } .label { display: flex; flex-direction: row-reverse; } .oneDatePick { width: 100%; } .time nz-datepicker { width: 100%; } .timeBetween { display: flex; flex-direction: row; justify-content: space-between; align-items: center; } .timeBetween nz-datepicker { width: 45%; } .select nz-select { width: 100%; } .labelItem { margin-right: 10px; font-size: 12px; } .labelItem::after { content: \":\" } "]
                },] },
    ];
    /** @nocollapse */
    ExTableComponent.ctorParameters = function () { return []; };
    ExTableComponent.propDecorators = {
        "test": [{ type: Input, args: ['test',] },],
        "searchConfig": [{ type: Input, args: ['searchConfig',] },],
        "tableConfig": [{ type: Input, args: ['tableConfig',] },],
        "buttonConfig": [{ type: Input, args: ['buttonConfig',] },],
        "tableData": [{ type: Input, args: ['tableData',] },],
        "totel": [{ type: Input, args: ['totel',] },],
        "pageSizeSelectorValues": [{ type: Input, args: ['pageSizeSelectorValues',] },],
        "onSearch": [{ type: Output },],
        "onRowClick": [{ type: Output },],
        "onBtnClick": [{ type: Output },],
        "tableList": [{ type: ViewChild, args: ['tableList',] },],
    };
    return ExTableComponent;
}());
export { ExTableComponent };
function ExTableComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ExTableComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ExTableComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ExTableComponent.propDecorators;
    /** @type {?} */
    ExTableComponent.prototype.index;
    /** @type {?} */
    ExTableComponent.prototype.size;
    /** @type {?} */
    ExTableComponent.prototype.test;
    /** @type {?} */
    ExTableComponent.prototype.searchConfig;
    /** @type {?} */
    ExTableComponent.prototype.tableConfig;
    /** @type {?} */
    ExTableComponent.prototype.buttonConfig;
    /** @type {?} */
    ExTableComponent.prototype.tableData;
    /** @type {?} */
    ExTableComponent.prototype.totel;
    /** @type {?} */
    ExTableComponent.prototype.pageSizeSelectorValues;
    /** @type {?} */
    ExTableComponent.prototype.onSearch;
    /** @type {?} */
    ExTableComponent.prototype.onRowClick;
    /** @type {?} */
    ExTableComponent.prototype.onBtnClick;
    /** @type {?} */
    ExTableComponent.prototype.tableList;
}
//# sourceMappingURL=exTable.component.js.map