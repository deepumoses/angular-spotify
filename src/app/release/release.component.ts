import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UsersService } from '../users.service';
import { MyState } from '../store.module';
import * as actions from '../actions';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss'],
})
export class ReleaseComponent implements OnInit {
  release: Array<string>;
  isPlaying: boolean;
  currentlyPlaying: any;

  constructor(
    private store: Store<MyState>,
    private userService: UsersService,
    private router: Router
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.release = val.release.items;
    });
    store.select('musicReducer').subscribe((val) => {
      this.isPlaying = val.isPlaying;
    });
    store.select('musicReducer').subscribe((val) => {
      this.currentlyPlaying = val.currentlyPlaying;
    });
  }

  ngOnInit(): void {}

  playMusic = (url, currentlyPlayingData, index) => {
    this.store.dispatch(
      actions.setCurrentPlaylist({
        tracks: this.release,
        index,
      })
    );
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
