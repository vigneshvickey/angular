import { Component, OnInit, ViewChild , AfterViewInit, ChangeDetectorRef, Input,  Output, EventEmitter} from '@angular/core';
import { DatachildComponent } from '../datachild/datachild.component';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.component.html',
  styleUrls: ['./sharing.component.css'],
     providers: [ MyserviceService ]
})
export class SharingComponent implements OnInit {
	sharing:string = "data-shared";
	 data:string;
	 emb_message:string;
  constructor(private detector: ChangeDetectorRef,private MyserviceService: MyserviceService) { }
	@ViewChild(DatachildComponent) datachild;
  ngOnInit() {
  	this.MyserviceService.currentMessage.subscribe(message => this.emb_message = message)
  }
   ngAfterViewInit() {
    this.data = this.datachild.data;
     this.detector.detectChanges();
  }
   receiveMessage($event) {
   	console.log("sds",$event)
    this.data = $event
  }

}
