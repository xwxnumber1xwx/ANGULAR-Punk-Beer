import { Component, OnInit, Input } from '@angular/core';
import { PunkBeerApiService } from '../punk-beer-api.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.sass']
})
export class BeersComponent implements OnInit {

  @Input() query: string;
  allBeers: any[] = [];
  notFoundMessage: string = '';
  favorites: any[] = [];

  constructor(
    private PunkBeerApi: PunkBeerApiService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.allBeers = this.PunkBeerApi.getLastSearch();
    // get favorites from localStorage
    this.favorites = this.storageService.getStorage('favorites');
    // add an eventListener to the Search-bar component for the "Enter" key
    let searchBar: Element = document.querySelector('#search-bar');
    searchBar.addEventListener('keypress', (event: any) => {
      if (event.code === "Enter") {
        this.getBeer(event.target.value);
      }
    })
  }

  //get beers from Api using angular http
  getBeer(query?: string): void {
    this.PunkBeerApi.getBeers(query)
      .subscribe(data => {
        console.log('data http');
        console.log(data);
        this.allBeers = data;
        this.PunkBeerApi.setLastSearch(data);
        if (this.allBeers.length > 0) {
          this.notFoundMessage = '';
        } else {
          this.notFoundMessage = 'Sorry, no beers with this name are available';
        }
      })
  }

  //add favorite icon if beers are already into the favorite list
  checkFavorite(id): boolean {
    let result: boolean = false;
    if (this.favorites.indexOf(id) >= 0) {
      result = true;
    }
    return result;
  }

  //toggle favorite icon
  addFavorite(id: Number): void {
    console.log('beer id: ' + id);
    // check if the user add or remove a beer into the favorites
    let position = this.favorites.indexOf(id);
    if (position < 0) {
      //add beer into favorites
      this.favorites.push(id);
    } else {
      // remove beer from the favorites
      this.favorites.splice(position, 1);
    }
    //add favorites array on localStorage
    this.storageService.setStorage('favorites', this.favorites);
    // store the new favorite list on dataService (need it for beerDetails component)
  }
}
