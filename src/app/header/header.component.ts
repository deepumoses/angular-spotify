import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  imageUrl: string;

  constructor(
    private store: Store<MyState>,
    private userService: UsersService,
    private router: Router
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.imageUrl = val.user.imageUrl;
    });
  }
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

  displaySearchView = () => {
    this.searchView = !this.searchView;
    this.router.navigate(['search']);
  };

  hideSearchView = () => {
    this.searchView = !this.searchView;
  };

  handleSearch = (e) => {
    let tkn = localStorage.getItem('token');
    let searchVal = e.target.value;
    this.store.dispatch(actions.setSearchValueSuccess(searchVal));
    this.store.dispatch(actions.showLoader());
    this.userService.getSearchResults(tkn, searchVal).subscribe(
      (response) => {
        this.store.dispatch(actions.searchResultsSuccess(response));
        this.store.dispatch(actions.hideLoader());
      },
      (error) => {
        this.store.dispatch(actions.searchResultsFailure());
        this.store.dispatch(actions.hideLoader());
      }
    );
  };
}
