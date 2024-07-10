// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { FilterPromptComponent } from './notification/filter-prompt/filter-prompt.component';
// import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';
// import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     FilterPromptComponent,
//     CreateNotificationComponent,
//     NotificationManagementComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { RouterModule } from '@angular/router';
// import { FormsModule } from '@angular/forms'; // Import FormsModule
// import { AppComponent } from './app.component';
// import { FilterPromptComponent } from './notification/filter-prompt/filter-prompt.component';
// import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';
// import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     FilterPromptComponent,
//     CreateNotificationComponent,
//     NotificationManagementComponent,
//   ],
//   imports: [
//     AppRoutingModule,
//     BrowserModule,
//     RouterModule.forRoot([
//       // Your routes here
//     ]),
//     FormsModule // Add FormsModule here
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { FilterPromptComponent } from './notification/filter-prompt/filter-prompt.component';
import { CreateNotificationComponent } from './notification/create-notification/create-notification.component';
import { NotificationManagementComponent } from './notification/notification-management/notification-management.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPromptComponent,
    CreateNotificationComponent,
    NotificationManagementComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot([
      // Your routes here
    ]),
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

