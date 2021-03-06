﻿import { Component } from '@angular/core';
import { Policy, PrimaryInsured, Risk, Construction } from './policy';
import { PolicyService } from './policy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'policy',
  template: require('./policy.component.html'),
  styles: [require('./policy.component.css')],
  providers: [PolicyService]
})
export class PolicyComponent {
  public policy: Policy;
  public constructionType: string;
  public metadata: any;
  public errorMessage;

  id: number;
  private sub: any;

  constructor(public policyService: PolicyService, private route: ActivatedRoute) {
    this.getMetadata();
  }

  getMetadata() {
    this.policyService.getMetadata()
      .then(metadata => {
        this.metadata = metadata;
        this.getPolicy(this.id);
      })
      .catch((error) => console.error(error));
  }

  getPolicy(id) {
    this.policyService.getPolicy(id)
      .then((policy: Policy) => {
        this.policy = policy;
        this.constructionType = this.policyService.getConstructionTypeName(this.policy.risk.construction);
      })
      .catch((error) => console.error(error));
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
