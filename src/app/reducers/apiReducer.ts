import * as actions from '../actions';

export interface apiState {
  token: string;
  user: { imageUrl: string; success: boolean };
  categories: Array<object>;
  newReleases: Array<object>;
  featured: Array<object>;
  recent: Array<object>;
  category: object;
  playlist: object;
  release: object;
  albums: Array<object>;
  album: object;
  artists: Array<object>;
  artist: object;
  search: object;
}

export const INITIAL_API_STATE: apiState = {
  token: '',
  user: { imageUrl: '', success: null },
  categories: [],
  newReleases: [],
  featured: [],
  recent: [],
  category: {},
  playlist: {},
  release: {},
  albums: [],
  album: {},
  artists: [],
  artist: {},
  search: {},
};

export function apiReducer(
  state: apiState = INITIAL_API_STATE,
  action
): apiState {
  switch (action.type) {
    case actions.STORE_TOKEN:
      return { ...state, token: action.token };

    case actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...action.data,
          imageUrl: action.data.images[0].url,
          success: true,
        },
      };
    case actions.FETCH_USER_FAILURE:
      return { ...state, user: { imageUrl: '', success: false } };
    case actions.FETCH_CATEGORIES_SUCCESS:
      console.log(action.data.categories.items);
      return {
        ...state,
        categories: action.data.categories,
      };
    case actions.FETCH_CATEGORIES_FAILURE:
      return { ...state, categories: [] };
    case actions.FETCH_RELEASES_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        newReleases: action.data.albums,
      };
    case actions.FETCH_RELEASES_FAILURE:
      return { ...state, newReleases: [] };
    case actions.FETCH_FEATURED_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        featured: action.data.playlists,
      };
    case actions.FETCH_FEATURED_FAILURE:
      return { ...state, featured: [] };
    case actions.FETCH_RECENT_SUCCESS:
      console.log('FETCH_RECENT_SUCCESS', action.data);
      return {
        ...state,
        recent: action.data,
      };
    case actions.FETCH_RECENT_FAILURE:
      return { ...state, recent: [] };
    case actions.FETCH_CATEGORY_SUCCESS:
      console.log('FETCH_CATEGORY_SUCCESS', action.data);
      return {
        ...state,
        category: action.data,
      };
    case actions.FETCH_CATEGORY_FAILURE:
      return { ...state, category: {} };
    case actions.FETCH_PLAYLIST_SUCCESS:
      console.log('FETCH_PLAYLIST_SUCCESS', action.data);
      return {
        ...state,
        playlist: action.data,
      };
    case actions.FETCH_PLAYLIST_FAILURE:
      return { ...state, playlist: {} };

    case actions.FETCH_RELEASE_SUCCESS:
      console.log('FETCH_RELEASE_SUCCESS', action.data);
      return {
        ...state,
        release: action.data,
      };
    case actions.FETCH_RELEASE_FAILURE:
      return { ...state, release: {} };
    case actions.FETCH_ALBUMS_SUCCESS:
      console.log(action.data.albums.items);
      return {
        ...state,
        albums: action.data.albums,
      };
    case actions.FETCH_ALBUMS_FAILURE:
      return { ...state, albums: [] };
    case actions.FETCH_ALBUM_SUCCESS:
      console.log('FETCH_ALBUM_SUCCESS', action.data);
      return {
        ...state,
        album: action.data,
      };
    case actions.FETCH_ALBUM_FAILURE:
      return { ...state, album: {} };
    case actions.FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: action.data.artists,
      };
    case actions.FETCH_ARTISTS_FAILURE:
      return { ...state, artists: [] };
    case actions.FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        artist: action.data,
      };
    case actions.FETCH_ARTIST_ALBUMS_SUCCESS:
      return {
        ...state,
        artist: { ...state.artist, albums: action.data },
      };
    case actions.FETCH_ARTIST_TOP_TRACKS_SUCCESS:
      return {
        ...state,
        artist: { ...state.artist, topTracks: action.data },
      };
    case actions.FETCH_ARTIST_RELATED_SUCCESS:
      return {
        ...state,
        artist: { ...state.artist, related: action.data },
      };
    case actions.FETCH_ARTIST_FAILURE:
      return { ...state, artist: {} };
    case actions.SET_SEARCH_VALUE_SUCCESS:
      return { ...state, search: { value: action.data } };
    case actions.SET_SEARCH_VALUE_FAILURE:
      return { ...state, search: { value: null } };
    case actions.SET_SEARCH_RESULTS_SUCCESS:
      return { ...state, search: { results: action.data } };
    case actions.SET_SEARCH_RESULTS_FAILURE:
      return { ...state, search: { results: null } };
    default:
      return state;
  }
}
