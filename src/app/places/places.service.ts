import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})

export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'New York Mansion',
      'In the heart of New York City',
      'http://tiny.cc/33xy3y',
      4200.00
    ),
    new Place(
      'p2',
      'San Francisco Chateau',
      'Super posh for the poshyest pooshers',
      'http://tiny.cc/7wyy3y',
      2340.01
    ),
    new Place(
      'p3',
      'New York Rap Mansion',
      'Shoot a rap video for cheap, kap',
      'http://tiny.cc/69xy3y',
      420420.420
    )
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {
      ...this._places.find(p => p.id === id)
    };
  }

  constructor() { }
}
