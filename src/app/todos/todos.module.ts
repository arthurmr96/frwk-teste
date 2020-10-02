import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import {TodosRoutingModule} from './todos-routing.module';
import {AlbumsRoutingModule} from '../albums/albums-routing.module';
import {MaterialModule} from '../shared/material.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class TodosModule { }
