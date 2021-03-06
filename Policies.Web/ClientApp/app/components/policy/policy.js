"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Construction;
(function (Construction) {
    Construction[Construction["Unknown"] = 0] = "Unknown";
    Construction[Construction["SiteBuiltHome"] = 1] = "SiteBuiltHome";
    Construction[Construction["ModularHome"] = 2] = "ModularHome";
    Construction[Construction["SingleWide"] = 3] = "SingleWide";
    Construction[Construction["ManufacturedHome"] = 4] = "ManufacturedHome";
    Construction[Construction["DoubleWideManufacturedHome"] = 5] = "DoubleWideManufacturedHome";
})(Construction = exports.Construction || (exports.Construction = {}));
var Risk = (function () {
    function Risk() {
        this.id = 0;
    }
    return Risk;
}());
exports.Risk = Risk;
var PrimaryInsured = (function () {
    function PrimaryInsured() {
        this.id = 0;
    }
    return PrimaryInsured;
}());
exports.PrimaryInsured = PrimaryInsured;
var Policy = (function () {
    function Policy() {
        this.policyNumber = 0;
    }
    return Policy;
}());
exports.Policy = Policy;
//# sourceMappingURL=policy.js.map