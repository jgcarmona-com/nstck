import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsAndConditionsPageComponent } from './pages/terms-and-conditions-page/terms-and-conditions-page.component';
import { CookiePolicyPageComponent } from './pages/cookie-policy-page/cookie-policy-page.component';
import { DataSecurityPageComponent } from './pages/data-security-page/data-security-page.component';
import { LegalMainComponent } from './pages/legal-main/legal-main.component';
import { LegalSidenavComponent } from './components/legal-sidenav/legal-sidenav.component';
import { CoreModule } from '@core/core.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
     path: '',
     component: LegalMainComponent,
     children:
     [
          { path: '', component: PrivacyPolicyPageComponent },
          { path: 'terms-and-conditions', component: TermsAndConditionsPageComponent },
          { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
          { path: 'cookie-policy', component: CookiePolicyPageComponent },
          { path: 'data-security', component:DataSecurityPageComponent }
      ]
    }
  ];

@NgModule({
  declarations: [
    PrivacyPolicyPageComponent,
    TermsAndConditionsPageComponent,
    CookiePolicyPageComponent,
    DataSecurityPageComponent,
    LegalMainComponent,
    LegalSidenavComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ]
})
export class LegalModule { }
