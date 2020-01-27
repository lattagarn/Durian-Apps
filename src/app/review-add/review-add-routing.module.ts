import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewAddPage } from './review-add.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewAddPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewAddPageRoutingModule {}
