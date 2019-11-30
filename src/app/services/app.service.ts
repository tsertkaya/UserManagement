import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    selectedUser: User;
    user: BehaviorSubject<User>;
    constructor() {

        this.user = new BehaviorSubject(this.selectedUser);
    }

    changeSelectedUser(user) {
        this.user.next(user);
    }
}
