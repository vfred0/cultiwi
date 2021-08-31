import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Button, Measurement, ResultMeasurement } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss'],
})
export class MeasurementsComponent implements OnInit {
  private form: FormGroup;
  private buttons: Button[];
  @Output() private getResults = new EventEmitter();
  @Input() private measurements: Measurement[];

  constructor(private fb: FormBuilder) {
  }

  getControlName(): Measurement[] {
    return this.measurements;
  }

  eventButton(button: Button) {
    let result: ResultMeasurement[] = new Array();
    this.measurements.forEach(item => {
      result.push({
        name: item.name,
        value: this.form.get("" + item.name).value,
        valid: this.form.valid
      })
    })

    this.getResults.emit(result);
    this.form.reset();
  }

  getButton(): Button[] {
    return this.buttons;
  }

  ngOnInit() {
    this.form = this.fb.group({
      width: [, [Validators.required, Validators.min(1)]],
      length: [, [Validators.required, Validators.min(1)]],
    })

    this.buttons = [
      {
        title: "Calcular",
        class: "o-button-color-w600"
      }
    ]

  }
}
