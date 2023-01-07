import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DomainDetailsComponent } from './modules/domain-setting/domain-details/domain-details.component';
import { DomainSettingComponent } from './modules/domain-setting/domain-setting.component';
import { PendinginvitesComponent } from './modules/domain-setting/pendinginvites/pendinginvites.component';
import { RoleManagementComponent } from './modules/domain-setting/role-management/role-management.component';
import { UserManagementComponent } from './modules/domain-setting/user-management/user-management.component';

const routes: Routes = [
  {
    path : "***",
    component: AppComponent
  },
  {
    path: "domainsetting",
    component: DomainSettingComponent,
    children: [
      {
        path: "domaindetails",
        component : DomainDetailsComponent
      },
      {
        path: "usermanagement",
        component : UserManagementComponent
      },
      {
        path: "rolemanagement",
        component : RoleManagementComponent
      },

      {
        path: "pendinginvites",
        component : PendinginvitesComponent
      },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
