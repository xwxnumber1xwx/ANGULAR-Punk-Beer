import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PunkBeerApiService } from '../punk-beer-api.service'
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.sass', '../beers/beers.component.sass']
})
export class BeerDetailsComponent implements OnInit {

  beer: any = {};
  favorites: any[] = [];

  constructor(
    private PunkBeerApi: PunkBeerApiService,
    private route: ActivatedRoute,
    private location: Location,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.favorites = this.storageService.getStorage('favorites');
    this.getDetails();
  }

  getDetails(): void {
    // https://angular.io/tutorial/toh-pt5
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    if (id) {
      this.PunkBeerApi.getBeersFromId(id)
        .subscribe(data => {
          this.beer = data[0];
          console.log(this.beer);
          this.addFavoriteIcon();
        });
    }
  }

  goBack(): void {
    this.location.back();
  }

  //add favorite icon if beers are already into the favorite list
  addFavoriteIcon() {
    if (this.favorites.indexOf(this.beer.id) >= 0) {
      document.getElementById("beer-spec").classList.toggle('favorite');
    }
  }

  //toggle favorite icon
  addFavorite(): void {
    document.getElementById("beer-spec").classList.toggle('favorite');
    // check if the user add or remove a beer into the favorites
    let position = this.favorites.indexOf(this.beer.id);
    if (position < 0) {
      //add beer into favorites
      this.favorites.push(this.beer.id);
    } else {
      // remove beer from the favorites
      this.favorites.splice(position, 1);
    }
    //add favorites array on localStorage
    this.storageService.setStorage('favorites', this.favorites);
  }
}
