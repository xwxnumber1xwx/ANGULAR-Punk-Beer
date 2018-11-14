import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PunkBeerApiService {

  constructor() { }

  getBeers(query?: string): void {
    if (query) {
      console.log(query)
    } else {
      console.log('fetch(api=?query)');
    }
  }
}
