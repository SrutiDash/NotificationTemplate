// //new3

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';
// import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';
// import { NotificationDetailsComponent } from './notification/notification-details/notification-details.component';
// import { NotificationEditComponent } from './notification/notification-edit/notification-edit.component';
// import { BulkReviewConfirmComponent } from './notification/bulk-review-confirm/bulk-review-confirm.component';
// import { BulkNotificationsComponent } from './notification/bulk-notifications/bulk-notifications.component';
// import { CreateBulkNotificationComponent } from './notification/create-bulk-notification/create-bulk-notification.component';
// import { ScheduleComponent } from './notification/schedule/schedule.component';
// import { RecordUploadComponent } from './notification/record-upload/record-upload.component';
// import { ViewBulkNotificationComponent } from './notification/view-bulk-notification/view-bulk-notification.component';
// import { BulkEditComponent } from './notification/bulk-edit/bulk-edit.component';
// import { BulkEditReviewComponent } from './notification/bulk-edit-review/bulk-edit-review.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/create-bulk-notification', pathMatch: 'full' },
//   { path: 'notifications', component: NotificationManagementComponent },
//   { path: 'create-notification', component: CreateNotificationComponent },
//   { path: 'notification-details/:id', component: NotificationDetailsComponent },
//   { path: 'notification-edit/:id', component: NotificationEditComponent },
//   { path: 'bulk-review-confirm', component: BulkReviewConfirmComponent },
//   { path: 'bulk-notifications', component: BulkNotificationsComponent },
//   { path: 'create-bulk-notification', component: CreateBulkNotificationComponent },
//   { path: 'schedule', component: ScheduleComponent },
//   { path: 'record-upload', component: RecordUploadComponent },
//   { path: 'view-bulk-notification', component: ViewBulkNotificationComponent },
//   { path: 'bulk-edit', component: BulkEditComponent },
//   { path: 'bulk-edit-review', component: BulkEditReviewComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';
import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';
import { NotificationDetailsComponent } from './notification/notification-details/notification-details.component';
import { NotificationEditComponent } from './notification/notification-edit/notification-edit.component';
import { BulkReviewConfirmComponent } from './notification/bulk-review-confirm/bulk-review-confirm.component';
import { BulkNotificationsComponent } from './notification/bulk-notifications/bulk-notifications.component';
import { CreateBulkNotificationComponent } from './notification/create-bulk-notification/create-bulk-notification.component';
import { ScheduleComponent } from './notification/schedule/schedule.component';
import { RecordUploadComponent } from './notification/record-upload/record-upload.component';
import { ViewBulkNotificationComponent } from './notification/view-bulk-notification/view-bulk-notification.component';
import { BulkEditComponent } from './notification/bulk-edit/bulk-edit.component';
import { NotificationReviewComponent } from './notification/notification-review/notification-review.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-bulk-notification', pathMatch: 'full' },
  { path: 'notifications', component: NotificationManagementComponent },
  { path: 'create-notification', component: CreateNotificationComponent },
  { path: 'notification-details/:id', component: NotificationDetailsComponent },
  { path: 'notification-edit/:id', component: NotificationEditComponent },
  { path: 'bulk-review-confirm', component: BulkReviewConfirmComponent },
  { path: 'bulk-notifications', component: BulkNotificationsComponent },
  { path: 'create-bulk-notification', component: CreateBulkNotificationComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'record-upload', component: RecordUploadComponent },
  { path: 'view-bulk-notification', component: ViewBulkNotificationComponent },
  { path: 'bulk-edit', component: BulkEditComponent },
  { path: 'notification-review', component: NotificationReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

