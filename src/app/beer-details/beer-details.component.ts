import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PunkBeerApiService } from '../punk-beer-api.service'

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.sass']
})
export class BeerDetailsComponent implements OnInit {

  beer: object;

  constructor(
    private PunkBeerApi: PunkBeerApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    // https://angular.io/tutorial/toh-pt5
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    if (id) {
      this.PunkBeerApi.getBeersFromId(id)
        .then(response => response.json())
        .then(data => {
          this.beer = data[0];
          console.log(this.beer);
        });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
