import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserRoutingModule} from './user.routing.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ProjectRoutingModule} from '../project/project.routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxDatatableModule,
    TranslateModule,
    SharedModule,
    FormsModule
  ]
})
export class UserModule { }
