import { Component, OnInit, Input, Query } from '@angular/core';
import { PunkBeerApiService } from '../punk-beer-api.service'

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  @Input() query: string;
  allBeers: any[] = [];

  constructor(private PunkBeerApi: PunkBeerApiService) { }

  ngOnInit() { }

  getBeer(query): void {
    this.allBeers = this.PunkBeerApi.getBeers(query)
    .then(response => {
      console.log('status: ' + response.status);
      console.log(response.json()
      .then(data => {
        console.log(data);
        data.forEach((beer)=> {
          console.log(beer);
        })
      })
      );
    });
  };
}
