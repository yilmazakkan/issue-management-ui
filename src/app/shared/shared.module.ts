import { NgModule } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {ModalModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {CommonModule} from '@angular/common';





@NgModule({

  imports:[
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    ConfirmationComponent
  ],
  exports:[
    TranslateModule,
    ModalModule,
    ReactiveFormsModule,
    ConfirmationComponent
  ],
  declarations: [ConfirmationComponent]
})
export class SharedModule { }
