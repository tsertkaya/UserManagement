import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { AlbumService } from 'src/app/services/album.service';
import { Album } from 'src/app/models/album';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.css']
})
export class UserAlbumComponent implements OnInit {


  albums: Album[];
  photos: Photo[];
  constructor(private albumService: AlbumService, private photoService: PhotoService) {

  }

  ngOnInit() {
  }

  getAlbumList(user: User) {
    this.albumService.userAlbumList(user.id).subscribe(albums => this.albums = albums);
  }

  changeAlbum(e) {
    this.photoService.albumPhotoList(e.target.value).subscribe(photos => this.photos = photos);
  }

}
