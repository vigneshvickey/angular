import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { Plays } from '../plays';
import { PlayService } from '../play.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
  providers: []
})
export class PlayComponent implements OnInit {
	nameModel : String; 
  inventorModel : String; 
  yearModel : String; 
  play : Plays[]; 
    totalPlays : number; 	

  constructor( private PlayService : PlayService ,    private router: Router ) {
  	this.nameModel = '';
  	this.inventorModel = '';
  	this.yearModel = '';
   
   this.play = PlayService.getPlays(); 
       this.totalPlays = this.play.length; 

}
  ngOnInit() {
  }

  createPlay(){
  	 this.totalPlays += 1; 
  	 let newPlay : Plays = {
  	 	 id : this.getId(), 
      name: this.nameModel , 
      inventor : this.inventorModel , 
      year : this.yearModel
    };

    this.play.push(newPlay);

       this.nameModel = this.yearModel = this.inventorModel = ''; 
  }
    banner( id ) {
     this.router.navigate(['/banner' , id ]);
  }
    getId() { 
    return this.totalPlays ; 
  }
}
