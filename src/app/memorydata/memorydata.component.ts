import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-memorydata',
  templateUrl: './memorydata.component.html',
  styleUrls: ['./memorydata.component.css']
})
export class MemorydataComponent implements OnInit {
	kname:string;
  constructor() { }

  ngOnInit() {
  }

  @Input('kname') 
  set greetMessage(message : string ){
  		console.log(message)
            this.kname = message+ " manipulated at child component"; 
        }
        get greetmessage(){
            return this.kname;
        }

}
