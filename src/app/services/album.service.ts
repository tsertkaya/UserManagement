import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Album } from '../models/album';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EndPoints } from '../services/end-points/end-points'
@Injectable()
export class AlbumService {
    constructor(
        private http: HttpClient,
        private baseService: BaseService
    ) {

    }


    userAlbumList(id: number) {
        return this.baseService.list<Album>(`userId=${id}`, environment.baseUrl, EndPoints.USER_ALBUMS);
    }

}