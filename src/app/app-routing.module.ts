import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { RecentComponent } from './recent/recent.component';
import { CategoryComponent } from './category/category.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ReleaseComponent } from './release/release.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'browse',
    component: BrowseComponent,
  },
  {
    path: 'recent',
    component: RecentComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'playlist',
    component: PlaylistComponent,
  },
  {
    path: 'release',
    component: ReleaseComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'album',
    component: AlbumComponent,
  },
  {
    path: 'artists',
    component: ArtistsComponent,
  },
  {
    path: 'artist',
    component: ArtistComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: '**',
    component: BrowseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
