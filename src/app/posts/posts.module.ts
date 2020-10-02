import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import {PostsRoutingModule} from './posts-routing.module';
import {AlbumsRoutingModule} from '../albums/albums-routing.module';
import {MaterialModule} from '../shared/material.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PostsModule { }
