import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EndPoints } from '../services/end-points/end-points'
@Injectable()
export class UserService {
    constructor(
        private http: HttpClient,
        private baseService: BaseService
    ) {

    }

    userList() {
        return this.baseService.list<User>("", environment.baseUrl, EndPoints.USERS);
    }

}