import { Injectable } from '@angular/core';
import { Film } from './modele/film';

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [
    {id: 0, rok: 2019, tytul: 'Joker', opis: 'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: "The Joker".'},
    {id: 1, rok: 2019, tytul: 'It', opis: 'Twenty-seven years after their first encounter with the terrifying Pennywise, the Losers Club have grown up and moved away, until a devastating phone call brings them back.'},
    {id: 2, rok: 1994, tytul: 'Friends', opis: 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.'},
  ];

  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }
  getFilm(id:number): Film {
    return this.filmy[id];
  }
}
