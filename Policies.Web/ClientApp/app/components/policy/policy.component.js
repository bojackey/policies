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
var router_1 = require("@angular/router");
var PolicyComponent = (function () {
    function PolicyComponent(policyService, route) {
        this.policyService = policyService;
        this.route = route;
    }
    PolicyComponent.prototype.getPolicy = function (id) {
        var _this = this;
        this.policyService.getPolicy(id)
            .then(function (policy) {
            _this.policy = policy;
        })
            .catch(function (error) { return console.error(error); });
    };
    PolicyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.getPolicy(_this.id);
        });
    };
    PolicyComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return PolicyComponent;
}());
PolicyComponent = __decorate([
    core_1.Component({
        selector: 'policy',
        template: require('./policy.component.html'),
        styles: [require('./policy.component.css')],
        providers: [policy_service_1.PolicyService]
    }),
    __metadata("design:paramtypes", [policy_service_1.PolicyService, router_1.ActivatedRoute])
], PolicyComponent);
exports.PolicyComponent = PolicyComponent;
//# sourceMappingURL=policy.component.js.map