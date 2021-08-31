import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackMenu, Stage } from 'src/app/interfaces/interfaces';
import { PlantService } from 'src/app/services/plant/plant.service';

@Component({
  selector: 'app-recommendations-stage',
  templateUrl: './recommendations-stage.page.html',
  styleUrls: ['./recommendations-stage.page.scss'],
})
export class RecommendationsStagePage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private plantService: PlantService) { }

  getOptionsBackMenu(): BackMenu {
    return {
      image: 'assets/images/recommendations-stage.png',
      link: `/plant/${this.plantService.getNamePlant()}`
    }
  }

  getStages(): Stage[] {
    return this.plantService.getStages();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ namePlant }) => {
      this.plantService.setNamePlant(namePlant);
    })
  }

}
