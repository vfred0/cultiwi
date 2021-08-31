import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackMenu, Disease } from 'src/app/interfaces/interfaces';
import { PlantService } from 'src/app/services/plant/plant.service';

@Component({
  selector: 'app-disease-control',
  templateUrl: './disease-control.page.html',
  styleUrls: ['./disease-control.page.scss'],
})
export class DiseaseControlPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private plantService: PlantService) { }

  getOptionsBackMenu(): BackMenu {
    let name: String;
    this.activatedRoute.params.subscribe(({ namePlant }) => {
      name = namePlant;
    })
    return {
      image: 'assets/images/disease-control.png',
      link: `/plant/${this.plantService.getNamePlant()}`
    }
  }
  getDiseases(): Disease[] {
    return this.plantService.getDiseases();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ namePlant }) => {
      this.plantService.setNamePlant(namePlant);
    })
  }

}
