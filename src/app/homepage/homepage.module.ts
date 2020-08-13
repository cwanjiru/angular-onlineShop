import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { MobileAppCtaComponent } from './mobile-app-cta/mobile-app-cta.component';



@NgModule({
  declarations: [HomepageComponent, MobileAppCtaComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class HomepageModule { }
