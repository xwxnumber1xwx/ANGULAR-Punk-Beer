import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { PunkBeerApiService } from './punk-beer-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PunkBeerApiService', () => {
  //const service: PunkBeerApiService = TestBed.get(PunkBeerApiService);
  let injector: TestBed;
  let service: PunkBeerApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PunkBeerApiService]
    });

    injector = getTestBed();
    service = injector.get(PunkBeerApiService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});


