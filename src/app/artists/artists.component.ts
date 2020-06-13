import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UsersService } from '../users.service';
import { MyState } from '../store.module';
import * as actions from '../actions';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  artists: Array<string>;

  tkn = localStorage.getItem('token');

  constructor(
    private store: Store<MyState>,
    private userService: UsersService,
    private router: Router
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.artists = val.artists;
    });
  }

  ngOnInit(): void {
    this.handleArtists();
  }

  handleArtists = () => {
    this.store.dispatch(actions.showLoader());
    this.userService.getArtists(this.tkn).subscribe(
      (response) => {
        this.store.dispatch(actions.artistsSuccess(response));
        this.store.dispatch(actions.hideLoader());
      },
      (error) => {
        this.store.dispatch(actions.artistsFailure());
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
