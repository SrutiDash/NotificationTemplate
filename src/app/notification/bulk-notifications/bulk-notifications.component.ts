// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-bulk-notifications',
//   templateUrl: './bulk-notifications.component.html',
//   styleUrls: ['./bulk-notifications.component.css']
// })
// export class BulkNotificationsComponent {
//   // Add any necessary logic here
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulk-notifications',
  templateUrl: './bulk-notifications.component.html',
  styleUrls: ['./bulk-notifications.component.css']
})
export class BulkNotificationsComponent implements OnInit {
  selectedTab: string = 'customer';
  showFilter: boolean = false;
  notifications: any[] = [
    // Sample data, replace with your actual data
    { name: 'Notification 1', startDate: '01-01-2023', endDate: '01-02-2023', createdBy: 'User 1', createdOn: '01-01-2023', approvalStatus: 'Pending' },
    // Add more sample notifications as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  createNew() {
    // Logic to create a new bulk notification
  }

  viewNotification(notification: any) {
    // Logic to view a notification
  }

  editNotification(notification: any) {
    // Logic to edit a notification
  }

  deleteNotification(notification: any) {
    // Logic to delete a notification
  }
}
