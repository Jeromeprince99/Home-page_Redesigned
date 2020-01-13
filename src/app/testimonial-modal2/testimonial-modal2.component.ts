import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'testimonial-modal2',
  templateUrl: './testimonial-modal2.component.html',
  styleUrls: ['./testimonial-modal2.component.scss']
})
export class TestimonialModal2Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<TestimonialModal2Component>) { }

  ngOnInit() {
  }

  function(): void {
    this.dialogRef.close();
  }

}
