import { Component, OnInit } from '@angular/core';
import {JsonplaceholderService} from '../shared/services/jsonplaceholder.service';
import {Todo} from '../shared/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: Todo[];
  public columns: string[] = ['id', 'userId', 'title', 'completed'];

  constructor(private jsonplaceholderService: JsonplaceholderService) { }

  ngOnInit(): void {
    this.jsonplaceholderService.getTodos().subscribe(todos => this.todos = todos);
  }
}
