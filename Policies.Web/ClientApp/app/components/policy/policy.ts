
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

export class Risk {
  public construction: Construction;
  public yearBuilt: number;
  public streetAddress: string;
  public city: string;
  public state: string;
  public zip: string;
  public constructionName: string;
}

export interface Policy {

  policyNumber: number;
  effectiveDate: Date;
  expirationDate: Date;

  primaryInsured: PrimaryInsured;
  risk: Risk;

}
