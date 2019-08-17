import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import {ProjectRoutingModule} from './project.routing.module';
import {ProjectService} from '../../servives/shared/project.service';
import {TranslateModule} from '@ngx-translate/core';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ProjectRoutingModule,
    TranslateModule,
    SharedModule
  ],
  providers:[ProjectService]
})
export class ProjectModule { }
