import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FavoritesComponent } from './favorites/favorites.component'
import { SearchBarComponent } from './search-bar/search-bar.component'
import { BeerDetailsComponent } from './beer-details/beer-details.component'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SearchBarComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'detail/:id', component: BeerDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
