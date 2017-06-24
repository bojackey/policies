import { Component } from '@angular/core';
import { Policy, PrimaryInsured, Risk, Construction } from './policy';
import { PolicyService } from './policy.service';

@Component({
  selector: 'policy-list',
  template: require('./policy-list.component.html'),
  styles: [require('./policy-list.component.css')],
  providers: [PolicyService]
})
export class PolicyListComponent {
  public policies: Policy[];
  public errorMessage;

  constructor(public policyService: PolicyService)
  {
    this.getPolicies();
  }

  getPolicies() {
    this.policyService.getPolicies()
      .then((policies: Policy[]) => {
        this.policies = policies;
      })
      .catch((error) => console.error(error));
  }
}