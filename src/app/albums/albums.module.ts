import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import {AlbumsRoutingModule} from './albums-routing.module';
import {MatTableModule} from '@angular/material/table';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../shared/material.module';



@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AlbumsModule { }
