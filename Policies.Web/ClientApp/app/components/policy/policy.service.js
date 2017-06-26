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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var PolicyService = (function () {
    function PolicyService(http, originUrl) {
        var _this = this;
        this.http = http;
        this.policyUrl = originUrl + "/api/policy/";
        this.metadataUrl = originUrl + "/api/metadata/";
        this.getMetadata()
            .then(function (metadata) {
            console.log("PolicyFormComponent " + "getMetadata");
            _this.metadata = metadata;
            console.log("PolicyFormComponent " + metadata.constructionTypes[1].key);
        })
            .catch(function (error) { return console.error(error); });
    }
    PolicyService.prototype.getConstructionTypeName = function (construction) {
        var theOne = this.metadata.constructionTypes.find(function (kvp) {
            return kvp.value === construction;
        });
        return theOne.key;
    };
    PolicyService.prototype.getMetadata = function () {
        return this.http.get(this.metadataUrl)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    PolicyService.prototype.getPolicies = function () {
        return this.http.get(this.policyUrl)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    PolicyService.prototype.getPolicy = function (id) {
        return this.http.get(this.policyUrl + id)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    PolicyService.prototype.putPolicy = function (policy) {
        var obj = policy;
        //var obj = { policy: policy, risk: policy.risk, insured: policy.primaryInsured };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.policyUrl, obj, options)
            .toPromise()
            .catch(this.handleError);
    };
    PolicyService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return PolicyService;
}());
PolicyService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject('ORIGIN_URL')),
    __metadata("design:paramtypes", [http_1.Http, Object])
], PolicyService);
exports.PolicyService = PolicyService;
//# sourceMappingURL=policy.service.js.map