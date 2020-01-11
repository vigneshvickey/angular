import { Component, OnInit } from '@angular/core';
import { Trform } from '../trform';

@Component({
  selector: 'app-trform',
  templateUrl: './trform.component.html',
  styleUrls: ['./trform.component.css']
})
export class TrformComponent implements OnInit {
	  submitted = false;
    height = window.innerHeight;
  constructor() { }

  ngOnInit() {
    console.log(this.height);
    
  }
  datasubmit(){
  this.submitted = true;
  }
   model = new Trform('Dr IQ');

}
