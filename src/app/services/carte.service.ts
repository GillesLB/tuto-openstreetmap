import { Injectable } from '@angular/core';

import { Restaurant } from 'src/app/modeles/restaurant.modele';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  listeRestaurants: Restaurant[] = [
    {nom: 'Le plan B', cuisine: 'Traditionnelle', x: 47.211665, y: -1.546741, id: 1},
    {nom: 'Bento sakura', cuisine: 'Japonaise', x: 47.206238, y: -1.554668, id: 2},
    {nom: 'Les fonderies', cuisine: 'Diverses', x: 47.205947, y: -1.545356, id: 3},
  ];

  constructor() { }

}
