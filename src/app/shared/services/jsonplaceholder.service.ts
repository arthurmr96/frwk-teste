import { Injectable } from '@angular/core';
import {Album} from '../models/album';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';
import {Todo} from '../models/todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums`); }
  getPosts(): Observable<Post[]> {return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`); }
  getTodos(): Observable<Todo[]> {return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos`); }
}
