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
  tkn = localStorage.getItem('token');

  constructor(
    private store: Store<MyState>,
    private userService: UsersService
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.categories = val.categories;
    });
  }

  ngOnInit(): void {
    this.handleGenres();
  }

  handleGenres = () => {
    this.userService.getCategories(this.tkn).subscribe(
      (response) => {
        this.store.dispatch(actions.categoriesSuccess(response));
      },
      (error) => {
        this.store.dispatch(actions.categoriesFailure());
      }
    );
  };
}
