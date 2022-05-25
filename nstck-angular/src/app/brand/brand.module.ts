import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { BrandMainComponent } from './brand-main/brand-main.component';
import { RouterModule, Routes } from '@angular/router';
import { BrandResolver } from './brand.resolver';

const routes: Routes = [
  {
    path: '',
    component: BrandMainComponent,
  },
];

@NgModule({
  declarations: [MainComponent, BrandMainComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BrandModule {}
