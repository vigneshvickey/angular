import { Component, OnInit , Input,  Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-datachild',
  templateUrl: './datachild.component.html',
  styleUrls: ['./datachild.component.css']
})
export class DatachildComponent implements OnInit {
@Input() childMessage: string;
message = "wrrrrrrrrrrrrrrrrrrrrrrrrrrrrr435635643576548475475437";
data:string = "xcxc";
 @Output() dataevent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
sendMessage() {
    this.dataevent.emit(this.message)
  }

}
