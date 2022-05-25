import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundPageComponent } from '@core/pages/page-not-found-page/page-not-found-page.component';
import { BrandResolver } from './brand/brand.resolver';
import { LandingPageComponent } from './core/pages/landing-page/landing-page.component';
import { SelectiveStrategy } from './core/selective-strategy';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'legal',
    data: { preload: true },
    loadChildren: () =>
      import('./legal/legal.module').then((m) => m.LegalModule),
  },
  {
    path: ':brand-moniker',
    data: { preload: true },
    resolve: { brand: BrandResolver },
    loadChildren: () =>
      import('./brand/brand.module').then((m) => m.BrandModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: SelectiveStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
