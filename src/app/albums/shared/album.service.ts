import { Injectable } from '@angular/core';
import {ALBUMS} from "../albums.data";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Album } from '../album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(this.url + "/" + id);
  }
  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.url, album);
  }
  url = "http://localhost:3334/albums";

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
       return this.http.get<Album[]>(this.url);
  }
}
