import { Component, OnInit } from '@angular/core';
import {PunkBeerApiService} from '../punk-beer-api.service'

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  constructor(private PunkBeerApi: PunkBeerApiService) { }

  ngOnInit() {
    this.PunkBeerApi.getBeers();
  }

}
