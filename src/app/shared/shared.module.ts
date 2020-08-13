import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarColorChangeOnScrollDirective } from './navbar-color-change-on-scroll.directive';



@NgModule({
  declarations: [NavbarColorChangeOnScrollDirective],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarColorChangeOnScrollDirective,
  ]
})
export class SharedModule { }
