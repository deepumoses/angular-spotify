import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UsersService } from '../users.service';
import { MyState } from '../store.module';
import * as actions from '../actions';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  categories: Array<string>;
  newReleases: Array<string>;
  featured: Array<string>;
  currentTab = 'genres';
  tkn = localStorage.getItem('token');

  constructor(
    private store: Store<MyState>,
    private userService: UsersService,
    private router: Router
  ) {
    store.select('apiReducer').subscribe((val) => {
      this.categories = val.categories.items;
    });
    store.select('apiReducer').subscribe((val) => {
      this.newReleases = val.newReleases.items;
    });
    store.select('apiReducer').subscribe((val) => {
      this.featured = val.featured.items;
    });
  }

  ngOnInit(): void {
    console.log('in browse');
    this.handleGenres();
  }

  handleGenres = () => {
    console.log('in handlegenres');
    this.store.dispatch(actions.showLoader());
    this.currentTab = 'genres';
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

  handleNewReleases = () => {
    this.currentTab = 'newReleases';
    this.store.dispatch(actions.showLoader());
    this.userService.getNewReleases(this.tkn).subscribe(
      (response) => {
        this.store.dispatch(actions.newReleasesSuccess(response));
        this.store.dispatch(actions.hideLoader());
      },
      (error) => {
        this.store.dispatch(actions.newReleasesFailure());
        this.store.dispatch(actions.hideLoader());
      }
    );
  };

  handleFeatured = () => {
    this.currentTab = 'featured';
    this.store.dispatch(actions.showLoader());
    this.userService.getFeatured(this.tkn).subscribe(
      (response) => {
        this.store.dispatch(actions.featuredSuccess(response));
        this.store.dispatch(actions.hideLoader());
      },
      (error) => {
        this.store.dispatch(actions.featuredFailure());
        this.store.dispatch(actions.hideLoader());
      }
    );
  };

  handleGenre = (id) => {
    this.store.dispatch(actions.showLoader());
    this.userService.getCategory(this.tkn, id).subscribe(
      (response) => {
        this.store.dispatch(actions.categorySuccess(response));
        this.store.dispatch(actions.hideLoader());
        this.router.navigate(['category']);
      },
      (error) => {
        this.store.dispatch(actions.categoryFailure());
        this.store.dispatch(actions.hideLoader());
      }
    );
  };

  handleRelease = (id) => {
    this.store.dispatch(actions.showLoader());
    this.userService.getRelease(this.tkn, id).subscribe(
      (response) => {
        this.store.dispatch(actions.releaseSuccess(response));
        this.store.dispatch(actions.hideLoader());
        this.router.navigate(['release']);
      },
      (error) => {
        this.store.dispatch(actions.releaseFailure());
        this.store.dispatch(actions.hideLoader());
      }
    );
  };

  handlePlayList = (id) => {
    this.store.dispatch(actions.showLoader());
    this.userService.getPlayList(this.tkn, id).subscribe(
      (response) => {
        console.log('success');
        this.store.dispatch(actions.playlistSuccess(response));
        this.store.dispatch(actions.hideLoader());
        this.router.navigate(['playlist']);
      },
      (error) => {
        console.log('failure');
        this.store.dispatch(actions.playlistFailure());
        this.store.dispatch(actions.hideLoader());
      }
    );
  };
}
