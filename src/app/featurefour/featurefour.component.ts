import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'featurefour',
  templateUrl: './featurefour.component.html',
  styleUrls: ['./featurefour.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeaturefourComponent implements OnInit {

  images1 = ['../../assets/images/Abdul Kalam.jpg',
            '../../assets/images/Barack Obama.jpg',
            '../../assets/images/Benjamin.jpg',
            '../../assets/images/Shinzo Abe.jpg'
            ];
  currentImage1 : any;
  images2 = ['../../assets/images/JRD Tata.jpg',
  '../../assets/images/Steve Jobs.jpg',
  '../../assets/images/Jeff Bezos.jpg',
  '../../assets/images/ElonMusk.jpg'
  ];
  currentImage2 : any;
  images3 = ['../../assets/images/Warren Buffetr.jpg',
  '../../assets/images/Billl Gates.jpg',
  '../../assets/images/Jack Ma.jpg',
  '../../assets/images/Herb Kelleher.jpg'
  ];
  currentImage3 : any;
  images4 = ['../../assets/images/Ratan Tata.jpg',
  '../../assets/images/Jack Welch.jpg',
  '../../assets/images/Ambani.jpg',
  '../../assets/images/Mary Bara.jpg'
  ];
  currentImage4 : any;
  images5 = ['../../assets/images/John Doerr.jpg',
  '../../assets/images/Michael Moritz.jpg',
  '../../assets/images/Masayoshi Son.jpg',
  '../../assets/images/Mary Meeker.jpg'
  ];
  currentImage5 : any;
  images6 = ['../../assets/images/Vinton Cerf.jpg',
  '../../assets/images/Klas Schwab.jpg',
  '../../assets/images/Haso.jpg',
  '../../assets/images/Larry Pag.jpg'
  ];
  currentImage6 : any;
  images7 = ['../../assets/images/Ray Kurzweil.jpg',
  '../../assets/images/Michio kaka.jpg',
  '../../assets/images/Alwi Toffler.jpg',
  '../../assets/images/John Naisbitt.jpg'
  ];
  currentImage7 : any;
  images8 = ['../../assets/images/Jim Collins.jpg',
  '../../assets/images/tom Peter.jpg',
  '../../assets/images/Daniel Gollmanm.jpg',
  '../../assets/images/Robin Sharma.jpg'
  ];
  currentImage8 : any;
  images9 = ['../../assets/images/Peter Druker.jpg',
  '../../assets/images/John Kotter.jpg',
  '../../assets/images/Philip Kotler.jpg',
  '../../assets/images/Michael Porter.jpg'
  ];
  currentImage9 : any;
  images10 = ['../../assets/images/Fred Smith.jpg',
  '../../assets/images/Richard Branson.jpg',
  '../../assets/images/Michael Bloomberg.jpg',
  '../../assets/images/Narayan Murthy.jpg'
  ];
  currentImage10 : any;

  constructor() {}

  ngOnInit() {
    timer(0, 1500)
      .pipe(
        tap(v => {
          this.currentImage1 = this.images1[v%4];
          this.currentImage2 = this.images2[v%4];
          this.currentImage3 = this.images3[v%4];
          this.currentImage4 = this.images4[v%4];
          this.currentImage5 = this.images5[v%4];
          this.currentImage6 = this.images6[v%4];
          this.currentImage7 = this.images7[v%4];
          this.currentImage8 = this.images8[v%4];
          this.currentImage9 = this.images9[v%4];
          this.currentImage10 = this.images10[v%4];         
        })
      )
      .subscribe();
  }   

  customOptions: OwlOptions = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2000,
    animateOut: true,
    animateIn: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      800: {
        items: 3
      }
    },
    nav: false
  }

}
