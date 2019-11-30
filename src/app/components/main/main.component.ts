import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserAlbumComponent } from '../user-album/user-album.component'
import { User } from 'src/app/models/user';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserPostComponent } from '../user-post/user-post.component';
import { UserTodoComponent } from '../user-todo/user-todo.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: User[] = [];
  public selectedUser: User;
  public currentUserID: number;
  @ViewChild(UserDetailComponent, { static: false }) userDetailComponent: UserDetailComponent;
  @ViewChild(UserPostComponent, { static: false }) postComponent: UserPostComponent;
  @ViewChild(UserTodoComponent, { static: false }) userTodoComponent: UserTodoComponent;
  @ViewChild(UserAlbumComponent, { static: false }) userAlbumComponent: UserAlbumComponent;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userList().subscribe(result => {
      this.users = result;
      this.currentUserID = this.users[0].id;
      this.changeUser(this.currentUserID)
    });


  }

  changeUser(currentUserID) {

    let user = this.users.filter(item => item.id == currentUserID)[0];
    this.selectedUser = user;

    this.userDetailComponent.getDetail(user);
    this.postComponent.getPostList(user);
    this.userTodoComponent.getTodoList(user);
    this.userAlbumComponent.getAlbumList(user);
  }

}
