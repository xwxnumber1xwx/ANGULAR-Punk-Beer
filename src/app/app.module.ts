import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { BeersComponent } from './beers/beers.component';
import { MaxLengthPipe } from './max-length.pipe';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { SortbyDirective } from './sortby.directive';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    BeersComponent,
    MaxLengthPipe,
    BeerDetailsComponent,
    SortbyDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
