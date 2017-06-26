import { Injectable, Inject } from '@angular/core';
import { Policy, PrimaryInsured, Risk, Construction } from './policy';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PolicyService {
  policyUrl: string;
  metadataUrl: string;

  constructor(private http: Http, @Inject('ORIGIN_URL') originUrl) {
    this.policyUrl = originUrl + "/api/policy/";
    this.metadataUrl = originUrl + "/api/metadata/";
  }

  getMetadata() {
    return this.http.get(this.metadataUrl)
      .map(response => response.json())
      .toPromise()
      .catch(this.handleError);
  }

  getPolicies() {
    return this.http.get(this.policyUrl)
      .map(response => <Policy[]>response.json())
      .toPromise()
      .catch(this.handleError);
  }

  getPolicy(id) {
    return this.http.get(this.policyUrl + id)
      .map(response => <Policy>response.json())
      .toPromise()
      .catch(this.handleError);
  }

  putPolicy(policy: Policy): Promise<any> {
    return this.http.put(this.policyUrl, policy)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
