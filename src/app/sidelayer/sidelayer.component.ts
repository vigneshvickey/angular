import { Component, OnInit , Input, HostListener , ViewChild , AfterViewInit , ChangeDetectorRef } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-sidelayer',
  templateUrl: './sidelayer.component.html',
  styleUrls: ['./sidelayer.component.css']
})
export class SidelayerComponent implements OnInit {
  @ViewChild(SidebarComponent) side;
  changestyle: string
  isAddButton = false;
  data_value : any;
  constructor(private Detect: ChangeDetectorRef) { }

  ngOnInit() {
  	console.log("dsdsd",this.side.data_value)
  }
  ngAfterViewInit(){
  	this.data_value = this.side.data_value;
  	this.Detect.detectChanges();
  }
  @Input() sidebar : SidebarComponent;
  

  data_click(){
  	this.sidebar.toggle();
  	this.isAddButton = !this.isAddButton;
  }
}
