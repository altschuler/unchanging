// TODO: the generic U is to prevent a webpack error, fix when fixable!
export function ins<T extends {[key in K]: Array<any> }, K extends keyof T, U>(data: T, field: K & keyof T, item: U, at: number) {
    const arr = data[field];
    return up(data, {
        [field]: [
            ...arr.slice(0, at),
            item,
            ...arr.slice(at),
        ],
    } as any);
}

export function rm<T extends {[key in K]: Array<any> }, K extends keyof T>(data: T, field: K & keyof T, at: number) {
    const arr = data[field] as Array<any>;

    return up(data, {
        [field]: [
            ...arr.slice(0, at),
            ...arr.slice(at + 1),
        ],
    } as any);
}

// TODO: the generic U is to prevent a webpack error, fix when fixable!
export function set<T, K extends keyof T, U extends T[K]>(data: T, prop: K & keyof T, value: U) {
    return Object.assign({}, data, { [prop]: value });
}

export function up<T>(data: T, update: Partial<T>): T {
    return Object.assign({}, data, update);
}

export function upArrBy<T, U>(data: T, field: string, predicate: (x: U, i?: number) => boolean, updater: (x: U, i?: number) => U) {
    return up(data, {
        [field]: data[field].map((x: U, i) => {
            const clone = Object.assign({}, x);
            if (predicate(clone, i)) {
                return updater(clone, i);
            }
            return clone;
        }),
    } as any);
}

export function replAt<T extends {[key in K]: Array<any> }, K extends keyof T, U>(data: T, field: K & keyof T, at: number, updater: (x: U, i?: number) => U) {
    return up(data, {
        [field]: data[field].map((x: U, i) => {
            const clone = Object.assign({}, x);
            if (at === i) {
                return updater(clone, i);
            }
            return clone;
        }),
    } as any);
}

export function upArr<T extends {[key in K]: Array<any> }, K extends keyof T, U extends T[K]>(data: T, field: K & keyof T, updater: (x: U, i?: number) => U) {
    return up(data, {
        [field]: data[field].map((x: U, i) => {
            const clone = Object.assign({}, x);
            return updater(clone, i);
        }),
    } as any);
}

export function mp<T>(field: string, srcVal: T) {
    return (obj: object) => obj[field] === srcVal;
}
