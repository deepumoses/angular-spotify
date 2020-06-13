import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UsersService } from '../users.service';
import { MyState } from '../store.module';
import * as actions from '../actions';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss'],
})
export class RecentComponent implements OnInit {
  recents: Array<any>;
  isPlaying: boolean;
  currentlyPlaying: any;
  tkn = localStorage.getItem('token');

  constructor(
    private store: Store<MyState>,
    private userService: UsersService
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.recents = val.recent.items;
    });
    store.select('musicReducer').subscribe((val) => {
      this.isPlaying = val.isPlaying;
    });
    store.select('musicReducer').subscribe((val) => {
      this.currentlyPlaying = val.currentlyPlaying;
    });
  }

  ngOnInit(): void {
    this.handleRecent();
  }

  handleRecent = () => {
    this.store.dispatch(actions.showLoader());
    this.userService.getRecent(this.tkn).subscribe(
      (response) => {
        this.store.dispatch(actions.recentSuccess(response));
        this.store.dispatch(actions.hideLoader());
      },
      (error) => {
        this.store.dispatch(actions.recentFailure());
        this.store.dispatch(actions.hideLoader());
      }
    );
  };

  playMusic = (url, currentlyPlayingData, index) => {
    this.store.dispatch(
      actions.setCurrentPlaylist({
        tracks: this.recents,
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
    this.store.dispatch(actions.hideLoader());
  };
}
