import { TestBed, inject } from '@angular/core/testing';
import { PunkBeerApiService } from './punk-beer-api.service';
import {  HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PunkBeerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
   }));

  it('should be created',
  inject(
    [HttpTestingController], () => {
    const service: PunkBeerApiService = TestBed.get(PunkBeerApiService);
    expect(service).toBeTruthy();
  }));
});
