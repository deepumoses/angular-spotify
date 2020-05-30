import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UsersService } from '../users.service';
import { MyState } from '../store.module';
import * as actions from '../actions';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  albums: Array<string>;
  tkn = localStorage.getItem('token');
  constructor(
    private store: Store<MyState>,
    private userService: UsersService,
    private router: Router
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.albums = val.albums;
    });
  }

  ngOnInit(): void {
    this.handleAlbums();
  }

  handleAlbums = () => {
    this.userService.getAlbums(this.tkn).subscribe(
      (response) => {
        this.store.dispatch(actions.albumsSuccess(response));
      },
      (error) => {
        this.store.dispatch(actions.albumsFailure());
      }
    );
  };

  handleAlbum = (id) => {
    this.userService.getAlbum(this.tkn, id).subscribe(
      (response) => {
        this.store.dispatch(actions.albumSuccess(response));
        this.router.navigate(['album']);
      },
      (error) => {
        this.store.dispatch(actions.albumFailure());
      }
    );
  };
}
