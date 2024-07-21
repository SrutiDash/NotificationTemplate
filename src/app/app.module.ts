// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { FilterPromptComponent } from './notification/filter-prompt/filter-prompt.component';
// import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';
// import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';
// import { NotificationEditComponent } from './notification/notification-edit/notification-edit.component';
// import { ReviewConfirmComponent } from './notification/review-confirm/review-confirm.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     FilterPromptComponent,
//     CreateNotificationComponent,
//     NotificationManagementComponent,
//     NotificationEditComponent,
//     ReviewConfirmComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     NgSelectModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPromptComponent } from './notification/filter-prompt/filter-prompt.component';
import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';
import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';
import { NotificationEditComponent } from './notification/notification-edit/notification-edit.component';
import { ReviewConfirmComponent } from './notification/review-confirm/review-confirm.component';
import { BulkNotificationsComponent } from './notification/bulk-notifications/bulk-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPromptComponent,
    CreateNotificationComponent,
    NotificationManagementComponent,
    NotificationEditComponent,
    ReviewConfirmComponent,
    BulkNotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
