// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';
// import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';
// import { NotificationDetailsComponent } from './notification/notification-details/notification-details.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/notification-management', pathMatch: 'full' },
//   { path: 'notification-management', component: NotificationManagementComponent },
//   { path: 'create-notification', component: CreateNotificationComponent },
//   { path: 'notification-details/:id', component: NotificationDetailsComponent } // Add this route
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

const routes: Routes = [
  { path: '', redirectTo: '/notification-management', pathMatch: 'full' },
  { path: 'notification-management', component: NotificationManagementComponent },
  { path: 'create-notification', component: CreateNotificationComponent },
  { path: 'notification-details/:id', component: NotificationDetailsComponent },
  { path: 'notification-edit/:id', component: NotificationEditComponent } // Add this route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
