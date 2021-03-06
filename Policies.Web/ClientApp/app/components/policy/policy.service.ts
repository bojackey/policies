﻿import { Injectable, Inject } from '@angular/core';
import { Policy, PrimaryInsured, Risk, Construction } from './policy';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PolicyService {
  policyUrl: string;
  metadataUrl: string;

  public metadata: any;

  constructor(private http: Http, @Inject('ORIGIN_URL') originUrl) {
    this.policyUrl = originUrl + "/api/policy/";
    this.metadataUrl = originUrl + "/api/metadata/";

    this.getMetadata()
      .then(metadata => {
        console.log("PolicyFormComponent " + "getMetadata");
        this.metadata = metadata;
        console.log("PolicyFormComponent " + metadata.constructionTypes[1].key);
      })
      .catch((error) => console.error(error));
  }

  getConstructionTypeName(construction) : string {
    var theOne = this.metadata.constructionTypes.find(
      (kvp) => {
        return kvp.value === construction;
      }
    )
    return theOne.key;
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
    var obj = policy;
    //var obj = { policy: policy, risk: policy.risk, insured: policy.primaryInsured };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.policyUrl, obj, options)
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
