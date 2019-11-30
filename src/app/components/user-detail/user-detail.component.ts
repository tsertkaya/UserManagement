import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';


import { ModalService } from '../../theme/modal/modal.service';
import { ModalRef } from '../../theme/modal/model/modal-ref.model';
import { PostModalComponent } from '../../components/modals/post-modal/post-modal.component';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  user: User;
  constructor(private modalService: ModalService) {
  }

  getDetail(user) {

    this.user = user;
  }


  onCreateModal(): void {
    const modalRef = this.modalService.open(PostModalComponent, { title: 'My dynamic title', message: 'My dynamic message' });

    modalRef.onResult().subscribe(
      closed => console.log('closed', closed),
      dismissed => console.log('dismissed', dismissed),
      () => console.log('completed')
    );
  }

}
