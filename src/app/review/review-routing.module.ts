import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewPage } from './review.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewPage,
    children:[
      { path: 'maps/:id', loadChildren: () => import('../maps/maps.module').then( m => m.MapsPageModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewPageRoutingModule {}
