import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  // private heroService: HeroService;

  constructor(private heroService: HeroService) {
    // this.heroService = heroService;
  }

  getHeroes(): void {
    // this.heroService.getHeroes().subscribe(this.cuandoLleguenLosHeroes.bind(this));

    // this.heroService.getHeroes().subscribe((function(heroes: Hero[]) {
    //     this.heroes = heroes;
    //   }
    // ).bind(this));

    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // cuandoLleguenLosHeroes(heroes: Hero[]) {
  //   this.heroes = heroes;
  // }

  ngOnInit() {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe((hero: Hero) => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe(
      () => this.heroes = this.heroes.filter(h => h !== hero)
    );
  }
}
