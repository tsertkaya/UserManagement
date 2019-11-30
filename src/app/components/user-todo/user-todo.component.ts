import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { User } from 'src/app/models/user';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.css']
})
export class UserTodoComponent {
  closeResult: string;
  todos: Todo[];

  isEdit = false;
  isDelete = true;

  task: string;
  userId: number;
  selectedTodo: Todo = new Todo();
  constructor(private todoService: TodoService, private modalService: NgbModal) {
  }



  getTodoList(user: User) {

    this.todoService.todoList(user.id).subscribe(item => this.todos = item);

  }

  open(content, isEdit, selected) {
    this.isEdit = isEdit;
    if (isEdit) {
      this.selectedTodo = this.todos.filter(todo => todo.id == selected.id)[0];
      this.task = this.selectedTodo.title;
    } else {
      this.task = "";

    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  saveTask() {
    if (this.isEdit) {
      this.selectedTodo.title = this.task;
      this.todoService.update(this.selectedTodo).subscribe(result => { console.log("result-update", result); this.modalService.dismissAll(); });
    }
    else {
      this.selectedTodo.title = this.task;
      this.selectedTodo.completed = false;
      this.selectedTodo.userId = this.userId;
      this.todos.push(this.selectedTodo);
      this.todoService.create(this.selectedTodo).subscribe(result => { console.log("result-crate", result); this.modalService.dismissAll(); });

    }

  }

  statusChange(todo) {
    todo.completed = !todo.completed;
    this.todoService.update(todo).subscribe(result => { console.log("result-update", result); });
  }

  todoDelete(todo) {
    this.todoService.delete(todo.id).subscribe(result => { console.log("result-delete", result); })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
