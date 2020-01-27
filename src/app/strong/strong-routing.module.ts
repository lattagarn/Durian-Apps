import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrongPage } from './strong.page';

const routes: Routes = [
  {
    path: '',
    component: StrongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrongPageRoutingModule {}
