import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { MatListModule } from '@angular/material/list';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
// export class HerosComponent implements OnInit {
//     heroes: Hero[];
//     getHeroes(): void {
//       this.heroService.getHeroes()
//           .subscribe(heroes => this.heroes = heroes);
//     }

//     selectedHero: Hero;
//     onSelect(hero: Hero): void {
//       this.selectedHero = hero;
//     }

//     hero: Hero = {
//       id: 1,
//       name: 'Windstorm'
//     };


//    constructor(private heroService: HeroService) { }

//   ngOnInit() {
//     this.getHeroes();
//   }

}
