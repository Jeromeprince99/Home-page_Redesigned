import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-testimonial-modal3',
  templateUrl: './testimonial-modal3.component.html',
  styleUrls: ['./testimonial-modal3.component.scss']
})
export class TestimonialModal3Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<TestimonialModal3Component>) { }

  ngOnInit() {
  }

  function(): void {
    this.dialogRef.close();
  }

}
