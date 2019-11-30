import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { EndPoints } from '../services/end-points/end-points'
@Injectable()
export class TodoService {
    constructor(
        private http: HttpClient,
        private baseService: BaseService
    ) {

    }
    create(item: Todo) {
        return this.baseService.create<Todo>(item, environment.baseUrl, EndPoints.USER_TODOS);
    }

    update(item: Todo) {
        return this.baseService.update<Todo>(item, item.id, environment.baseUrl, EndPoints.USER_TODOS);
    }

    todoList(id: number) {
        return this.baseService.list<Todo>(`userId=${id}`, environment.baseUrl, EndPoints.USER_TODOS);
    }

    delete(id: number) {
        return this.baseService.delete(id, environment.baseUrl, EndPoints.USER_TODOS);
    }







}