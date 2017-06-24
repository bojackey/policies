import { Component } from '@angular/core';
import { Policy, PrimaryInsured, Risk, Construction } from './policy';
import { PolicyService } from './policy.service';

@Component({
  selector: 'policy',
  template: require('./policy.component.html'),
  providers: [PolicyService]
})
export class PolicyComponent {
  public policy: Policy;
  public errorMessage;

  constructor(public policyService: PolicyService) {
    this.getPolicy();
  }

  getPolicy() {
    this.policyService.getPolicy("1")
    .then((policy: Policy) => {
      this.policy = policy;
    })
    .catch((error) => console.error(error));
  }
}
