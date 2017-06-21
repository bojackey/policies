import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { PolicyComponent } from './components/policy/policy.component';
import { PolicyListComponent } from './components/policy/policy-list.component';

export const sharedConfig: NgModule = {
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    PolicyComponent,
    PolicyListComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'policies', component: PolicyListComponent },
      { path: 'policy', component: PolicyComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ]
};
