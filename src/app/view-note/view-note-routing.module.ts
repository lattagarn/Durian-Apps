import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewNotePage } from './view-note.page';

const routes: Routes = [
  {
    path: '',
    component: ViewNotePage,
    children:[
      { path: 'maps/:id', loadChildren: () => import('../maps/maps.module').then( m => m.MapsPageModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewNotePageRoutingModule {}
