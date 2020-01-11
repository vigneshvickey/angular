import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	data_value = "Deep red in colour (because of flavonoids called anthocyanins), cranberries are power-packed gems of health. They are one of the best sources of vitamin C, dietary fibre,"
  constructor() { }

  ngOnInit() {
  }
 @HostBinding('class.data-open')
 isOpen = false;

 	toggle(){
 		this.isOpen = !this.isOpen;
 	}
}
