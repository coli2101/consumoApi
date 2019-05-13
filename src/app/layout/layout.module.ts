import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    LayoutRoutingModule
  ],
  exports:[HeaderComponent]
})
export class LayoutModule { }
