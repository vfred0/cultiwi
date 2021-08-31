import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  slideOpts = {
    initialSlide: 1,
  };

  slidesImages: { img: string }[] = [
    { img: '/assets/images/slider02.jpg' },
    { img: '/assets/images/slider01.jpg' },
    { img: '/assets/images/slider03.jpg' }
  ]


}
