import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Album } from "../album.model";
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../shared/album.service';

@Component({
  selector: "app-album-card",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.css"]
})
export class AlbumCardComponent implements OnInit {
  @Input()
  album: Album;
@Output()
albumClicked: EventEmitter<Album> = new EventEmitter<Album>();

newPrice: number;

constructor(
  private route: ActivatedRoute,
  private albumService: AlbumService
) {}
  showAlbum(){
    alert('album Selected:' +this.album.albumName);
    this.albumClicked.emit(this.album);


} 

  ngOnInit() {
    if (this.album.onSale) {
      // Apply 10% discount
      this.newPrice = this.album.price - (this.album.price * .10);
      }
   }


}
