//newww

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

//   loadNotifications(filters: any = {}) {
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

//   applyFilter(filters: any) {
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


//new

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
  filteredNotifications: Notification[] = [];
  isFilterPromptVisible: boolean = false;
  itemsPerPage = 10;
  currentPage = 1;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications(filters: any = {}) {
    this.dataService.getNotificationTemplates(filters).subscribe({
      next: (data: Notification[]) => {
        this.notifications = data;
        this.updateFilteredNotifications();
      },
      error: (error) => console.error('Error loading notifications:', error)
    });
  }

  updateFilteredNotifications() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.filteredNotifications = this.notifications.slice(start, end);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updateFilteredNotifications();
  }

  navigateToCreateNotification() {
    this.router.navigate(['/create-notification']);
  }

  toggleFilterPrompt() {
    this.isFilterPromptVisible = !this.isFilterPromptVisible;
  }

  applyFilter(filters: any) {
    this.currentPage = 1; // Reset to first page when filters are applied
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
        this.updateFilteredNotifications();
        console.log('Notification deleted successfully.');
      },
      error: (error) => console.error('Error deleting notification:', error)
    });
  }
}
