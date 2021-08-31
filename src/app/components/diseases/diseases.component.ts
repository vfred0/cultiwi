import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button, Disease } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.scss'],
})
export class DiseasesComponent implements OnInit {

  @Input() private diseases: Disease[];
  private buttons: Button[];
  private recomendations: String[];
  private select: String;

  public getButtons(): Button[] {
    return this.buttons;
  }

  getImages(): String[] {
    return this.diseases.filter(disease => disease.name === this.select)[0].images
  }


  onChangeSelect(stageSelected: String) {
    this.select = stageSelected;
    this.buttons = []
    this.diseases.filter(disease => disease.name === this.select)[0].controls.forEach((item, index) => {
      let button: Button;
      if (index === 0) {
        button = {
          title: item.name,
          class: "o-button-color-g100"
        }

        this.recomendations = item.recomendations
      } else {
        button = {
          title: item.name,
          class: "o-button-disable o-button-color-w200"
        }
      }
      this.buttons.push(button);
    });
  }

  eventButton(button: Button) {
    if (button.class.includes('disable')) {
      this.buttons.forEach(b => {
        if (b.title != button.title) {
          b.class = 'button-disable o-button-color-w200';
        }
      })
    }
    button.class = 'button-enable o-button-color-g100';
    this.recomendations = this.diseases.filter(disease => disease.name === this.select)[0].controls.filter(control => control.name == button.title)[0].recomendations
  }

  getDiseases(): String[] {
    return this.diseases.map(i => i.name)
  }

  getRecomendations(): String[] {
    return this.recomendations;
  }


  constructor() {
    this.buttons = new Array();
    this.recomendations = new Array();
    this.select = ''

  }


  ngOnInit() {
    this.diseases[0].controls.forEach((item, index) => {
      let button: Button;
      if (index === 0) {
        button = {
          title: item.name,
          class: "o-button-color-g100"
        }

        this.recomendations = item.recomendations
      } else {
        button = {
          title: item.name,
          class: "o-button-disable o-button-color-w200"
        }
      }
      this.buttons.push(button);
    });
    this.select = this.diseases[0].name;
  }

}
