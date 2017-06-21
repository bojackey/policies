import { Component } from '@angular/core';

@Component({
  selector: 'policy',
  template: require('./policy.component.html')
})
export class PolicyComponent {
  public policy: Policy;

  constructor() {
    this.policy = {
      policyNumber: 0,
      effectiveDate: new Date(),
      expirationDate: new Date(),
      primaryInsured: new PrimaryInsured(
        "tom", "jones", "1 2nd street", "anytown", "anystate", "00000"
      ),
      risk: new Risk(
        Construction.SiteBuiltHome, 1959, "1 2nd street", "anytown", "anystate", "00000"
      )
    }
  }
}

export class PrimaryInsured {

  constructor(
    public givenName: string,
    public familyName: string,
    public streetAddress: string,
    public city: string,
    public state: string,
    public zip: string
  ) { }

  get name(): string { return `${this.givenName} ${this.familyName}` };
}

export enum Construction {
  Unknown,
  SiteBuiltHome,
  ModularHome,
  SingleWide,
  ManufacturedHome,
  DoubleWideManufacturedHome
}

export class Risk {
  constructor(
    public construction: Construction,
    public yearBuilt: number,
    public streetAddress: string,
    public city: string,
    public state: string,
    public zip: string
  ) { }

  riskTypeName_(riskType) {
    return (Construction[riskType]).replace(/([^A-Z])([A-Z])/g, '$1 $2')
  }

  get riskTypeNames() {
    const objValues = Object.keys(Construction).map(k => Construction[k]);
    const values = objValues.filter(v => typeof v === "number") as number[];
    return values.map(this.riskTypeName_);
  }

  get riskTypeName() {
    return this.riskTypeName_(this.construction)
  }
}

export class Policy {

  policyNumber: number;
  effectiveDate: Date;
  expirationDate: Date;

  primaryInsured: PrimaryInsured;
  risk: Risk;

    constructor(
    policyNumber: number,
    effectiveDate: Date,
    expirationDate: Date,
    primaryInsured: PrimaryInsured,
    risk: Risk
  ) {
    this.policyNumber = policyNumber;
    this.effectiveDate = effectiveDate;
    this.expirationDate = expirationDate;
    this.primaryInsured = primaryInsured;
    this.risk = risk;
  }
}
