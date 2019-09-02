import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchUserComponent} from './search-user.component';

const routes: Routes = [
  {
    path: '',
    component: SearchUserComponent,
  },
  {
    path: 'detail/:name',
    loadChildren: () => import('./pages/detail/detail.module').then((m) => m.DetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchUserRoutingModule { }
