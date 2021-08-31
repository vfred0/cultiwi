import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiseaseControlPageRoutingModule } from './disease-control-routing.module';

import { DiseaseControlPage } from './disease-control.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiseaseControlPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiseaseControlPage]
})
export class DiseaseControlPageModule { }
