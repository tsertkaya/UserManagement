import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Photo } from '../models/photo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EndPoints } from '../services/end-points/end-points'
@Injectable()
export class PhotoService {
    constructor(
        private http: HttpClient,
        private baseService: BaseService
    ) {

    }

    albumPhotoList(albumId) {
        return this.baseService.list<Photo>(`albumId=${albumId}`, environment.baseUrl, EndPoints.USER_ALBUM_PHOTOS);
    }

}