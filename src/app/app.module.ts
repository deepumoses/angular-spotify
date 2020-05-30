import 'zone.js/dist/zone-error';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { combineReducers } from 'redux';
import { StoreModule } from '@ngrx/store';
import { apiReducer } from './reducers/apiReducer';
import { musicReducer } from './reducers/musicReducer';
import { MyState, INITIAL_STATE } from './store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './header/header.component';
import { UsersService } from './users.service';
import { BrowseComponent } from './browse/browse.component';
import { RecentComponent } from './recent/recent.component';
import { MusicInterfaceComponent } from './music-interface/music-interface.component';
import { CategoryComponent } from './category/category.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ReleaseComponent } from './release/release.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artist/artist.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainContentComponent,
    HeaderComponent,
    BrowseComponent,
    RecentComponent,
    MusicInterfaceComponent,
    CategoryComponent,
    PlaylistComponent,
    ReleaseComponent,
    AlbumsComponent,
    AlbumComponent,
    ArtistsComponent,
    ArtistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    StoreModule.forRoot({
      musicReducer: musicReducer,
      apiReducer: apiReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // let enhancers = [];
    // // ... add whatever other enhancers you want.
    // // You probably only want to expose this tool in devMode.
    // if (devTools.isEnabled()) {
    //   enhancers = [...enhancers, devTools.enhancer()];
    // }
    // ngRedux.configureStore(
    //   combineReducers({ apiReducer: apiReducer, musicReducer: musicReducer }),
    //   INITIAL_STATE,
    //   [],
    //   enhancers
    // );
  }
}
