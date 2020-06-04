export const STORE_TOKEN = "STORE_TOKEN";

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";
export const FETCH_RELEASES_SUCCESS = "FETCH_RELEASES_SUCCESS";
export const FETCH_RELEASES_FAILURE = "FETCH_RELEASES_FAILURE";
export const FETCH_FEATURED_SUCCESS = "FETCH_FEATURED_SUCCESS";
export const FETCH_FEATURED_FAILURE = "FETCH_FEATURED_FAILURE";
export const FETCH_RECENT_SUCCESS = "FETCH_RECENT_SUCCESS";
export const FETCH_RECENT_FAILURE = "FETCH_RECENT_FAILURE";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_FAILURE = "FETCH_CATEGORY_FAILURE";
export const FETCH_PLAYLIST_SUCCESS = "FETCH_PLAYLIST_SUCCESS";
export const FETCH_PLAYLIST_FAILURE = "FETCH_PLAYLIST_FAILURE";
export const FETCH_RELEASE_SUCCESS = "FETCH_RELEASE_SUCCESS";
export const FETCH_RELEASE_FAILURE = "FETCH_RELEASE_FAILURE";
export const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS";
export const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE";
export const FETCH_ALBUM_SUCCESS = "FETCH_ALBUM_SUCCESS";
export const FETCH_ALBUM_FAILURE = "FETCH_ALBUM_FAILURE";
export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
export const FETCH_ARTISTS_FAILURE = "FETCH_ARTISTS_FAILURE";
export const FETCH_ARTIST_SUCCESS = "FETCH_ARTIST_SUCCESS";
export const FETCH_ARTIST_RELATED_SUCCESS = "FETCH_ARTIST_RELATED_SUCCESS";
export const FETCH_ARTIST_ALBUMS_SUCCESS = "FETCH_ARTIST_ALBUMS_SUCCESS";
export const FETCH_ARTIST_TOP_TRACKS_SUCCESS =
  "FETCH_ARTIST_TOP_TRACKS_SUCCESS";
export const FETCH_ARTIST_FAILURE = "FETCH_ARTIST_FAILURE";

export const PLAY_MUSIC = "PLAY_MUSIC";
export const PAUSE_MUSIC = "PAUSE_MUSIC";
export const SET_CURRENTLY_PLAYING = "SET_CURRENTLY_PLAYING";
export const SET_VOLUME = "SET_VOLUME";
export const SET_SEEK = "SET_SEEK";
export const SET_SEARCH_VALUE_SUCCESS = "SET_SEARCH_VALUE_SUCCESS";
export const SET_SEARCH_VALUE_FAILURE = "SET_SEARCH_VALUE_FAILURE";
export const SET_SEARCH_RESULTS_SUCCESS = "SET_SEARCH_RESULTS_SUCCESS";
export const SET_SEARCH_RESULTS_FAILURE = "SET_SEARCH_RESULTS_FAILURE";

export const setToken = (token) => {
  return {
    type: STORE_TOKEN,
    token,
  };
};

// user controls

export const userSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    data,
  };
};

export const userFailure = () => {
  return {
    type: FETCH_USER_FAILURE,
  };
};

// browse controls

export const categoriesSuccess = (data) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    data,
  };
};

export const categoriesFailure = () => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
  };
};

export const newReleasesSuccess = (data) => {
  return {
    type: FETCH_RELEASES_SUCCESS,
    data,
  };
};

export const newReleasesFailure = () => {
  return {
    type: FETCH_RELEASES_FAILURE,
  };
};

export const featuredSuccess = (data) => {
  return {
    type: FETCH_FEATURED_SUCCESS,
    data,
  };
};

export const featuredFailure = () => {
  return {
    type: FETCH_FEATURED_FAILURE,
  };
};

export const recentSuccess = (data) => {
  return {
    type: FETCH_RECENT_SUCCESS,
    data,
  };
};

export const recentFailure = () => {
  return {
    type: FETCH_RECENT_FAILURE,
  };
};

export const categorySuccess = (data) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    data,
  };
};

export const categoryFailure = () => {
  return {
    type: FETCH_CATEGORY_FAILURE,
  };
};

export const playlistSuccess = (data) => {
  return {
    type: FETCH_PLAYLIST_SUCCESS,
    data,
  };
};

export const playlistFailure = () => {
  return {
    type: FETCH_PLAYLIST_FAILURE,
  };
};

export const releaseSuccess = (data) => {
  return {
    type: FETCH_RELEASE_SUCCESS,
    data,
  };
};

export const releaseFailure = () => {
  return {
    type: FETCH_RELEASE_FAILURE,
  };
};

// ALBUMS

export const albumsSuccess = (data) => {
  return {
    type: FETCH_ALBUMS_SUCCESS,
    data,
  };
};

export const albumsFailure = () => {
  return {
    type: FETCH_ALBUMS_FAILURE,
  };
};

export const albumSuccess = (data) => {
  return {
    type: FETCH_ALBUM_SUCCESS,
    data,
  };
};

export const albumFailure = () => {
  return {
    type: FETCH_ALBUM_FAILURE,
  };
};

// ARTISTS
export const artistsSuccess = (data) => {
  return {
    type: FETCH_ARTISTS_SUCCESS,
    data,
  };
};

export const artistsFailure = () => {
  return {
    type: FETCH_ARTISTS_FAILURE,
  };
};

export const artistSuccess = (data) => {
  return {
    type: FETCH_ARTIST_SUCCESS,
    data,
  };
};

export const artistsAlbumsSuccess = (data) => {
  return {
    type: FETCH_ARTIST_ALBUMS_SUCCESS,
    data,
  };
};

export const artistsRelatedSuccess = (data) => {
  return {
    type: FETCH_ARTIST_RELATED_SUCCESS,
    data,
  };
};

export const artistsTopTracksSuccess = (data) => {
  return {
    type: FETCH_ARTIST_TOP_TRACKS_SUCCESS,
    data,
  };
};

export const artistFailure = () => {
  return {
    type: FETCH_ARTIST_FAILURE,
  };
};

//search

export const searchResultsSuccess = (data) => {
  return {
    type: SET_SEARCH_RESULTS_SUCCESS,
    data,
  };
};

export const searchResultsFailure = () => {
  return {
    type: SET_SEARCH_RESULTS_FAILURE,
  };
};

export const setSearchValueSuccess = (data) => {
  return {
    type: SET_SEARCH_VALUE_SUCCESS,
    data,
  };
};

export const setSearchValueFailure = () => {
  return {
    type: SET_SEARCH_VALUE_FAILURE,
  };
};

// music controls

export const play = (url) => {
  return {
    type: PLAY_MUSIC,
    url,
  };
};

export const pause = () => {
  return {
    type: PAUSE_MUSIC,
  };
};

export const setCurrentlyPlaying = (data) => {
  return {
    type: SET_CURRENTLY_PLAYING,
    data,
  };
};

export const setVolume = (data) => {
  return {
    type: SET_VOLUME,
    data,
  };
};

export const setSeek = (data) => {
  return {
    type: SET_SEEK,
    data,
  };
};

// export const pause = () => {
//   return {
//     type: FETCH_RECENT_FAILURE,
//   };
// };
