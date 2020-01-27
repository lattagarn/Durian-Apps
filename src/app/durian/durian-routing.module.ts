import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DurianPage } from './durian.page';

const routes: Routes = [
  {
    path: '',
    component: DurianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DurianPageRoutingModule {}
