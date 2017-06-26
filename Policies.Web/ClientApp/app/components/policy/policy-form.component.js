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
var policy_1 = require("./policy");
var policy_service_1 = require("./policy.service");
var PolicyFormComponent = (function () {
    function PolicyFormComponent(policyService) {
        this.policyService = policyService;
        this.policy = new policy_1.Policy();
        this.policy.risk = new policy_1.Risk();
        this.policy.primaryInsured = new policy_1.PrimaryInsured();
        this.getMetadata();
    }
    PolicyFormComponent.prototype.getMetadata = function () {
        var _this = this;
        this.policyService.getMetadata()
            .then(function (metadata) {
            _this.metadata = metadata;
        })
            .catch(function (error) { return console.error(error); });
    };
    PolicyFormComponent.prototype.putPolicy = function (policy) {
        this.policy.effectiveDate = policy.effectiveDate;
        this.policy.expirationDate = policy.expirationDate;
        this.policy.primaryInsured.givenName = policy.primaryInsured.givenName;
        this.policy.primaryInsured.familyName = policy.primaryInsured.familyName;
        this.policy.primaryInsured.streetAddress = policy.primaryInsured.streetAddress;
        this.policy.primaryInsured.city = policy.primaryInsured.city;
        this.policy.primaryInsured.state = policy.primaryInsured.state;
        this.policy.primaryInsured.zip = policy.primaryInsured.zip;
        this.policy.risk.construction = policy.risk.construction;
        this.policy.risk.yearBuilt = policy.risk.yearBuilt;
        this.policy.risk.streetAddress = policy.risk.streetAddress;
        this.policy.risk.city = policy.risk.city;
        this.policy.risk.state = policy.risk.state;
        this.policy.risk.zip = policy.risk.zip;
        console.log(policy.risk.construction);
        console.log(this.policy);
        this.policyService.putPolicy(this.policy)
            .then(function (result) { return console.log(result); })
            .catch(function (error) { return console.error(error); });
    };
    return PolicyFormComponent;
}());
PolicyFormComponent = __decorate([
    core_1.Component({
        selector: 'policy-form',
        template: require('./policy-form.component.html'),
        styles: [require('./policy-form.component.css')],
        providers: [policy_service_1.PolicyService]
    }),
    __metadata("design:paramtypes", [policy_service_1.PolicyService])
], PolicyFormComponent);
exports.PolicyFormComponent = PolicyFormComponent;
//# sourceMappingURL=policy-form.component.js.map