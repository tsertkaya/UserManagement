import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EndPoints } from '../services/end-points/end-points'
@Injectable()
export class PostService {
    constructor(
        private http: HttpClient,
        private baseService: BaseService
    ) {

    }

    postList(id: number) {
        return this.baseService.list<Post>(`userId=${id}`, environment.baseUrl, EndPoints.USER_POSTS);
    }


}