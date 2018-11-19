import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PunkBeerApiService {

  constructor() { }

  getBeers(query?: string): any {
    if (query) {
      console.log(query)
      return fetch(`https://api.punkapi.com/v2/beers?beer_name=${query}`);
    } else {
      return fetch(`https://api.punkapi.com/v2/beers/random`});
    }
  }
}
