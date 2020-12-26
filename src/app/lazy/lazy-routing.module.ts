import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { LazyComponent } from './lazy.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent,
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {}
