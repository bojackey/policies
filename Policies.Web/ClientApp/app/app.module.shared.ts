import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { PolicyComponent }      from './components/policy/policy.component';
import { PolicyFormComponent } from './components/policy/policy-form.component';
import { PolicyListComponent }  from './components/policy/policy-list.component';
import { PolicyService }        from './components/policy/policy.service';

export const sharedConfig: NgModule = {
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    PolicyComponent,
    PolicyFormComponent,
    PolicyListComponent
  ],
  providers:
  [
    PolicyService
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'policies', component: PolicyListComponent },
      { path: 'add-policy', component: PolicyFormComponent },
      { path: 'policy/:id', component: PolicyComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ]
};
