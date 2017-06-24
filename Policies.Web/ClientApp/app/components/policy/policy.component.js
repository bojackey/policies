"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var policy_service_1 = require("./policy.service");
var PolicyComponent = (function () {
    function PolicyComponent(policyService) {
        this.policyService = policyService;
        this.getPolicy();
    }
    PolicyComponent.prototype.getPolicy = function () {
        var _this = this;
        this.policyService.getPolicy("1")
            .then(function (policy) {
            _this.policy = policy;
        })
            .catch(function (error) { return console.error(error); });
    };
    return PolicyComponent;
}());
PolicyComponent = __decorate([
    core_1.Component({
        selector: 'policy',
        template: require('./policy.component.html'),
        providers: [policy_service_1.PolicyService]
    }),
    __metadata("design:paramtypes", [policy_service_1.PolicyService])
], PolicyComponent);
exports.PolicyComponent = PolicyComponent;
//# sourceMappingURL=policy.component.js.map