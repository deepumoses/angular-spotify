import * as actions from '../actions';

let audio = new Audio();

export interface musicState {
  currentSong: object;
  currentlyPlaying: object;
  isPlaying: Boolean;
  currentTime: number;
}

export const INITIAL_MUSIC_STATE: musicState = {
  currentSong: null,
  currentlyPlaying: null,
  isPlaying: null,
  currentTime: null,
};

export function musicReducer(
  state: musicState = INITIAL_MUSIC_STATE,
  action
): musicState {
  switch (action.type) {
    case actions.PLAY_MUSIC:
      if (!audio.src || (audio.src && audio.src !== action.url && action.url)) {
        audio.src = action.url;
      }
      audio.play();
      return {
        ...state,
        isPlaying: true,
      };

    case actions.PAUSE_MUSIC:
      audio.pause();
      return {
        ...state,
        isPlaying: false,
      };

    case actions.SET_CURRENTLY_PLAYING:
      return {
        ...state,
        currentlyPlaying: { ...action.data },
      };
    case actions.SET_VOLUME:
      let volume = action.data / 100;
      audio.volume = volume;
      return state;
    case actions.SET_SEEK:
      audio.currentTime = action.data;
      return { ...state, currentTime: action.data };
    default:
      return state;
  }
}
