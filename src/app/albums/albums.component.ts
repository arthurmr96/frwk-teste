import { Component, OnInit } from '@angular/core';
import {JsonplaceholderService} from 'src/app/shared/services/jsonplaceholder.service';
import {Album} from 'src/app/shared/models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public albums: Album[];
  public columns: string[] = ['userId', 'id', 'title'];

  constructor(private jsonplaceholderService: JsonplaceholderService) { }

  ngOnInit(): void {
    this.jsonplaceholderService.getAlbums().subscribe(albums => this.albums = albums);
  }

}
