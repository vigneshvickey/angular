import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
    previewPhoto :boolean = false;
    status: boolean = false;
  url: string;
  constructor() { }

  ngOnInit() {
  }
powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

datas = ['real data','dummy data','Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer']

  model = new Hero(18, 25, 'Dr IQ', this.powers[0], this.datas[0], 'Chuck Overstreet');

  submitted = false;
      scrHeight:any;
    scrWidth:any;

  onSubmit(name,power) { 
    console.log("name", name); 
  console.log("power",power);
  this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(42, 5 , '', '','', '','');
    this.previewPhoto = false;
     this.url = null;
  }
   togglePreviewPhoto(){
    this.previewPhoto = !this.previewPhoto;
  }
  special(data){
     this.status = !this.status; 
     console.log("dsdsd",data); 
  }
onSelectFile(event: any, path) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        console.log(event.target.readyState);

      }
    }
    console.log("sdsd",path);
}

  skyDog(): Hero {
    let myHero =  new Hero(42, 55 ,'SkyDog',
                           'Fetch any object at any distance', 'real data',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

    getScreenSize(event?) {
          this.scrHeight = window.innerHeight;
          this.scrWidth = window.innerWidth;
          console.log("scrHeight", this.scrHeight);
          console.log("scrWidth",  this.scrWidth);
    }


  /////////////////////////////
}
