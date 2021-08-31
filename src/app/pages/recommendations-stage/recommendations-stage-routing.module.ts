import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationsStagePage } from './recommendations-stage.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendationsStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendationsStagePageRoutingModule {}
