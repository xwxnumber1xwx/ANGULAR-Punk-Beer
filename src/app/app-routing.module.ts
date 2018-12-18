import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component'
import { BeersComponent } from './beers/beers.component'
import { BeerDetailsComponent } from './beer-details/beer-details.component'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BeersComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'detail/:id', component: BeerDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
