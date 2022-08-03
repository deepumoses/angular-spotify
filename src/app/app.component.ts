import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyState } from './store.module';
import * as actions from './actions';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  audio;
  update: boolean = false;
  constructor(private store: Store<MyState>, private updates: SwUpdate) {
    updates.available.subscribe((event) => {
      this.update = true;

      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    let hashStr = window.location.hash.substring(1);
    let rgx = /([^&]+)=([^&]+)/g;
    let rgxResult,
      hash = { access_token: '', expires_in: 3600 };
    while ((rgxResult = rgx.exec(hashStr))) {
      hash[rgxResult[1]] = rgxResult[2];
    }

    let prodredirurl = 'https://spotify-78866.web.app/callback';
    let localredirurl = 'http://localhost:4200/callback';

    setTimeout(() => {
      window.location.href = prodredirurl;
    }, hash.expires_in * 1000);

    function isLocalHost(url = window.location.href) {
      return url.indexOf('localhost') !== -1 || url.indexOf('127.0.0.1') !== -1;
    }

    console.log('hash', hash.expires_in);

    if (!hash.access_token) {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=22553693d2b448c0b3b63ed0176248be&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${isLocalHost() ? localredirurl : prodredirurl}`;
    } else {
      console.log(hash.access_token);
      // this.ngRedux.dispatch(actions.setToken(hash.access_token));
      localStorage.setItem('token', hash.access_token);
    }
  }
}
