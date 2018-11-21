import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PunkBeerApiService {

  url: string = 'https://api.punkapi.com/v2/beers'

  constructor() { }

  getBeers(query?: string): any {
    if (query) {
      console.log(query)
      return fetch(`${this.url}?beer_name=${query}`);
    } else {
      return fetch(`${this.url}/random`);
    }
  }
}
