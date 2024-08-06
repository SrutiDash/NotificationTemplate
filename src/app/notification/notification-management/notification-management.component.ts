// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-notification-management',
//   templateUrl: './notification-management.component.html',
//   styleUrls: ['./notification-management.component.css']
// })
// export class NotificationManagementComponent {
//   isFilterPromptVisible = false;
//   notifications = [
//     // Sample data, replace with your actual data
//     { id: 1, serviceType: 'Type1', eventTrigger: 'Trigger1', party: 'Party1', createdOn: '12 DEC 2020', createdBy: 'User1' },
//     // Add more sample notifications as needed
//   ];

//   constructor(private router: Router) { }

//   toggleFilterPrompt() {
//     this.isFilterPromptVisible = !this.isFilterPromptVisible;
//   }

//   navigateTo(route: string) {
//     this.router.navigate([route]);
//   }

//   viewNotification(notification: any) {
//     this.router.navigate(['/notification-details', notification.id]);
//   }

//   editNotification(notification: any) {
//     this.router.navigate(['/notification-edit', notification.id]);
//   }

//   deleteNotification(notification: any) {
//     // Logic to delete notification
//   }
// }

//new------------------------------

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service'; // Ensure the path is correct

// @Component({
//   selector: 'app-notification-management',
//   templateUrl: './notification-management.component.html',
//   styleUrls: ['./notification-management.component.css']
// })
// export class NotificationManagementComponent implements OnInit {
//   notifications = [];
//   isFilterPromptVisible = false;

//   constructor(private dataService: DataService, private router: Router) { }

//   ngOnInit() {
//     this.loadNotifications();
//   }

//   loadNotifications() {
//     this.dataService.getNotificationTemplates().subscribe({
//       next: (data) => {
//         this.notifications = data.map(item => ({
//           serviceType: item.serviceType,
//           eventTrigger: item.eventTrigger,
//           party: item.party,
//           createdOn: item.createdOn,
//           createdBy: item.createdBy || 'N/A' // Assuming 'createdBy' might not be provided
//         }));
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

//   viewNotification(notification: any) {
//     this.router.navigate(['/notification-details', notification.id]);
//   }

//   editNotification(notification: any) {
//     this.router.navigate(['/notification-edit', notification.id]);
//   }

//   deleteNotification(notification: any) {
//     // Logic to delete notification
//   }
// }


//new2----------------------------------------

// src/app/notification/notification-management/notification-management.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';  // Ensure the path is correct
import { Notification } from '../../models/notification.model';  // Adjust the path to your actual Notification model location

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.css']
})
// export class NotificationManagementComponent implements OnInit {
//   notifications: Notification[] = [];  // Typed as an array of Notification

//   constructor(private dataService: DataService, private router: Router) { }

//   ngOnInit() {
//     this.loadNotifications();
//   }

//   loadNotifications() {
//     this.dataService.getNotificationTemplates().subscribe({
//       next: (data: Notification[]) => {  // Ensure that data is typed as Notification[]
//         this.notifications = data;
//       },
//       error: (error) => console.error('Error loading notifications:', error)
//     });
//   }

//   toggleFilterPrompt() {
//     // Logic to toggle filter prompt
//   }

//   navigateTo(route: string) {
//     this.router.navigate([route]);
//   }

//   viewNotification(notification: Notification) {  // Now typed correctly
//     this.router.navigate(['/notification-details', notification.id]);
//   }

//   editNotification(notification: Notification) {
//     this.router.navigate(['/notification-edit', notification.id]);
//   }

//   deleteNotification(notification: Notification) {
//     // Logic to delete notification
//   }
// }

export class NotificationManagementComponent implements OnInit {
  notifications: Notification[] = [];
  isFilterPromptVisible: boolean = false;  // Ensure this is declared

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    this.dataService.getNotificationTemplates().subscribe({
      next: (data: Notification[]) => {
        this.notifications = data;
      },
      error: (error) => console.error('Error loading notifications:', error)
    });
  }

  toggleFilterPrompt() {
    this.isFilterPromptVisible = !this.isFilterPromptVisible;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  viewNotification(notification: Notification) {
    this.router.navigate(['/notification-details', notification.id]);  // Assumed 'id' should be part of Notification
  }

  editNotification(notification: Notification) {
    this.router.navigate(['/notification-edit', notification.id]);  // Assumed 'id' should be part of Notification
  }

  deleteNotification(notification: Notification) {
    // Logic to delete notification
  }
}
