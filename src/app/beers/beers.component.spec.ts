import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BeersComponent } from './beers.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaxLengthPipe } from '../max-length.pipe'

describe('BeersComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [BeersComponent, MaxLengthPipe],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',
    inject(
      [HttpTestingController],
      () => {
        expect(component).toBeTruthy();
      }
    )
  );

  it('sorting must return same array length', inject(
    [HttpTestingController],
    () => {
      component.allBeers = [
        { name: "test1" },
        { name: "test2" },
        { name: "test3" }
      ];
      let result = component.sortBy("name", component.allBeers);
      expect(component.allBeers.length).toEqual(result.length);
    }
  )
  );

  it('checkFavorite must return true if an ID is in the array', inject(
    [HttpTestingController],
    () => {
      component.favorites = [1, 2, 3];
      expect(component.checkFavorite(1)).toBeTruthy();
    }
  )
  )

  it('addFavorite must return true if an new id is added into an array and vice-versa', inject(
    [HttpTestingController],
    () => {
      component.favorites = [1, 2, 3];
      expect(component.addFavorite(4)).toBeTruthy();
      expect(component.addFavorite(1)).toBeFalsy();
    }
  )
  )
});
