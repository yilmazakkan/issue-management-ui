import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app.routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './_layout/footer/footer.component';
import {HeaderComponent} from './_layout/header/header.component';
import {SidebarComponent} from './_layout/sidebar/sidebar.component';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BsDatepickerModule, BsDropdownModule, CollapseModule, ModalModule, PaginationModule} from 'ngx-bootstrap';
import {ToastNoAnimation, ToastNoAnimationModule, ToastrModule} from 'ngx-toastr';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ApiService} from './servives/api.service';
import {ProjectService} from './servives/shared/project.service';
import {IssueService} from './servives/shared/issue.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
      maxOpened: 1,
      autoDismiss: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory:TranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ApiService, ProjectService, IssueService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
