import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {AccountRoutingModule} from './account.routing.module';



@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule,
    NgxDatatableModule,
    AccountRoutingModule,
    TranslateModule,
    SharedModule,
    FormsModule
  ],
})
export class AccountModule { }
