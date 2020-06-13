import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { UsersService } from '../users.service';
import { MyState } from '../store.module';
import * as actions from '../actions';

@Component({
  selector: 'music-interface',
  templateUrl: './music-interface.component.html',
  styleUrls: ['./music-interface.component.scss'],
})
export class MusicInterfaceComponent implements OnInit {
  currentlyPlaying: any;
  currentPlaylist: any;
  isPlaying: Observable<boolean>;

  constructor(private store: Store<MyState>) {
    store.select('musicReducer').subscribe((val) => {
      this.currentlyPlaying = val.currentlyPlaying;
    });
    store.select('musicReducer').subscribe((val) => {
      this.isPlaying = val.isPlaying;
    });
    store.select('apiReducer').subscribe((val) => {
      this.currentPlaylist = val.currentPlaylist;
    });
  }

  ngOnInit(): void {}

  playMusic = () => {
    this.store.dispatch(actions.play());
  };

  pauseMusic = () => {
    this.store.dispatch(actions.pause());
  };

  nextMusic = () => {
    let currentPlaying = this.currentPlaylist.tracks[
      this.currentPlaylist.index + 1
    ].track
      ? this.currentPlaylist.tracks[this.currentPlaylist.index + 1].track
      : this.currentPlaylist.tracks[this.currentPlaylist.index + 1];
    if (currentPlaying) {
      this.store.dispatch(actions.pause());
      this.store.dispatch(actions.play(currentPlaying.preview_url));
      this.store.dispatch(
        actions.setCurrentPlaylist({
          tracks: null,
          index: this.currentPlaylist.index + 1,
        })
      );
      console.log('currentlyPlaying', currentPlaying);
      this.store.dispatch(actions.setCurrentlyPlaying(currentPlaying));
    } else {
      this.store.dispatch(
        actions.setCurrentPlaylist({
          tracks: null,
          index: 0,
        })
      );
    }
  };

  prevMusic = () => {
    let currentPlaying = this.currentPlaylist.tracks[
      this.currentPlaylist.index - 1
    ].track
      ? this.currentPlaylist.tracks[this.currentPlaylist.index - 1].track
      : this.currentPlaylist.tracks[this.currentPlaylist.index - 1];
    if (currentPlaying) {
      this.store.dispatch(actions.pause());
      this.store.dispatch(actions.play(currentPlaying.preview_url));
      this.store.dispatch(
        actions.setCurrentPlaylist({
          tracks: null,
          index: this.currentPlaylist.index - 1,
        })
      );
      console.log('currentlyPlaying', currentPlaying);
      this.store.dispatch(actions.setCurrentlyPlaying(currentPlaying));
    } else {
      this.store.dispatch(
        actions.setCurrentPlaylist({
          tracks: null,
          index: this.currentPlaylist.tracks.length - 1,
        })
      );
    }
  };

  updateVolume = (e) => {
    this.store.dispatch(actions.setVolume(e.target.value));
  };

  updateSeek = (e) => {
    this.store.dispatch(actions.setSeek(e.target.value));
  };

  redirect = (url) => {
    window.location.href = url;
  };
}
