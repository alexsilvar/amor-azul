import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'web',
    loadChildren: () => import('./system/system.module').then(m => m.SystemModule)
  },
  {
    path: '**',
    redirectTo: 'web'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
