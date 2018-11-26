import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { PunkBeerApiService } from '../punk-beer-api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass', '../beers/beers.component.sass']
})
export class FavoritesComponent implements OnInit {

  favoritesID: Number[] = [];
  favoritesBeers: any[] = [];

  constructor(private storageService: StorageService, private PunkBeerApiService: PunkBeerApiService) { }

  ngOnInit() {
    this.favoritesID = this.storageService.getStorage('favorites');
    this.PunkBeerApiService.getBeersFromIds(this.favoritesID)
      .subscribe(data => {
        this.favoritesBeers = data;
        console.log(this.favoritesBeers);
      });
  }

  removeFavorite(event: any, id: Number): void {
    // remove class favorite, it makes sure that in the search bar does not appear as a favorite
    event.target.classList.remove('favorite');
    // remove beer from layout
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    let position = this.favoritesID.indexOf(id);
    // remove beer from the favorites
    this.favoritesID.splice(position, 1);
    //add favorites array on localStorage
    this.storageService.setStorage('favorites', this.favoritesID);
  }
}
