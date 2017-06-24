
export interface PrimaryInsured {
  givenName: string;
  familyName: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}

  //public get name(): string { return `${this.givenName} ${this.familyName}` };

export enum Construction {
  Unknown,
  SiteBuiltHome,
  ModularHome,
  SingleWide,
  ManufacturedHome,
  DoubleWideManufacturedHome
}

export interface Risk {
  construction: Construction;
  yearBuilt: number;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}

//riskTypeName_(riskType) {
//  return (Construction[riskType]).replace(/([^A-Z])([A-Z])/g, '$1 $2')
//}

//get riskTypeNames() {
//  const objValues = Object.keys(Construction).map(k => Construction[k]);
//  const values = objValues.filter(v => typeof v === "number") as number[];
//  return values.map(this.riskTypeName_);
//}

//get riskTypeName() {
//  return this.riskTypeName_(this.construction)
//}

export interface Policy {

  policyNumber: number;
  effectiveDate: Date;
  expirationDate: Date;

  primaryInsured: PrimaryInsured;
  risk: Risk;

}
