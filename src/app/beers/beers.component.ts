import { Component, OnInit } from '@angular/core';
import { PunkBeerApiService } from '../punk-beer-api.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.sass']
})
export class BeersComponent implements OnInit {

  allBeers: any[] = [];
  notFoundMessage: string = '';
  favorites: number[] = [];
  sortProperty: string = '';
  query: string = '';

  constructor(
    private PunkBeerApi: PunkBeerApiService,
    private storageService: StorageService
  ) { }

  focus() {
    document.getElementById('search-bar').focus();
  }

  ngOnInit() {
    this.allBeers = this.PunkBeerApi.getLastSearch();
    // get favorites from localStorage
    this.favorites = this.storageService.getStorage('favorites');
    // add an eventListener to the Search-bar component for the "Enter" key
    /*let searchBar: Element = document.querySelector('#search-bar');
    searchBar.addEventListener('keypress', (event: any) => {
      if (event.code === "Enter") {
        this.getBeer(event.target.value);
      }
    })*/
    document.addEventListener('keypress', this.focus);
  }

  ngOnDestroy(){
    document.removeEventListener('keypress', this.focus);
  }

  //set sort property and call the sortBy function
  sort(property: string): void {
    this.sortProperty = property;
    this.allBeers = this.sortBy(this.sortProperty, this.allBeers);
  }

  //sorting by preference
  sortBy(property: string, allBeers: any[]): any[] {
    allBeers.sort(function (a, b) {
      if (property === "first_brewed") {
        if (a[property].substring(7, 3) + a[property].substring(0, 2) < b[property].substring(7, 3) + b[property].substring(0, 2))
          return -1;
        if (a[property].substring(7, 3) + a[property].substring(0, 2) > b[property].substring(7, 3) + b[property].substring(0, 2))
          return 1;
        return 0;
      } else {
        if (a[property] < b[property])
          return -1;
        if (a[property] > b[property])
          return 1;
        return 0;
      }
    });
    return allBeers;
  }

  //get beers from Api using angular http
  getBeer(query?: string): void {
    this.PunkBeerApi.getBeers(query)
      .subscribe(data => {
        console.log('data http');
        console.log(data);
        this.allBeers = data;
        this.allBeers = this.sortBy(this.sortProperty, this.allBeers);
        this.PunkBeerApi.setLastSearch(data);
        if (this.allBeers.length > 0) {
          this.notFoundMessage = '';
        } else {
          this.notFoundMessage = 'Sorry, no beers with this name are available';
        }
      })
  }

  //add favorite icon if beers are already into the favorite list
  checkFavorite(id: number): boolean {
    if (this.favorites.indexOf(id) >= 0) {
      return true;
    }
    return false;
  }

  //toggle favorite icon
  addFavorite(id: number): boolean {
    let result = false;
    console.log('beer id: ' + id);
    // check if the user add or remove a beer into the favorites
    let position = this.favorites.indexOf(id);
    if (position < 0) {
      //add beer into favorites
      this.favorites.push(id);
      result = true;
    } else {
      // remove beer from the favorites
      this.favorites.splice(position, 1);
    }
    //add favorites array on localStorage
    this.storageService.setStorage('favorites', this.favorites);
    // store the new favorite list on dataService (need it for beerDetails component)
  return result;
  }
}
