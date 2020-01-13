import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  togglebool: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    if(this.togglebool){
      this.togglebool = false;
    }else{
      this.togglebool= true;
    }
  }

}
