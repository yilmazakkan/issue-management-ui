import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/shared/user.service';
import {BsModalRef} from 'ngx-bootstrap';
import {FormGroup} from '@angular/forms';
import {Page} from '../../common/page';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  modalRef: BsModalRef;
  userForm: FormGroup;

  page = new Page();
  rows = [];
  cols = [
    {prop: 'id', name: 'No'},
    {prop: 'username', name: 'User Surname', sortable: false},
    {prop: 'nameSurname', name: 'Name Surname', sortable: false},
    {prop: 'email', name: 'email', sortable: false}
  ];
  managerOptions = [];


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.setPage({offset: 0});

  }

  setPage(pageInfo) {
    this.page.page = pageInfo.offset;
    this.userService.getAllPageable(this.page).subscribe(pagedData => {
      this.page.size = pagedData.size;
      this.page.page = pagedData.page;
      this.page.totalElements = pagedData.totalElements;
      this.rows = pagedData.content;
    });
  }


}
