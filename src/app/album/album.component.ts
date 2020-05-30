import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UsersService } from '../users.service';
import { MyState } from '../store.module';
import * as actions from '../actions';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  album: Array<string>;
  isPlaying: boolean;
  currentlyPlaying: any;

  constructor(
    private store: Store<MyState>,
    private userService: UsersService,
    private router: Router
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.album = val.album.items;
    });
    store.select('musicReducer').subscribe((val) => {
      this.isPlaying = val.isPlaying;
    });
    store.select('musicReducer').subscribe((val) => {
      this.currentlyPlaying = val.currentlyPlaying;
    });
  }

  ngOnInit(): void {}

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
