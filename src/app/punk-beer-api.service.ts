import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PunkBeerApiService {

  url: string = 'https://api.punkapi.com/v2/beers'

  constructor(private http: HttpClient) { }

  getBeers(query?: string): any {
    if (query) {
      return this.http.get(`${this.url}?beer_name=${query}`);
    } else {
      return this.http.get(`${this.url}/random`);
    }
  }

  getBeersFromId(id: Number): any {
    if (id) {
      return this.http.get(`${this.url}?ids=${id}`);
    } else {
      return [];
    }
  }

  getBeersFromIds(ids: Number[]): any {
    if (ids) {
      let parameter: string = ids.toString().replace(/,/g, '|');
      return this.http.get(`${this.url}?ids=${parameter}`);
    } else {
      return [];
    }
  }
}
