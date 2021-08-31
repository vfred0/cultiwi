export interface Stage {
  title: string;
  recomendations: string[];
}

export interface Option {
  name: String;
  link: String;
}

export interface Button {
  title: String;
  class: String;
}

export interface Temperature {
  title: String;
  degrees: String[];
}
export interface TemperatureStage {
  name: String;
  temperatures: Temperature[];
}

export interface BackMenu {
  image: String;
  link: String;
}


export interface Plant {
  name: String;
  description: String;
  stages: Stage[];
  temperaturesStages: TemperatureStage[];
  images: String[];
  diseases: Disease[];
  features: Feature[];
}

export interface Measurement {
  name: String;
  placeholder: String;
}

export interface ResultMeasurement {
  name: String;
  value: String;
  valid: Boolean;
}


export interface Disease {
  name: String;
  images: String[];
  controls: Control[];
}


export interface Control {
  name: String;
  recomendations: String[]
}


export interface Feature {
  name: String;
  description: String;
  images: String[];
}