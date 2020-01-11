import { Component, OnInit, ViewChild , AfterViewInit, ChangeDetectorRef, Input,  Output, EventEmitter} from '@angular/core';
import { DatachildComponent } from './datachild/datachild.component';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-dataparent',
  templateUrl: './dataparent.component.html',
  styleUrls: ['./dataparent.component.css'],
      providers: [ MyserviceService ]
  
})
export class DataparentComponent implements OnInit {
	parentMessage = "message from parent"
  data:string;
  emb_message:string;
  @Input() sharingdata : false;
	@ViewChild(DatachildComponent) datachild;
  constructor(private detector: ChangeDetectorRef,private MyserviceService: MyserviceService) { }

  ngOnInit() {
  }
   ngAfterViewInit() {
    this.data = this.datachild.data;
     this.detector.detectChanges();
        this.MyserviceService.currentMessage.subscribe(message => this.emb_message = message)
  }
   receiveMessage(dfatat) {
   	console.log("sds",dfatat);
    this.data = dfatat
  }
  newMessage() {
    this.MyserviceService.changeMessage("Hello from Sibling")
  }

}
