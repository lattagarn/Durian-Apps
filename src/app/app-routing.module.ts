import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'add-note',
    loadChildren: () => import('./add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'view-note/:id',
    loadChildren: () => import('./view-note/view-note.module').then( m => m.ViewNotePageModule)
  },
  {
    path: 'update-note/:id',
    loadChildren: () => import('./update-note/update-note.module').then( m => m.UpdateNotePageModule)
  },
  {
    path: 'durian',
    loadChildren: () => import('./durian/durian.module').then( m => m.DurianPageModule)
  },
  {
    path: 'strong',
    loadChildren: () => import('./strong/strong.module').then( m => m.StrongPageModule)
  },
  {
    path: 'standard',
    loadChildren: () => import('./standard/standard.module').then( m => m.StandardPageModule)
  },
  {
    path: 'view-notea',
    loadChildren: () => import('./view-notea/view-notea.module').then( m => m.ViewNoteaPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'review-add',
    loadChildren: () => import('./review-add/review-add.module').then( m => m.ReviewAddPageModule)
  },
  {
    path: 'maps/:id',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
