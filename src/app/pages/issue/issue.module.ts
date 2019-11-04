import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IssueComponent} from './issue.component';
import {IssueRoutingModule} from './issue.routing.module';
import {IssueService} from '../../services/shared/issue.service';
import {SharedModule} from '../../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {IssueDetailComponent} from './issue-detail/issue-detail.component';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [IssueComponent, IssueDetailComponent],
  imports: [
    CommonModule,
    IssueRoutingModule,
    SharedModule,
    NgxDatatableModule,
    TranslateModule,
    SharedModule,
    FormsModule
  ],
  providers: [IssueService,]
})
export class IssueModule {
}
