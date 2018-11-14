import { TestBed } from '@angular/core/testing';

import { PunkBeerApiService } from './punk-beer-api.service';

describe('PunkBeerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PunkBeerApiService = TestBed.get(PunkBeerApiService);
    expect(service).toBeTruthy();
  });
});
