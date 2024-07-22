import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';
import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';
import { NotificationDetailsComponent } from './notification/notification-details/notification-details.component';
import { NotificationEditComponent } from './notification/notification-edit/notification-edit.component';
import { ReviewConfirmComponent } from './notification/review-confirm/review-confirm.component';
import { BulkNotificationsComponent } from './notification/bulk-notifications/bulk-notifications.component';
import { CreateBulkNotificationComponent } from './notification/create-bulk-notification/create-bulk-notification.component';

const routes: Routes = [
  { path: '', redirectTo: '/notifications', pathMatch: 'full' },
  { path: 'notifications', component: NotificationManagementComponent },
  { path: 'create-notification', component: CreateNotificationComponent },
  { path: 'notification-details/:id', component: NotificationDetailsComponent },
  { path: 'notification-edit/:id', component: NotificationEditComponent },
  { path: 'review-confirm', component: ReviewConfirmComponent },
  { path: 'bulk-notifications', component: BulkNotificationsComponent },
  { path: 'create-bulk-notification', component: CreateBulkNotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

