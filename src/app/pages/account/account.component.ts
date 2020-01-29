import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/shared/user.service';
import {ProjectService} from '../../services/shared/project.service';
import {IssueService} from '../../services/shared/issue.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private  userService: UserService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
