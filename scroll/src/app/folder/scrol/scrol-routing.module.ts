import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrolPage } from './scrol.page';

const routes: Routes = [
  {
    path: '',
    component: ScrolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrolPageRoutingModule {}
