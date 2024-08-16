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
// import { BulkNotificationsComponent } from './notification/bulk-notifications/bulk-notifications.component';
// import { FilterPipe } from './filter.pipe';
// import { CreateBulkNotificationComponent } from './notification/create-bulk-notification/create-bulk-notification.component';
// import { FileDialogComponent } from './notification/file-dialog/file-dialog.component';
// import { ScheduleComponent } from './notification/schedule/schedule.component';
// import { NextDialogComponent } from './notification/next-dialog/next-dialog.component';
// import { RecordUploadComponent } from './notification/record-upload/record-upload.component';
// import { BulkReviewConfirmComponent } from './notification/bulk-review-confirm/bulk-review-confirm.component';
// import { BulkFilterComponent } from './notification/bulk-filter/bulk-filter.component';
// import { ViewBulkNotificationComponent } from './notification/view-bulk-notification/view-bulk-notification.component';
// import { PauseDialogComponent } from './notification/pause-dialog/pause-dialog.component';
// import { BulkEditComponent } from './notification/bulk-edit/bulk-edit.component';
// import { BulkEditReviewComponent } from './notification/bulk-edit-review/bulk-edit-review.component';
// import { NotificationReviewComponent } from './notification/notification-review/notification-review.component';
// import { ServiceTypeComponent } from './notification/service-type/service-type.component';
// import { PaginatorComponent } from './notification/paginator/paginator.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     FilterPromptComponent,
//     CreateNotificationComponent,
//     NotificationManagementComponent,
//     NotificationEditComponent,
//     ReviewConfirmComponent,
//     BulkNotificationsComponent,
//     FilterPipe,
//     CreateBulkNotificationComponent,
//     FileDialogComponent,
//     ScheduleComponent,
//     NextDialogComponent,
//     RecordUploadComponent,
//     BulkReviewConfirmComponent,
//     BulkFilterComponent,
//     ViewBulkNotificationComponent,
//     PauseDialogComponent,
//     BulkEditComponent,
//     BulkEditReviewComponent,
//     NotificationReviewComponent,
//     ServiceTypeComponent,
//     PaginatorComponent
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


//new

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
// import { BulkNotificationsComponent } from './notification/bulk-notifications/bulk-notifications.component';
// import { FilterPipe } from './filter.pipe';
// import { CreateBulkNotificationComponent } from './notification/create-bulk-notification/create-bulk-notification.component';
// import { FileDialogComponent } from './notification/file-dialog/file-dialog.component';
// import { ScheduleComponent } from './notification/schedule/schedule.component';
// import { NextDialogComponent } from './notification/next-dialog/next-dialog.component';
// import { RecordUploadComponent } from './notification/record-upload/record-upload.component';
// import { BulkReviewConfirmComponent } from './notification/bulk-review-confirm/bulk-review-confirm.component';
// import { BulkFilterComponent } from './notification/bulk-filter/bulk-filter.component';
// import { ViewBulkNotificationComponent } from './notification/view-bulk-notification/view-bulk-notification.component';
// import { PauseDialogComponent } from './notification/pause-dialog/pause-dialog.component';
// import { BulkEditComponent } from './notification/bulk-edit/bulk-edit.component';
// import { BulkEditReviewComponent } from './notification/bulk-edit-review/bulk-edit-review.component';
// import { NotificationReviewComponent } from './notification/notification-review/notification-review.component';
// import { ServiceTypeComponent } from './notification/service-type/service-type.component';
// import { PaginatorComponent } from './notification/paginator/paginator.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     FilterPromptComponent,
//     CreateNotificationComponent,
//     NotificationManagementComponent,
//     NotificationEditComponent,
//     ReviewConfirmComponent,
//     BulkNotificationsComponent,
//     FilterPipe,
//     CreateBulkNotificationComponent,
//     FileDialogComponent,
//     ScheduleComponent,
//     NextDialogComponent,
//     RecordUploadComponent,
//     BulkReviewConfirmComponent,
//     BulkFilterComponent,
//     ViewBulkNotificationComponent,
//     PauseDialogComponent,
//     BulkEditComponent,
//     BulkEditReviewComponent,
//     NotificationReviewComponent,
//     ServiceTypeComponent,
//     PaginatorComponent
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
import { CommonModule } from '@angular/common';  // Import CommonModule
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPromptComponent } from './notification/filter-prompt/filter-prompt.component';
import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';
import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';
import { NotificationEditComponent } from './notification/notification-edit/notification-edit.component';
import { ReviewConfirmComponent } from './notification/review-confirm/review-confirm.component';
import { BulkNotificationsComponent } from './notification/bulk-notifications/bulk-notifications.component';
import { FilterPipe } from './filter.pipe';
import { CreateBulkNotificationComponent } from './notification/create-bulk-notification/create-bulk-notification.component';
import { FileDialogComponent } from './notification/file-dialog/file-dialog.component';
import { ScheduleComponent } from './notification/schedule/schedule.component';
import { NextDialogComponent } from './notification/next-dialog/next-dialog.component';
import { RecordUploadComponent } from './notification/record-upload/record-upload.component';
import { BulkReviewConfirmComponent } from './notification/bulk-review-confirm/bulk-review-confirm.component';
import { BulkFilterComponent } from './notification/bulk-filter/bulk-filter.component';
import { ViewBulkNotificationComponent } from './notification/view-bulk-notification/view-bulk-notification.component';
import { PauseDialogComponent } from './notification/pause-dialog/pause-dialog.component';
import { BulkEditComponent } from './notification/bulk-edit/bulk-edit.component';
import { BulkEditReviewComponent } from './notification/bulk-edit-review/bulk-edit-review.component';
import { NotificationReviewComponent } from './notification/notification-review/notification-review.component';
import { ServiceTypeComponent } from './notification/service-type/service-type.component';
import { PaginatorComponent } from './notification/paginator/paginator.component';
import { NotificationDetailsComponent } from './notification/notification-details/notification-details.component';  // Import NotificationDetailsComponent

@NgModule({
  declarations: [
    AppComponent,
    FilterPromptComponent,
    CreateNotificationComponent,
    NotificationManagementComponent,
    NotificationEditComponent,
    ReviewConfirmComponent,
    BulkNotificationsComponent,
    FilterPipe,
    CreateBulkNotificationComponent,
    FileDialogComponent,
    ScheduleComponent,
    NextDialogComponent,
    RecordUploadComponent,
    BulkReviewConfirmComponent,
    BulkFilterComponent,
    ViewBulkNotificationComponent,
    PauseDialogComponent,
    BulkEditComponent,
    BulkEditReviewComponent,
    NotificationReviewComponent,
    ServiceTypeComponent,
    PaginatorComponent,
    NotificationDetailsComponent,  // Add NotificationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    CommonModule  // Add CommonModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
