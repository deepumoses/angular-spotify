import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UsersService } from '../users.service';
import { MyState } from '../store.module';
import * as actions from '../actions';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  artist: any;
  isPlaying: boolean;
  currentlyPlaying: any;
  artistId: any;
  albums: any;
  artists: any;
  topTracks: any;
  tkn = localStorage.getItem('token');

  constructor(
    private store: Store<MyState>,
    private userService: UsersService,
    private router: Router
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.artist = val.artist;
    });
    store.select('musicReducer').subscribe((val) => {
      this.isPlaying = val.isPlaying;
    });
    store.select('musicReducer').subscribe((val) => {
      this.currentlyPlaying = val.currentlyPlaying;
    });
    this.store.select('apiReducer').subscribe((val) => {
      this.artistId = val.artist.id;
    });
  }

  ngOnInit(): void {
    if (this.artistId) {
      this.store.dispatch(actions.showLoader());
      this.userService.getArtistsAlbums(this.tkn, this.artistId).subscribe(
        (response) => {
          this.store.dispatch(actions.artistsAlbumsSuccess(response));
          this.store.dispatch(actions.hideLoader());
          this.store.select('apiReducer').subscribe((val) => {
            this.albums = val.artist.albums.items;
          });
        },
        (error) => {
          this.store.dispatch(actions.artistsFailure());
          this.store.dispatch(actions.hideLoader());
        }
      );
      this.userService.getArtistsTopTracks(this.tkn, this.artistId).subscribe(
        (response) => {
          this.store.dispatch(actions.artistsTopTracksSuccess(response));
          this.store.dispatch(actions.hideLoader());
          this.store.select('apiReducer').subscribe((val) => {
            this.topTracks = val.artist.topTracks.tracks;
          });
        },
        (error) => {
          this.store.dispatch(actions.artistsFailure());
          this.store.dispatch(actions.hideLoader());
        }
      );
      this.userService.getArtistsRelated(this.tkn, this.artistId).subscribe(
        (response) => {
          this.store.dispatch(actions.artistsRelatedSuccess(response));
          this.store.dispatch(actions.hideLoader());
          this.store.select('apiReducer').subscribe((val) => {
            this.artists = val.artist.related.artists;
          });
        },
        (error) => {
          this.store.dispatch(actions.artistsFailure());
          this.store.dispatch(actions.hideLoader());
        }
      );
    }
  }

  playMusic = (url, currentlyPlayingData) => {
    this.store.dispatch(actions.play(url));
    this.store.dispatch(actions.setCurrentlyPlaying(currentlyPlayingData));
  };

  pauseMusic = () => {
    this.store.dispatch(actions.pause());
  };

  redirect = (url) => {
    window.location.href = url;
  };

  handleAlbum = (id) => {
    this.store.dispatch(actions.showLoader());
    this.userService.getAlbum(this.tkn, id).subscribe(
      (response) => {
        this.store.dispatch(actions.albumSuccess(response));
        this.store.dispatch(actions.hideLoader());
        this.router.navigate(['album']);
      },
      (error) => {
        this.store.dispatch(actions.albumFailure());
        this.store.dispatch(actions.hideLoader());
      }
    );
  };

  handleArtist = (id) => {
    this.store.dispatch(actions.showLoader());
    this.userService.getArtist(this.tkn, id).subscribe(
      (response) => {
        this.store.dispatch(actions.artistSuccess(response));
        this.store.dispatch(actions.hideLoader());
        this.router.navigate(['artist']);
      },
      (error) => {
        this.store.dispatch(actions.artistFailure());
        this.store.dispatch(actions.hideLoader());
      }
    );
  };
}
