import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from '../components/main.module'
import { ModalServiceModule } from './modal/modal-service.module'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MainModule,
    ModalServiceModule
  ],

  exports: [HeaderComponent, FooterComponent]
})
export class ThemeModule { }
