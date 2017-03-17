"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: the generic U is to prevent a webpack error, fix when fixable!
function ins(data, field, item, at) {
    var arr = data[field];
    return up(data, (_a = {},
        _a[field] = arr.slice(0, at).concat([
            item
        ], arr.slice(at)),
        _a));
    var _a;
}
exports.ins = ins;
function rm(data, field, at) {
    var arr = data[field];
    return up(data, (_a = {},
        _a[field] = arr.slice(0, at).concat(arr.slice(at + 1)),
        _a));
    var _a;
}
exports.rm = rm;
// TODO: the generic U is to prevent a webpack error, fix when fixable!
function set(data, prop, value) {
    return Object.assign({}, data, (_a = {}, _a[prop] = value, _a));
    var _a;
}
exports.set = set;
function up(data, update) {
    return Object.assign({}, data, update);
}
exports.up = up;
function upArrBy(data, field, predicate, updater) {
    return up(data, (_a = {},
        _a[field] = data[field].map(function (x, i) {
            var clone = Object.assign({}, x);
            if (predicate(clone, i)) {
                return updater(clone, i);
            }
            return clone;
        }),
        _a));
    var _a;
}
exports.upArrBy = upArrBy;
function replAt(data, field, at, updater) {
    return up(data, (_a = {},
        _a[field] = data[field].map(function (x, i) {
            var clone = Object.assign({}, x);
            if (at === i) {
                return updater(clone, i);
            }
            return clone;
        }),
        _a));
    var _a;
}
exports.replAt = replAt;
function upArr(data, field, updater) {
    return up(data, (_a = {},
        _a[field] = data[field].map(function (x, i) {
            var clone = Object.assign({}, x);
            return updater(clone, i);
        }),
        _a));
    var _a;
}
exports.upArr = upArr;
function mp(field, srcVal) {
    return function (obj) { return obj[field] === srcVal; };
}
exports.mp = mp;
