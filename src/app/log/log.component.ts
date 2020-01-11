import { Component, OnInit } from '@angular/core';
export class Log {
    name : String ; 
    inventor : String ; 
    year : String; 
}



@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

	log : Log = {
		name : 'ramer',
		inventor : 'thangathora',
		year : '1965'
	}

  constructor() { }

  ngOnInit() {
  }

}
