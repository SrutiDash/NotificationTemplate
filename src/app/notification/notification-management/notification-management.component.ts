// // File: src/app/notification-management/notification-management.component.ts

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service';
// import { Notification } from '../../models/notification.model';

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


//newwww

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service';
// import { Notification } from '../../models/notification.model';

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

//   loadNotifications(filters = {}) {
//     this.dataService.getNotificationTemplates(filters).subscribe({
//       next: (data: Notification[]) => this.notifications = data,
//       error: (error) => console.error('Error loading notifications:', error)
//     });
//   }

//   navigateToCreateNotification() {
//     this.router.navigate(['/create-notification']);
//   }

//   toggleFilterPrompt() {
//     this.isFilterPromptVisible = !this.isFilterPromptVisible;
//   }

//   applyFilter(filters) {
//     this.loadNotifications(filters);
//   }

//   viewNotification(notification: Notification) {
//     this.router.navigate(['/notification-details', notification.id]);
//   }

//   editNotification(notification: Notification) {
//     this.router.navigate(['/notification-edit', notification.id]);
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


//newww

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

  loadNotifications(filters: any = {}) {
    this.dataService.getNotificationTemplates(filters).subscribe({
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

  applyFilter(filters: any) {
    this.loadNotifications(filters);
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
