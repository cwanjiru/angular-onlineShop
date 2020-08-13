import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarForHandheldDevicesComponent } from './toolbar-for-handheld-devices/toolbar-for-handheld-devices.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ToolbarForHandheldDevicesComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ToolbarForHandheldDevicesComponent,
  ]
})
export class CoreModule { }
