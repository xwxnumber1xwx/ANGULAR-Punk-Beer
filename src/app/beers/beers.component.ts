import { Component, OnInit, Input } from '@angular/core';
import { PunkBeerApiService } from '../punk-beer-api.service'

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.sass']
})
export class BeersComponent implements OnInit {

  @Input() query: string;
  allBeers: any[] = [];
  favorites: number[] = [];

  constructor(private PunkBeerApi: PunkBeerApiService) { }

  ngOnInit() { }

  //get beers from Api
  getBeer(query): void {
    this.PunkBeerApi.getBeers(query)
    .then(response => {
      console.log('status: ' + response.status);
      console.log(response.json()
      .then(data => {
        this.allBeers = data;
        console.log(data);
        })
      );
    });
  };

  //toggle favorite icon
  addFavorite(event, id): void {
    console.log('beer id: ' + id);
    console.log(event);
    console.log(event.target);
    event.target.classList.toggle('favorite');
    // check if the user add or remove a beer into the favorites
    let position = this.favorites.indexOf(id);
    if (position < 0) {
      //add beer into favorites
      this.favorites.push(id);
      console.log(this.favorites)
    } else {
      // remove beer from the favorites
      this.favorites.splice(position, 1);
      console.log(this.favorites)
    }
  }
}
