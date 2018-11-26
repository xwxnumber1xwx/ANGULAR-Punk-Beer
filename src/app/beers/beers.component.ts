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
  favorites: Number[] = [];
  searchBar = document.querySelector('#search-bar')

  constructor(private PunkBeerApi: PunkBeerApiService, private storageService: StorageService) { }

  ngOnInit() {
    // get favorites from localStorage
    this.favorites = this.storageService.getStorage('favorites');
    // add an eventListener to the Searchbar component for the "Enter" key
    this.searchBar.addEventListener('keypress', (event: any) => {
      if (event.code === "Enter") {
        this.getBeer(event.target.value);
      }
    })
  }

  //get beers from Api using angular http
  getBeer(query?:string):void {
    this.PunkBeerApi.getBeers(query)
    .subscribe(data => {
      console.log('data http');
      console.log(data);
      this.allBeers = data;
    })
    setTimeout(() => {
      this.addFavoriteIcon(this.allBeers);
    }, 1000);
  }

  //add favorite icon if beers are already into the favorite list
  addFavoriteIcon(beers: any[]) {
    let alreadyFavorites = beers.filter(beer => this.favorites.indexOf(beer.id) >= 0);
    alreadyFavorites.forEach(beer => {
      document.getElementById(beer.id).children[0].classList.toggle('favorite');
      console.log('toggle ' + beer.id);
    })
  }
  //toggle favorite icon
  addFavorite(event: any, id: Number): void {
    console.log('beer id: ' + id);
    event.target.classList.toggle('favorite');
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
  }
}
