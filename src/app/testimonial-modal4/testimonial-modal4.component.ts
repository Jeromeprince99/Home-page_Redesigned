import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-testimonial-modal4',
  templateUrl: './testimonial-modal4.component.html',
  styleUrls: ['./testimonial-modal4.component.scss']
})
export class TestimonialModal4Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<TestimonialModal4Component>) { }

  ngOnInit() {
  }

  function(): void {
    this.dialogRef.close();
  }

}
