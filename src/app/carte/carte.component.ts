import { Component, OnInit } from '@angular/core';

// librairie pour cartes interactives
import * as L from 'leaflet';

import { CarteService } from 'src/app/services/carte.service';
import { Restaurant } from 'src/app/modeles/restaurant.modele';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  listeRestaurants: Restaurant[] = [];
  nombreRestaurants: number;

  constructor(
    private carteService: CarteService,
  ) {
    this.listeRestaurants = this.carteService.listeRestaurants;
  }

  ngOnInit() {
    this.nombreRestaurants = this.listeRestaurants.length;

    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const myfrugalmap = L.map('frugalmap').setView([47.207527, -1.546276], 16);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);

    const myIcon = L.icon({iconUrl: 'assets/images/marker-icon-laposte.png'});
    const myIconDefault = L.icon({iconUrl: 'assets/images/marker-icon-blue.png'});

    L.marker([47.207527, -1.546276], {icon: myIcon}).bindPopup('CSMSI - Atlantica').addTo(myfrugalmap).openPopup();
    this.bouclerRestaurants(myIconDefault, myfrugalmap);
  }

  bouclerRestaurants(myIcon, myfrugalmap) {
    for (let i = 0; i < this.listeRestaurants.length; i++) {
      L.marker([this.listeRestaurants[i].x, this.listeRestaurants[i].y], {icon: myIcon})
        .bindPopup(this.listeRestaurants[i].nom).addTo(myfrugalmap);
    }
  }

}
