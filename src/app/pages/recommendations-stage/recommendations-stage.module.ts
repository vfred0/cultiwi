import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendationsStagePageRoutingModule } from './recommendations-stage-routing.module';

import { RecommendationsStagePage } from './recommendations-stage.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendationsStagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecommendationsStagePage]
})
export class RecommendationsStagePageModule { }
