import { Component, OnInit } from '@angular/core';
import { Named } from '../named';
import { DATAS } from '../data';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	datas = DATAS;
  constructor() { }

  ngOnInit() {
  }
  selectedNamed : Named;
  onSelect(named : Named){
  	this.selectedNamed = named;

  }

}
