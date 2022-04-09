import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { FavouritesComponent } from './favourites/favourites.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // Assignment 6
  { path: 'register', component: RegisterComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'search', component: SearchResultComponent},

  { path: 'newReleases', component: NewReleasesComponent },
  { path: 'artist/:idArtist', component: ArtistDiscographyComponent },
  { path: 'album/:idAlbum', component: AlbumComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/newReleases', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
