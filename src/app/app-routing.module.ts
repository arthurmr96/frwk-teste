import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppModule} from './app.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./app.module').then(m => AppModule) },
  { path: 'albums', loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule) },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
