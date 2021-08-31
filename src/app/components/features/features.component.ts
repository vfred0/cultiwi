import { Component, Input, OnInit } from '@angular/core';
import { Feature } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  @Input() features: Feature[];
  private featureDescription: String[];
  private featureImages: String[];

  constructor() {
    this.featureDescription = [];
    this.featureImages = [];
  }

  ngOnInit() {
    this.featureDescription = [];
    this.featureImages = [];
    this.featureDescription.push(this.getFeature(this.features[0].name).name)
    this.featureDescription.push(this.getFeature(this.features[0].name).description)
    this.featureImages = this.getFeature(this.features[0].name).images
  }


  getFeaturesName(): String[] {
    return this.features.map(f => f.name);
  }

  getFeatureDescription(): String[] {
    return this.featureDescription;
  }

  getFeatureImages(): String[] {
    return this.featureImages;
  }

  onChangeFeature(featureName: String) {
    this.featureDescription = []
    this.featureDescription.push(this.getFeature(featureName).name)
    this.featureDescription.push(this.getFeature(featureName).description)
    this.featureImages = this.getFeature(featureName).images
  }

  getFeature(featureName: String) {
    return this.features.filter(f => f.name === featureName)[0];
  }

}

