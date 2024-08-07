// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service';  // Ensure the path is correct
// import { Notification } from '../../models/notification.model';  // Adjust the path to your actual Notification model location

// @Component({
//   selector: 'app-notification-management',
//   templateUrl: './notification-management.component.html',
//   styleUrls: ['./notification-management.component.css']
// })

// export class NotificationManagementComponent implements OnInit {
//   notifications: Notification[] = [];
//   isFilterPromptVisible: boolean = false;  // Ensure this is declared

//   constructor(private dataService: DataService, private router: Router) { }

//   ngOnInit() {
//     this.loadNotifications();
//   }

//   loadNotifications() {
//     this.dataService.getNotificationTemplates().subscribe({
//       next: (data: Notification[]) => {
//         this.notifications = data;
//       },
//       error: (error) => console.error('Error loading notifications:', error)
//     });
//   }

//   toggleFilterPrompt() {
//     this.isFilterPromptVisible = !this.isFilterPromptVisible;
//   }

//   navigateTo(route: string) {
//     this.router.navigate([route]);
//   }

//   viewNotification(notification: Notification) {
//     this.router.navigate(['/notification-details', notification.id]);  // Assumed 'id' should be part of Notification
//   }

//   editNotification(notification: Notification) {
//     this.router.navigate(['/notification-edit', notification.id]);  // Assumed 'id' should be part of Notification
//   }

//   deleteNotification(notification: Notification) {
//     // Logic to delete notification
//   }
// }


//new2--------------------------------------


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service';
// import { Notification } from '../../models/notification.model';  // Ensure you have this model defined accordingly

// @Component({
//   selector: 'app-notification-management',
//   templateUrl: './notification-management.component.html',
//   styleUrls: ['./notification-management.component.css']
// })
// export class NotificationManagementComponent implements OnInit {
//   notifications: Notification[] = [];
//   isFilterPromptVisible: boolean = false;

//   constructor(private dataService: DataService, private router: Router) { }

//   ngOnInit() {
//     this.loadNotifications();
//   }

//   loadNotifications() {
//     this.dataService.getNotificationTemplates().subscribe({
//       next: (data: Notification[]) => this.notifications = data,
//       error: (error) => console.error('Error loading notifications:', error)
//     });
//   }

//   viewNotification(notificationId: number) {
//     this.router.navigate(['/notification-details', notificationId]);
//   }

//   toggleFilterPrompt() {
//     this.isFilterPromptVisible = !this.isFilterPromptVisible;
//   }

//   navigateToCreateNotification() {
//     this.router.navigate(['/create-notification']);
//   }

//   editNotification(notificationId: number) {
//     this.router.navigate(['/notification-edit', notificationId]);
//   }

//   deleteNotification(notificationId: number) {
//     this.dataService.deleteNotification(notificationId).subscribe({
//       next: () => {
//         this.notifications = this.notifications.filter(notification => notification.id !== notificationId);
//         alert('Notification deleted successfully.');
//       },
//       error: (error) => console.error('Error deleting notification:', error)
//     });
//   }
// }


//new3


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service';
// import { Notification } from '../../models/notification.model'; // Ensure this model is correctly defined

// @Component({
//   selector: 'app-notification-management',
//   templateUrl: './notification-management.component.html',
//   styleUrls: ['./notification-management.component.css']
// })
// export class NotificationManagementComponent implements OnInit {
//   notifications: Notification[] = [];

//   constructor(private dataService: DataService, private router: Router) { }

//   ngOnInit() {
//     this.loadNotifications();
//   }

//   loadNotifications() {
//     this.dataService.getNotificationTemplates().subscribe({
//       next: (data) => this.notifications = data,
//       error: (error) => console.error('Error loading notifications:', error)
//     });
//   }

//   navigateToCreateNotification() {
//     this.router.navigate(['/create-notification']);
//   }

//   viewNotification(notification: Notification) {
//     this.router.navigate(['/notification-details', notification.id]); // Assuming `id` is the correct identifier
//   }

//   editNotification(notification: Notification) {
//     this.router.navigate(['/notification-edit', notification.id]); // Assuming `id` is the correct identifier
//   }

//   deleteNotification(notification: Notification) {
//     this.dataService.deleteNotification(notification.id).subscribe({
//       next: () => {
//         this.notifications = this.notifications.filter(n => n.id !== notification.id);
//         console.log('Notification deleted successfully.');
//       },
//       error: (error) => console.error('Error deleting notification:', error)
//     });
//   }
// }


//new4

// File: src/app/notification-management/notification-management.component.ts

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service';  // Adjust the path as necessary
// import { Notification } from '../../models/notification.model';  // Adjust the path as necessary

// @Component({
//   selector: 'app-notification-management',
//   templateUrl: './notification-management.component.html',
//   styleUrls: ['./notification-management.component.css']
// })
// export class NotificationManagementComponent implements OnInit {
//   notifications: Notification[] = [];
//   isFilterPromptVisible: boolean = false;

//   constructor(private dataService: DataService, private router: Router) { }

//   ngOnInit() {
//     this.loadNotifications();
//   }

//   loadNotifications() {
//     this.dataService.getNotificationTemplates().subscribe({
//       next: (data: Notification[]) => this.notifications = data,
//       error: (error: any) => console.error('Error loading notifications:', error)
//     });
//   }

//   navigateToCreateNotification() {
//     this.router.navigate(['/create-notification']);
//   }

//   toggleFilterPrompt() {
//     this.isFilterPromptVisible = !this.isFilterPromptVisible;
//   }

//   viewNotification(notification: Notification) {
//     this.router.navigate(['/notification-details', notification.id]);
//   }

//   editNotification(notification: Notification) {
//     this.router.navigate(['/notification-edit', notification.id]);
//   }

//   deleteNotification(notificationId: number) {
//     this.dataService.deleteNotification(notificationId).subscribe({
//       next: () => {
//         this.notifications = this.notifications.filter(notification => notification.id !== notificationId);
//         console.log('Notification deleted successfully.');
//       },
//       error: (error: any) => console.error('Error deleting notification:', error)
//     });
//   }
// }

//new

// File: src/app/notification-management/notification-management.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Notification } from '../../models/notification.model';

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.css']
})
export class NotificationManagementComponent implements OnInit {
  notifications: Notification[] = [];
  isFilterPromptVisible: boolean = false;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    this.dataService.getNotificationTemplates().subscribe({
      next: (data: Notification[]) => this.notifications = data,
      error: (error) => console.error('Error loading notifications:', error)
    });
  }

  navigateToCreateNotification() {
    this.router.navigate(['/create-notification']);
  }

  toggleFilterPrompt() {
    this.isFilterPromptVisible = !this.isFilterPromptVisible;
  }

  viewNotification(notification: Notification) {
    this.router.navigate(['/notification-details', notification.id]);
  }

  editNotification(notification: Notification) {
    this.router.navigate(['/notification-edit', notification.id]);
  }

  deleteNotification(notification: Notification) {
    this.dataService.deleteNotification(notification.id).subscribe({
      next: () => {
        this.notifications = this.notifications.filter(n => n.id !== notification.id);
        console.log('Notification deleted successfully.');
      },
      error: (error) => console.error('Error deleting notification:', error)
    });
  }
}
