import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MyState } from '../store.module';
import { UsersService } from '../users.service';
import * as actions from '../actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  playlists: Array<object>;
  tkn = localStorage.getItem('token');

  constructor(
    private store: Store<MyState>,
    private userService: UsersService,
    private router: Router
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.playlists = val.category.playlists.items;
    });
  }

  ngOnInit(): void {}

  handlePlayList = (id) => {
    this.userService.getPlayList(this.tkn, id).subscribe(
      (response) => {
        console.log('success');
        this.store.dispatch(actions.playlistSuccess(response));
        this.router.navigate(['playlist']);
      },
      (error) => {
        console.log('failure');
        this.store.dispatch(actions.playlistFailure());
      }
    );
  };
}
