import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser = (token) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get('https://api.spotify.com/v1/me', options);
  };

  getCategories = (token) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(
      'https://api.spotify.com/v1/browse/categories',
      options
    );
  };

  getNewReleases = (token) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(
      'https://api.spotify.com/v1/browse/new-releases',
      options
    );
  };

  getFeatured = (token) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(
      'https://api.spotify.com/v1/browse/featured-playlists',
      options
    );
  };

  getRecent = (token) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(
      'https://api.spotify.com/v1/me/player/recently-played',
      options
    );
  };

  getCategory = (token, categoryId) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(
      `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`,
      options
    );
  };
  getPlayList = (token, playlist_id) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      options
    );
  };

  getRelease = (token, id) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(
      `https://api.spotify.com/v1/albums/${id}/tracks`,
      options
    );
  };
  getAlbums = (token) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(
      `https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37`,
      options
    );
  };

  getAlbum = (token, id) => {
    return this.getRelease(token, id);
  };

  getArtists = (token) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(
      `https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6`,
      options
    );
  };

  getArtist = (token, id) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, options);
  };

  getArtistsTopTracks = (token, id) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(
      `https://api.spotify.com/v1/artists/${id}/top-tracks?country=IN`,
      options
    );
  };

  getArtistsRelated = (token, id) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(
      `https://api.spotify.com/v1/artists/${id}/related-artists`,
      options
    );
  };

  getArtistsAlbums = (token, id) => {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    return this.http.get(
      `https://api.spotify.com/v1/artists/${id}/albums`,
      options
    );
  };
}
