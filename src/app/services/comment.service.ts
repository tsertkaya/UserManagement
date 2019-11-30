import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Comment } from '../models/comment';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EndPoints } from '../services/end-points/end-points'
@Injectable()
export class CommentService {
    constructor(
        private http: HttpClient,
        private baseService: BaseService
    ) {

    }

    CommentList(postId: number) {
        return this.baseService.list<Comment>(`postId=${postId}`, environment.baseUrl, EndPoints.POST_COMMENTS);
    }

}