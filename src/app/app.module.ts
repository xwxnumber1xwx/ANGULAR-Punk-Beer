import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { BeersComponent } from './beers/beers.component';
import { MaxLengthPipe } from './max-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    FavoritesComponent,
    BeersComponent,
    MaxLengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
