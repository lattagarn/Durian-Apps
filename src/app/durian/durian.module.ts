import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DurianPageRoutingModule } from './durian-routing.module';

import { DurianPage } from './durian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DurianPageRoutingModule
  ],
  declarations: [DurianPage]
})
export class DurianPageModule {}
