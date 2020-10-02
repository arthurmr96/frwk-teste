import { TestBed } from '@angular/core/testing';

import { JsonplaceholderService } from './jsonplaceholder.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('JsonplaceholderService', () => {
  let service: JsonplaceholderService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(JsonplaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get albums', () => {
    const mockAlbums = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem'
      }
    ];

    service.getAlbums().subscribe(todos => {
      expect(todos[0].userId).toEqual(mockAlbums[0].userId);
      expect(todos[0].id).toEqual(mockAlbums[0].id);
      expect(todos[0].title).toEqual(mockAlbums[0].title);
    });

    const req = httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/albums`);

    expect(req.request.method).toEqual('GET');

    req.flush(mockAlbums);
  });

  it('should get posts', () => {
    const mockPosts = [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
      }
    ];

    service.getPosts().subscribe(todos => {
      expect(todos[0].userId).toEqual(mockPosts[0].userId);
      expect(todos[0].id).toEqual(mockPosts[0].id);
      expect(todos[0].title).toEqual(mockPosts[0].title);
      expect(todos[0].body).toEqual(mockPosts[0].body);
    });

    const req = httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/posts`);

    expect(req.request.method).toEqual('GET');

    req.flush(mockPosts);
  });

  it('should return todos', () => {
    const mockTodos = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
      }
    ];

    service.getTodos().subscribe(todos => {
      expect(todos[0].userId).toEqual(mockTodos[0].userId);
      expect(todos[0].id).toEqual(mockTodos[0].id);
      expect(todos[0].title).toEqual(mockTodos[0].title);
      expect(todos[0].completed).toEqual(mockTodos[0].completed);
    });

    const req = httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/todos`);

    expect(req.request.method).toEqual('GET');

    req.flush(mockTodos);
  });
});
