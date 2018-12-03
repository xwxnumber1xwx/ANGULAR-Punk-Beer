import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PunkBeerApiService {

  url: string = 'https://api.punkapi.com/v2/beers';
  // store the last search, it is usefully when the user go back to the main page from beers-details component
  lastSearch: any[] = [];

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
  setLastSearch(lastSearch: any[]): void {
    this.lastSearch = lastSearch;
  }
  getLastSearch(): any[] {
    return this.lastSearch;
  }
}
