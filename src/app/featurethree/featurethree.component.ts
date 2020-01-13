import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ViewEncapsulation }  from '@angular/core';

@Component({
  selector: 'featurethree',
  templateUrl: './featurethree.component.html',
  styleUrls: ['./featurethree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeaturethreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    }

    customOptions: OwlOptions = {
      loop: true,
      autoplay: true,
      autoplayTimeout:1000,
      animateOut: true,
      animateIn: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 100,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        200: {
          items: 2
        },
        400: {
          items: 3
        },
        600: {
          items: 4
        },
        800: {
          items: 5
        },
        1000: {
          items: 6
        },
        1200: {
          items: 7
        }
      },
      nav: false
    } 

}
