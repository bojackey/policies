
export enum Construction {
  Unknown,
  SiteBuiltHome,
  ModularHome,
  SingleWide,
  ManufacturedHome,
  DoubleWideManufacturedHome
}

export class Risk {
  public id: number;
  public construction: Construction;
  public yearBuilt: number;
  public streetAddress: string;
  public city: string;
  public state: string;
  public zip: string;
  constructor() { this.id = 0; }
}

export class PrimaryInsured {
  public id: number;
  public givenName: string;
  public familyName: string;
  public streetAddress: string;
  public city: string;
  public state: string;
  public zip: string;
  constructor() { this.id = 0; }
}

export class Policy {
  public policyNumber: number;
  public effectiveDate: Date;
  public expirationDate: Date;

  public primaryInsured: PrimaryInsured;
  public risk: Risk;
  constructor() { this.policyNumber = 0; }
}
