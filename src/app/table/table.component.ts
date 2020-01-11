import { Component, OnInit } from '@angular/core';
import { Duser } from './duser';
import { Tuser } from './tuser';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
   providers: [ TableService ],
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: Duser[];
  data_user: Tuser[];
  dataTable : any
   editHero: Duser; 
   showloader = true;
  constructor(private TableService: TableService) { }

  ngOnInit() {
  	   this.getdata();
        this.getnewdata();        
  }

 getdata(): void {
    this.TableService.getdata()
      .subscribe(dara => this.users = dara);
       this.showloader = false;
   
  }
  getnewdata(): void{
    this.TableService.getnewdata().subscribe(data_obj => this.data_user = data_obj);
      this.showloader = false;
    
  }
   add(userid, id, title, body): void {
    this.editHero = undefined;
    console.log(userid);
     console.log(id);
      console.log(title);
       console.log(body);
    title = title.trim();
    body = body.trim();
    if (!userid && !id && !title && !body) { return; }
    this.TableService.addHero(body,title,id,userid)
      .subscribe(data => this.users.push(data));

  }
  deletedata(user : Tuser){
    console.log(user);
      this.data_user = this.data_user.filter(data => data !== user);
    this.TableService.deletedata(user.id).subscribe( result => {    
      console.log(result)
    });
  }
  
}
