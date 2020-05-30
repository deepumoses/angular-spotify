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
  currentlyPlaying;
  isPlaying;

  constructor(private store: Store<MyState>) {
    store.select('musicReducer').subscribe((val) => {
      this.currentlyPlaying = val.currentlyPlaying;
    });
    store.select('musicReducer').subscribe((val) => {
      this.isPlaying = val.isPlaying;
    });
  }

  ngOnInit(): void {}

  playMusic = () => {
    this.store.dispatch(actions.play());
    // let current = 0;
    // setInterval(() => {
    //   current++;
    //   this.store.dispatch(actions.setSeek(current));
    // }, 1000);
  };

  pauseMusic = () => {
    this.store.dispatch(actions.pause());
  };

  updateVolume = (e) => {
    this.store.dispatch(actions.setVolume(e.target.value));
  };

  updateSeek = (e) => {
    this.store.dispatch(actions.setSeek(e.target.value));
  };
}
