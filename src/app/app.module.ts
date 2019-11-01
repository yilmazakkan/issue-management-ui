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
import {ApiService} from './services/api.service';
import {ProjectService} from './services/shared/project.service';
import {IssueService} from './services/shared/issue.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {UserService} from './services/shared/user.service';
import {IssueHistoryService} from './services/shared/issue.history.service';
import {NotfoundComponent} from './shared/notfound/notfound.component';

export const createTranslateLoador = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AppLayoutComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
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
        useFactory: TranslateLoader,
        deps: [HttpClient]
      }
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoador,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ApiService, ProjectService, IssueService, UserService, IssueHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
