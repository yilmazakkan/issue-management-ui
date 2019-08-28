import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IssueService} from '../../../servives/shared/issue.service';
import {ProjectService} from '../../../servives/shared/project.service';
import {UserService} from '../../../servives/shared/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {

  id: number;
  private sub: any;

  issueDetailForm: FormGroup;
  issueDetail = {};

  datatable_rows = [];
  columns = [];

  projectOptions = [];
  issueStatusOptions = [];
  assigneeOptions = [];

  constructor(private route: ActivatedRoute,
              private  userService: UserService,
              private projectService: ProjectService,
              private  issueService: IssueService,
              private formBuilder: FormBuilder) {
  } // id parametesini alabilmemizin yöntemi ActivatedRoute üzerinden okuma yapmak

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.loadIssueDetails();
    });

    this.columns = [
      {prop: 'id', name: 'No', maxWidth: 40},
      {prop: 'description', name: 'Description'},
      {prop: 'date', name: 'Issue Date'},
      {prop: 'issueStatus', name: 'Issue Status'},
      {prop: 'assignee.nameSurname', name: 'Assignee'},
      {prop: 'issue.project.projectName', name: 'Project Name'},
    ];

//1-Project DD olacak
    this.loadProjects()
//2-Assignee DD olacak
    this.loadAssignees();
//3-Issue Status DD olacak
    this.loadIssueStatuses();
  }

  private loadIssueStatuses() {
    this.issueService.getAllIssueStatuses().subscribe(response => {
      this.issueStatusOptions = response;
    })
  }

  private loadProjects() {
    this.projectService.getAll().subscribe(response => {
      this.projectOptions = response;
    })
  }

  private loadAssignees() {
    this.userService.getAll().subscribe(response => {
      this.assigneeOptions = response;
    })
  }

  private loadIssueDetails()
    {
      this.issueService.getByIdWithDetails(this.id).subscribe(response => {
        this.issueDetail = response;
        this.datatable_rows = response['issueHistories']
      });
    }

  createIssueDetailFormGroup(response) {
    return this.formBuilder.group({
      id: response['id'],
      description: response['description'],
      details: response['details'],
      date: this.fromJsonDate(response['date']),
      issueStatus: response['issueStatus'],
      assignee_id: response['assignee']['id'],
      project_id: response['project']['id'],
      project_manager: response['project']['manager'] ? response['project']['manager']['nameSurname']: '',
    });
  }
  fromJsonDate(jDate): string {
    const bDate: Date = new Date(jDate);
    return bDate.toISOString().substring(0, 10);
  }

  saveIssue() {
    this.issueService.updateIssue(this.issueDetailForm.value).subscribe(response=>{
  console.log(response);
  this.loadIssueDetails();
    });
  }
}

