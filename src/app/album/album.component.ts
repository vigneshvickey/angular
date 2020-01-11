import { Component, OnInit } from '@angular/core';
import { Album } from './album';
import { AlbumService } from './album.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  providers : [ AlbumService ],
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
 	albumlist: Album[];
 		showloader = true;
  constructor(private AlbumService: AlbumService) { }

  ngOnInit() {
  	this.getalbumdata();
  }
  getalbumdata() : void{
  	  this.AlbumService.getalbumdata()
      .subscribe(albumlist => this.albumlist = albumlist);
      this.showloader = false;
  }

}
