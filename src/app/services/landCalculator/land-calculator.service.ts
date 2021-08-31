import { Injectable } from '@angular/core';
import { Measurement, ResultMeasurement } from 'src/app/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class LandCalculatorService {
  isValidMeasurement(): Boolean {
    return !this.validMeasurement;
  }

  private result: String[] = [];
  private measurements: Measurement[];
  private validMeasurement: Boolean;
  constructor() {
    this.measurements = [

      {
        name: 'length',
        placeholder: 'Longitud (metros)'
      },
      {
        name: 'width',
        placeholder: 'Ancho (metros)'
      }
    ]

  }

  getMeasurements(): Measurement[] {
    return this.measurements;
  }

  getResults(): String[] {
    return this.result;
  }
  setResultsMeasurements(resultMeasurements: ResultMeasurement[]) {
    this.result = []
    this.validMeasurement = resultMeasurements[0].valid;
    if (this.validMeasurement) {

      let result: any = 1;
      for (let i = 0; i < resultMeasurements.length; i++) {
        let value: any = resultMeasurements[i].value;
        result *= Math.round(((value / 0.6) - 1))
      }
      this.result.push(`Aproximadamente puedes sembrar ${result} plantas`);
    } else {
      this.result.push("Debes ingresar valores positivos");
    }
  }

}
