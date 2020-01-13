import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';
import { TestimonialModalComponent } from '../testimonial-modal/testimonial-modal.component';
import { TestimonialModal2Component } from '../testimonial-modal2/testimonial-modal2.component';
import { TestimonialModal3Component } from '../testimonial-modal3/testimonial-modal3.component';
import { TestimonialModal4Component } from '../testimonial-modal4/testimonial-modal4.component';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TestimonialModalComponent, {
      width: 'auto',
      height: 'auto'
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(TestimonialModal2Component, {
      width: 'auto',
      height: 'auto'
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(TestimonialModal3Component, {
      width: 'auto',
      height: 'auto'
    });
  }
  
  openDialog4(): void {
    const dialogRef = this.dialog.open(TestimonialModal4Component, {
      width: 'auto',
      height: 'auto'
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout:1500,
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
