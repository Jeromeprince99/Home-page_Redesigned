import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'testimonial-modal',
  templateUrl: './testimonial-modal.component.html',
  styleUrls: ['./testimonial-modal.component.scss']
})
export class TestimonialModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TestimonialModalComponent>) { }

  ngOnInit() {
  }

  function(): void {
    this.dialogRef.close();
  }

}
