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
    this.currentTab = 'genres';
    this.userService.getCategories(this.tkn).subscribe(
      (response) => {
        this.store.dispatch(actions.categoriesSuccess(response));
      },
      (error) => {
        this.store.dispatch(actions.categoriesFailure());
      }
    );
  };

  handleNewReleases = () => {
    this.currentTab = 'newReleases';
    this.userService.getNewReleases(this.tkn).subscribe(
      (response) => {
        this.store.dispatch(actions.newReleasesSuccess(response));
      },
      (error) => {
        this.store.dispatch(actions.newReleasesFailure());
      }
    );
  };

  handleFeatured = () => {
    this.currentTab = 'featured';
    this.userService.getFeatured(this.tkn).subscribe(
      (response) => {
        this.store.dispatch(actions.featuredSuccess(response));
      },
      (error) => {
        this.store.dispatch(actions.featuredFailure());
      }
    );
  };

  handleGenre = (id) => {
    this.userService.getCategory(this.tkn, id).subscribe(
      (response) => {
        this.store.dispatch(actions.categorySuccess(response));
        this.router.navigate(['category']);
      },
      (error) => {
        this.store.dispatch(actions.categoryFailure());
      }
    );
  };

  handleRelease = (id) => {
    this.userService.getRelease(this.tkn, id).subscribe(
      (response) => {
        this.store.dispatch(actions.releaseSuccess(response));
        this.router.navigate(['release']);
      },
      (error) => {
        this.store.dispatch(actions.releaseFailure());
      }
    );
  };

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
