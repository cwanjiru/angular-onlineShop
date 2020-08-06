import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarForHandheldDevicesComponent } from './toolbar-for-handheld-devices/toolbar-for-handheld-devices.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ToolbarForHandheldDevicesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ToolbarForHandheldDevicesComponent,
  ]
})
export class CoreModule { }
