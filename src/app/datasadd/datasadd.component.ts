import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { DatauserService } from './datauser.service';

@Component({
  selector: 'app-datasadd',
  templateUrl: './datasadd.component.html',
    providers: [ DatauserService ],
  styleUrls: ['./datasadd.component.css']
})
export class DatasaddComponent implements OnInit {
  heroes: User[];
  editHero: User; // the hero currently being edited
    height: any;

  constructor(private DatauserService: DatauserService) { }

  ngOnInit() {
    this.getHeroes();
    this.height = window.innerHeight;
  }

  getHeroes(): void {
    this.DatauserService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    this.editHero = undefined;
    console.log(name);
    name = name.trim();
    if (!name) { return; }

    // The server will generate the id for this new hero
    const newHero: User = { name } as User;
    this.DatauserService.addHero(newHero)
      .subscribe(user => this.heroes.push(user));
  }

  delete(user: User): void {
    this.heroes = this.heroes.filter(h => h !== user);
    this.DatauserService.deleteHero(user.id).subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.heroesService.deleteHero(hero.id);
    */
  }

  edit(user) {
    this.editHero = user;
  }

  search(searchTerm: string) {
    this.editHero = undefined;
    if (searchTerm) {
      this.DatauserService.searchHeroes(searchTerm)
        .subscribe(heroes => this.heroes = heroes);
    }
  }

  update() {
    if (this.editHero) {
      this.DatauserService.updateHero(this.editHero)
        .subscribe(hero => {
          // replace the hero in the heroes list with update from server
          const ix = hero ? this.heroes.findIndex(h => h.id === hero.id) : -1;
          if (ix > -1) { this.heroes[ix] = hero; }
        });
      this.editHero = undefined;
    }
  }

}
