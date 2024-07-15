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

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.css']
})
export class NotificationManagementComponent {
  isFilterPromptVisible = false;
  notifications = [
    // Sample data, replace with your actual data
    { id: 1, serviceType: 'Type1', eventTrigger: 'Trigger1', party: 'Party1', createdOn: '12 DEC 2020', createdBy: 'User1' },
    // Add more sample notifications as needed
  ];

  constructor(private router: Router) { }

  toggleFilterPrompt() {
    this.isFilterPromptVisible = !this.isFilterPromptVisible;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  viewNotification(notification: any) {
    this.router.navigate(['/notification-details', notification.id]);
  }

  editNotification(notification: any) {
    this.router.navigate(['/notification-edit', notification.id]);
  }

  deleteNotification(notification: any) {
    // Logic to delete notification
  }
}
