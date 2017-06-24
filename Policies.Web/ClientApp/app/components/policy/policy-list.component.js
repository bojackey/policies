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
var PolicyListComponent = (function () {
    function PolicyListComponent(policyService) {
        this.policyService = policyService;
        this.getPolicies();
    }
    PolicyListComponent.prototype.getPolicies = function () {
        var _this = this;
        this.policyService.getPolicies()
            .then(function (policies) {
            _this.policies = policies;
        })
            .catch(function (error) { return console.error(error); });
    };
    return PolicyListComponent;
}());
PolicyListComponent = __decorate([
    core_1.Component({
        selector: 'policy-list',
        template: require('./policy-list.component.html'),
        providers: [policy_service_1.PolicyService]
    }),
    __metadata("design:paramtypes", [policy_service_1.PolicyService])
], PolicyListComponent);
exports.PolicyListComponent = PolicyListComponent;
//# sourceMappingURL=policy-list.component.js.map