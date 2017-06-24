"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./components/app/app.component");
var home_component_1 = require("./components/home/home.component");
var policy_component_1 = require("./components/policy/policy.component");
var policy_form_component_1 = require("./components/policy/policy-form.component");
var policy_list_component_1 = require("./components/policy/policy-list.component");
var policy_service_1 = require("./components/policy/policy.service");
exports.sharedConfig = {
    bootstrap: [app_component_1.AppComponent],
    declarations: [
        app_component_1.AppComponent,
        home_component_1.HomeComponent,
        policy_component_1.PolicyComponent,
        policy_form_component_1.PolicyFormComponent,
        policy_list_component_1.PolicyListComponent
    ],
    providers: [
        policy_service_1.PolicyService
    ],
    imports: [
        platform_browser_1.BrowserModule, forms_1.FormsModule,
        router_1.RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: home_component_1.HomeComponent },
            { path: 'policies', component: policy_list_component_1.PolicyListComponent },
            { path: 'add-policy', component: policy_form_component_1.PolicyFormComponent },
            { path: 'policy/:id', component: policy_component_1.PolicyComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
//# sourceMappingURL=app.module.shared.js.map