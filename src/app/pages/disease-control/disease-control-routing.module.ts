import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiseaseControlPage } from './disease-control.page';

const routes: Routes = [
  {
    path: '',
    component: DiseaseControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiseaseControlPageRoutingModule {}
