// //new2

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
//   filteredNotifications: Notification[] = [];
//   itemsPerPage = 10;
//   currentPage = 1;

//   isFilterPromptVisible: boolean = false;

//   constructor(private dataService: DataService, private router: Router) { }

//   ngOnInit() {
//     this.loadNotifications();
//   }

//   loadNotifications(filters: any = {}) {
//     this.dataService.getNotificationTemplates(filters).subscribe({
//       next: (data: Notification[]) => {
//         this.notifications = data;
//         this.updateFilteredNotifications();
//       },
//       error: (error) => console.error('Error loading notifications:', error)
//     });
//   }

//   updateFilteredNotifications() {
//     const start = (this.currentPage - 1) * this.itemsPerPage;
//     const end = this.currentPage * this.itemsPerPage;
//     this.filteredNotifications = this.notifications.slice(start, end);
//   }

//   onPageChange(page: number) {
//     this.currentPage = page;
//     this.updateFilteredNotifications();
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
//         this.updateFilteredNotifications();
//         console.log('Notification deleted successfully.');
//       },
//       error: (error) => console.error('Error deleting notification:', error)
//     });
//   }
// }


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
  itemsPerPage = 10;
  currentPage = 1;
  isFilterPromptVisible: boolean = false;
  showModal: boolean = false;
  notificationToDelete: Notification | null = null;

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
    this.loadNotifications(filters);
  }

  viewNotification(notification: Notification) {
    this.router.navigate(['/notification-details', notification.id]);
  }

  editNotification(notification: Notification) {
    this.router.navigate(['/notification-edit', notification.id]);
  }

  confirmDelete(notification: Notification) {
    this.notificationToDelete = notification;
    this.showModal = true;
  }

  hideDeleteConfirmation() {
    this.showModal = false;
    this.notificationToDelete = null;
  }

  deleteNotification() {
    if (this.notificationToDelete) {
      this.dataService.deleteNotification(this.notificationToDelete.id).subscribe({
        next: () => {
          this.notifications = this.notifications.filter(n => n.id !== this.notificationToDelete!.id);
          this.updateFilteredNotifications();
          this.hideDeleteConfirmation();
          console.log('Notification deleted successfully.');
        },
        error: (error) => console.error('Error deleting notification:', error)
      });
    }
  }
}
