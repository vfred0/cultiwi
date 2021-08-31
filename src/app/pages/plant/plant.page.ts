import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackMenu, Disease, Feature, Option, Stage, TemperatureStage } from 'src/app/interfaces/interfaces';
import { PlantService } from 'src/app/services/plant/plant.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.page.html',
  styleUrls: ['./plant.page.scss']
})

export class PlantPage implements OnInit {
  private optionsBackMenu: BackMenu;

  constructor(private activatedRoute: ActivatedRoute, private plantService: PlantService) { }

  getTemperatures(): TemperatureStage[] {
    return this.plantService.getTemperaturesStages();
  }

  getAboutPlant(): String[] {
    return this.plantService.getAboutPlant();
  }

  getStages(): Stage[] {
    return this.plantService.getStages();
  }
  getOptionsBackMenu(): BackMenu {
    return this.optionsBackMenu;
  }

  getDiseases(): Disease[] {
    return this.plantService.getDiseases();
  }

  getDetailsImages() {
    return this.plantService.getDetailsImages();
  }

  getFeatures(): Feature[] {
    return this.plantService.getFeatures();
  }

  getOptionsMenu(): Option[] {
    return [
      {
        name: 'Control de enfermedades',
        link: `/disease-control/${this.plantService.getNamePlant()}`
      },
      {
        name: 'Recomendaciones de cuidado para las etapas',
        link: `/recommendations-stage/${this.plantService.getNamePlant()}`
      }
    ]
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(({ namePlant }) => {
      this.plantService.setNamePlant(namePlant);
    })


    this.optionsBackMenu = {
      image: this.plantService.getBackImage(),
      link: "/select-plant"
    }
  }
}
