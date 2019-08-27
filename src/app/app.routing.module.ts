import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from './_layout';
import {NotfoundComponent} from './shared/notfound/notfound.component';


const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule'},
      {path: 'issue', loadChildren: './pages/issue/issue.module#IssueModule'},
      {path: 'project', loadChildren: './pages/project/project.module#ProjectModule'}
    ]
  },
  {
    path:'**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
