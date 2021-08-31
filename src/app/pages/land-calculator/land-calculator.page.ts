import { Component, OnInit } from '@angular/core';
import { BackMenu, Button, Measurement, ResultMeasurement } from 'src/app/interfaces/interfaces';
import { LandCalculatorService } from 'src/app/services/landCalculator/land-calculator.service';

@Component({
  selector: 'app-land-calculator',
  templateUrl: './land-calculator.page.html',
  styleUrls: ['./land-calculator.page.scss'],
})
export class LandCalculatorPage implements OnInit {

  private optionsBackMenu: BackMenu;
  private buttons: Button[];

  constructor(private landCalculator: LandCalculatorService) {
    this.buttons = new Array();
    this.optionsBackMenu = {
      image: "/assets/images/land-calculator.png",
      link: "/home"
    }
  }
  getResults(): String[] {
    return this.landCalculator.getResults();
  }

  getOptionsBackMenu(): BackMenu {
    return this.optionsBackMenu;
  }

  setResultsMeasurements(measurements: ResultMeasurement[]) {
    this.landCalculator.setResultsMeasurements(measurements);
  }

  getMeasurements(): Measurement[] {
    return this.landCalculator.getMeasurements();
  }

  iconError(): Boolean {
    return this.landCalculator.isValidMeasurement();
  }
  ngOnInit() { }

}
