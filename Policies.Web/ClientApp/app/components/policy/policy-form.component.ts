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
  public errorMessage;

  constructor(public policyService: PolicyService) {
  }

  putPolicy() {
    this.policyService.putPolicy(this.policy)
      .then(result => console.log(result))
      .catch((error) => console.error(error));
  }
}
