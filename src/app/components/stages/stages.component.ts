import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stage } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss'],
})
export class StagesComponent implements OnInit {
  @Input() private stages: Stage[];
  private recomendations: String[];

  onChangeStage(stage: String) {
    this.setRecomendations(stage);
  }

  setRecomendations(stage: String) {
    this.recomendations = this.getRecomendationsns(stage);
  }

  getRecomendationsns(stage: String): String[] {
    return this.stages.filter(item => item.title === stage)[0].recomendations;
  }

  getStages(): String[] {
    return this.stages.map(stage => stage.title);
  }


  getRecomendations(): String[] {
    return this.recomendations;
  }

  constructor() {
  }


  ngOnInit() {
    this.setRecomendations(this.getStages()[0])
  }

}
