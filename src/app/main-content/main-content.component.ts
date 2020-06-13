import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UsersService } from '../users.service';
import { MyState } from '../store.module';
import * as actions from '../actions';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  categories: Array<string>;
  loader: boolean;
  tkn = localStorage.getItem('token');

  constructor(
    private store: Store<MyState>,
    private userService: UsersService
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.categories = val.categories;
    });
    store.select('apiReducer').subscribe((val) => {
      this.loader = val.loader;
    });
  }

  ngOnInit(): void {
    this.handleGenres();
  }

  handleGenres = () => {
    this.store.dispatch(actions.showLoader());
    this.userService.getCategories(this.tkn).subscribe(
      (response) => {
        this.store.dispatch(actions.categoriesSuccess(response));
        this.store.dispatch(actions.hideLoader());
      },
      (error) => {
        this.store.dispatch(actions.categoriesFailure());
        this.store.dispatch(actions.hideLoader());
      }
    );
  };
}
