import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrongPageRoutingModule } from './strong-routing.module';

import { StrongPage } from './strong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrongPageRoutingModule
  ],
  declarations: [StrongPage]
})
export class StrongPageModule {}
