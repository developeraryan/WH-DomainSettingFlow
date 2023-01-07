import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainSettingComponent } from './modules/domain-setting/domain-setting.component';
import { HeaderComponent } from './shared/header/header.component';
import { DomainDetailsComponent } from './modules/domain-setting/domain-details/domain-details.component';
import { UserManagementComponent } from './modules/domain-setting/user-management/user-management.component';
import { RoleManagementComponent } from './modules/domain-setting/role-management/role-management.component';
import { PendinginvitesComponent } from './modules/domain-setting/pendinginvites/pendinginvites.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { DeleteModelComponent } from './models/delete-model/delete-model.component'
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    DomainSettingComponent,
    HeaderComponent,
    DomainDetailsComponent,
    UserManagementComponent,
    RoleManagementComponent,
    PendinginvitesComponent,
    DeleteModelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
