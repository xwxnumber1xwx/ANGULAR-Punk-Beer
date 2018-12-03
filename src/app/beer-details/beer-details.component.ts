import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PunkBeerApiService } from '../punk-beer-api.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.sass', '../beers/beers.component.sass']
})
export class BeerDetailsComponent implements OnInit {

  beer: any;
  favorites: any[] = [];
  notFoundMessage: string = '';

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
    console.log(this.route.snapshot.paramMap);
    if (id) {
      this.PunkBeerApi.getBeersFromId(id)
        .subscribe(data => {
          this.beer = data[0];
          console.log(this.beer);
          if (this.beer) {
            this.notFoundMessage = '';
          } else {
            this.notFoundMessage = 'Sorry, no beers with this name are available';
          }
        });
    } else {
      this.notFoundMessage = 'Sorry, something went wrong';
    }
  }

  goBack(): void {
    this.location.back();
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
  addFavorite(): void {
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
