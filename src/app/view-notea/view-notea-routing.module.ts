import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewNoteaPage } from './view-notea.page';

const routes: Routes = [
  {
    path: '',
    component: ViewNoteaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewNoteaPageRoutingModule {}
