import { Component, OnInit } from '@angular/core';
import {JsonplaceholderService} from '../shared/services/jsonplaceholder.service';
import {Post} from '../shared/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Post[];
  public columns: string[] = ['id', 'userId', 'title', 'body'];

  constructor(private jsonplaceholderService: JsonplaceholderService) { }

  ngOnInit(): void {
    this.jsonplaceholderService.getPosts().subscribe(posts => this.posts = posts);
  }

}
