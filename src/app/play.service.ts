import { Injectable } from '@angular/core';
import { Plays } from './plays'; 

@Injectable({
  providedIn: 'root'
})
export class PlayService {

	rawPlays : 	Plays[]=[
	 {
	 	id : 1 , 
    name : 'Java',
    inventor : 'James Ghosling',
    year : '1995'
  } , 
  {
  	 id : 2 , 
    name : 'Python', 
    inventor : 'Guido van Rosum',
    year: '1991'
  } , 
  {
  	id : 3 , 
    name : 'C++',
    inventor : 'Bjarne Stroustrup',
    year : '1983'
  }
	]
 
  constructor() { }
   getPlays() : Plays[] {
     return this.rawPlays; 
   }

   playsdetails(id) : Plays{

   	for( var i=0; i<this.rawPlays.length ; i++){
   		if(this.rawPlays[i].id == id){
   			return this.rawPlays[i];
   		}
   	}
 return null;
   }
}
