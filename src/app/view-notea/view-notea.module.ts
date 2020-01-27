import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewNoteaPageRoutingModule } from './view-notea-routing.module';

import { ViewNoteaPage } from './view-notea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewNoteaPageRoutingModule
  ],
  declarations: [ViewNoteaPage]
})
export class ViewNoteaPageModule {}
