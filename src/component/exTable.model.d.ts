export interface Searchs {
    index: number;
    size: number;
    queryList?: any;
}
export declare class Search {
    label: string;
    key: string;
    type: string;
    value?: number | boolean | string | number[] | boolean[] | string[] | null;
    secondValue?: any;
    searchList?: any[];
}
export declare class TableItem {
    type: string;
    key?: string;
    name: string;
    cell?: any;
    value?: any;
    width?: string;
}
export declare class BottonItem {
    key: string;
    labal: string;
}
export interface TimeBetween {
    startTime: string;
    endTime: string;
}
