import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewAddPageRoutingModule } from './review-add-routing.module';

import { ReviewAddPage } from './review-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewAddPageRoutingModule
  ],
  declarations: [ReviewAddPage]
})
export class ReviewAddPageModule {}
