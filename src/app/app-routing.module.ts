// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';
// import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/notification-management', pathMatch: 'full' },
//   { path: 'notification-management', component: NotificationManagementComponent },
//   { path: 'create-notification', component: CreateNotificationComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';
// import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/notification-management', pathMatch: 'full' },
//   { path: 'notification-management', component: NotificationManagementComponent },
//   { path: 'create-notification', component: CreateNotificationComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';
// import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/notification-management', pathMatch: 'full' },
//   { path: 'notification-management', component: NotificationManagementComponent },
//   { path: 'create-notification', component: CreateNotificationComponent }
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

const routes: Routes = [
  { path: '', redirectTo: '/notification-management', pathMatch: 'full' },
  { path: 'notification-management', component: NotificationManagementComponent },
  { path: 'create-notification', component: CreateNotificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

