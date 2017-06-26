import { Component } from '@angular/core';
import { Policy, PrimaryInsured, Risk, Construction } from './policy';
import { PolicyService } from './policy.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'policy-form',
  template: require('./policy-form.component.html'),
  styles: [require('./policy-form.component.css')],
  providers: [PolicyService]
})
export class PolicyFormComponent {
  public policy: Policy = new Policy();
  public metadata: any;
  public errorMessage;

  constructor(public policyService: PolicyService) {
    this.policy.risk = new Risk();
    this.policy.primaryInsured = new PrimaryInsured();
    this.getMetadata();
  }

  getMetadata() {
    this.policyService.getMetadata()
      .then(metadata => {
        console.log("PolicyFormComponent " + "getMetadata");
        this.metadata = metadata;
        console.log("PolicyFormComponent " + metadata.constructionTypes[1].key);
      })
      .catch((error) => console.error(error));
  }

  putPolicy(policy) {
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
      .then(result => console.log(result))
      .catch((error) => console.error(error));
  }
}
