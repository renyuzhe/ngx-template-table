import { OnInit, EventEmitter } from '@angular/core';
import { Searchs } from './exTable.model';
export declare class ExTableComponent implements OnInit {
    index: number;
    size: number;
    test: any;
    searchConfig: any;
    tableConfig: any;
    buttonConfig: any;
    tableData: any;
    totel: any;
    pageSizeSelectorValues: any;
    onSearch: EventEmitter<Searchs>;
    onRowClick: EventEmitter<any>;
    onBtnClick: EventEmitter<string>;
    tableList: any;
    constructor();
    ngOnInit(): void;
    btnClick(key: any): void;
    pageIndexChange(index: any): void;
    search(): void;
    rowClick(row: any, index: any): void;
    nzPageSizeChange(event: any): void;
    reSet(): void;
}
