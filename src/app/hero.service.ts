import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  export class HeroService {
    getHero(id: number): Observable<Hero> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(HEROES.find(hero => hero.id === id));
    }
    getHeroes(): Observable<Hero[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
    }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    };
}
