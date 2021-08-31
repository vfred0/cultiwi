import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'plant/:namePlant',
    loadChildren: () => import('./pages/plant/plant.module').then(m => m.PlantPageModule)
  },
  {
    path: 'select-plant',
    loadChildren: () => import('./pages/select-plant/select-plant.module').then(m => m.SelectPlantPageModule)
  },
  {
    path: 'land-calculator',
    loadChildren: () => import('./pages/land-calculator/land-calculator.module').then(m => m.LandCalculatorPageModule)
  },
  {
    path: 'disease-control/:namePlant',
    loadChildren: () => import('./pages/disease-control/disease-control.module').then(m => m.DiseaseControlPageModule)
  },
  {
    path: 'recommendations-stage/:namePlant',
    loadChildren: () => import('./pages/recommendations-stage/recommendations-stage.module').then(m => m.RecommendationsStagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
