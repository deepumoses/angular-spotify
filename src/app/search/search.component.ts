import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UsersService } from '../users.service';
import { MyState } from '../store.module';
import * as actions from '../actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  artistResults: any;
  trackResults: any;
  tkn = localStorage.getItem('token');
  playlist: Array<any>;
  isPlaying: boolean;
  currentlyPlaying: any;

  constructor(
    private store: Store<MyState>,
    private userService: UsersService,
    private router: Router
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.playlist = val.playlist.items;
    });
    store.select('musicReducer').subscribe((val) => {
      this.isPlaying = val.isPlaying;
    });
    store.select('musicReducer').subscribe((val) => {
      this.currentlyPlaying = val.currentlyPlaying;
    });

    store.select('apiReducer').subscribe((val) => {
      this.artistResults = val.search.results
        ? val.search.results.artists
        : null;
      this.trackResults = val.search.results ? val.search.results.tracks : null;
    });
  }

  ngOnInit(): void {}

  handleArtist = (id) => {
    this.userService.getArtist(this.tkn, id).subscribe(
      (response) => {
        this.store.dispatch(actions.artistSuccess(response));
        this.router.navigate(['artist']);
      },
      (error) => {
        this.store.dispatch(actions.artistFailure());
      }
    );
  };

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
}
