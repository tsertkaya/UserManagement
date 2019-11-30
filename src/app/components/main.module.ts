import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAlbumComponent } from './user-album/user-album.component';
import { UserPostComponent } from './user-post/user-post.component';
import { UserTodoComponent } from './user-todo/user-todo.component';
import { MainComponent } from './main/main.component';

import { PostModalComponent } from '../components/modals/post-modal/post-modal.component'

import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { PhotoService } from '../services/photo.service';
import { TodoService } from '../services/todo.service';
import { AlbumService } from '../services/album.service';
import { CommentService } from '../services/comment.service';


const appRoutes: Routes = [
  { path: '', component: MainComponent },
  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [UserDetailComponent, UserAlbumComponent, UserPostComponent, UserTodoComponent, MainComponent, PostModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  entryComponents: [
    PostModalComponent
  ],
  providers: [
    UserService,
    PostService,
    PhotoService,
    TodoService,
    AlbumService,
    CommentService
  ]
})
export class MainModule { }
