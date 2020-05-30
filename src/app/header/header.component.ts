import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { UsersService } from '../users.service';
import { MyState } from '../store.module';
import * as actions from '../actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchView: boolean = false;
  imageUrl;
  constructor(
    private store: Store<MyState>,
    private userService: UsersService
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.imageUrl = val.user.imageUrl;
    });
  }

  toggleSearchView = () => {
    this.searchView = !this.searchView;
  };

  ngOnInit(): void {
    let tkn = localStorage.getItem('token');
    console.log('tkn', tkn);
    this.userService.getUser(tkn).subscribe(
      (response) => {
        this.store.dispatch(actions.userSuccess(response));
      },
      (error) => {
        this.store.dispatch(actions.userFailure());
      }
    );
  }
}
