export declare function ins<T extends {
    [key in K]: Array<any>;
}, K extends keyof T, U>(data: T, field: K & keyof T, item: U, at: number): T;
export declare function rm<T extends {
    [key in K]: Array<any>;
}, K extends keyof T>(data: T, field: K & keyof T, at: number): T;
export declare function set<T, K extends keyof T, U extends T[K]>(data: T, prop: K & keyof T, value: U): {} & T & {
    [x: string]: U;
};
export declare function up<T>(data: T, update: Partial<T>): T;
export declare function upArrBy<T, U>(data: T, field: string, predicate: (x: U, i?: number) => boolean, updater: (x: U, i?: number) => U): T;
export declare function replAt<T extends {
    [key in K]: Array<any>;
}, K extends keyof T, U>(data: T, field: K & keyof T, at: number, updater: (x: U, i?: number) => U): T;
export declare function upArr<T extends {
    [key in K]: Array<any>;
}, K extends keyof T, U extends T[K]>(data: T, field: K & keyof T, updater: (x: U, i?: number) => U): T;
export declare function mp<T>(field: string, srcVal: T): (obj: object) => boolean;
