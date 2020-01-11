import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Plays } from '../plays';
import { PlayService } from '../play.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
   getData = this.auth.UsergetData();
   datapare:any

  item : any; 

   id : string; 
  play : Plays; 

  constructor(private route: ActivatedRoute,private router: Router ,  private service : PlayService,private auth: AuthService) { 
     if(this.getData){
        this.datapare = JSON.parse(this.getData);
        console.log("asfdadas",this.getData);
        alert(0)
      }
      else{
        this.router.navigateByUrl('/app-login');
         alert(1)
      }
    }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get("id");
  	this.play = this.service.playsdetails(+this.id);
  }
  intialize(){

  }

}
