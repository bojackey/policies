import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { PolicyComponent }      from './components/policy/policy.component';
import { PolicyListComponent }  from './components/policy/policy-list.component';
import { PolicyService }        from './components/policy/policy.service';

export const sharedConfig: NgModule = {
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    PolicyComponent,
    PolicyListComponent
  ],
  providers:
  [
    PolicyService
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'policies', component: PolicyListComponent },
      { path: 'policy/:id', component: PolicyComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ]
};
