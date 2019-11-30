
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
    constructor(
        private httpClient: HttpClient) { }

    public create<T>(item: T, base_url, end_point): Observable<T> {
        return this.httpClient
            .post<T>(`${base_url}/${end_point}`, item);
    }

    public update<T>(item: T, id, base_url, end_point): Observable<T> {
        return this.httpClient
            .put<T>(`${base_url}/${end_point}/${id}`, item);
    }

    read<T>(id: number, base_url, end_point): Observable<T> {
        return this.httpClient
            .get<T>(`${base_url}/${end_point}/${id}`);
    }

    list<T>(queryOptions: string, base_url, end_point): Observable<T[]> {
        return this.httpClient.get<T[]>(`${base_url}/${end_point}?${queryOptions}`);
    }
    delete(id: number, base_url, end_point) {
        return this.httpClient
            .delete(`${base_url}/${end_point}/${id}`);
    }


}