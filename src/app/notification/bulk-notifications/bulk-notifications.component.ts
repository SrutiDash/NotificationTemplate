// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-bulk-notifications',
//   templateUrl: './bulk-notifications.component.html',
//   styleUrls: ['./bulk-notifications.component.css']
// })
// export class BulkNotificationsComponent implements OnInit {
//   notifications = [
//     // Sample data, replace with actual data
//     {
//       name: 'Multicurrency wallets',
//       startDate: '02/06/2022 06:00',
//       endDate: '02/07/2022 06:00',
//       createdBy: 'Admin1',
//       createdOn: '12/07/2020 11:00hrs',
//       approvalStatus: 'Approved'
//     }
//     // Add more sample notifications as needed
//   ];

//   activeTab = 'customer';
//   searchTerm = '';

//   constructor() {}

//   ngOnInit(): void {}

//   setActiveTab(tab: string): void {
//     this.activeTab = tab;
//   }

//   openFilter(): void {
//     // Implement filter logic here
//   }

//   createNotification(): void {
//     // Implement create notification logic here
//   }

//   viewNotification(notification: any): void {
//     // Implement view notification logic here
//   }

//   pauseNotification(notification: any): void {
//     // Implement delete notification logic here
//   }

//   editNotification(notification: any): void {
//     // Implement edit notification logic here
//   }

//   dropNotification(notification: any): void {
//     // Implement edit notification logic here
//   }

//   sort(property: string): void {
//     // Implement sorting logic here
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-bulk-notifications',
//   templateUrl: './bulk-notifications.component.html',
//   styleUrls: ['./bulk-notifications.component.css']
// })
// export class BulkNotificationsComponent implements OnInit {
//   notifications = [
//     {
//       name: 'Multicurrency wallets',
//       startDate: '02/06/2022 06:00',
//       endDate: '02/07/2022 06:00',
//       createdBy: 'Admin1',
//       createdOn: '12/07/2020 11:00hrs',
//       approvalStatus: 'Approved'
//     }
//   ];

//   activeTab = 'customer';
//   searchTerm = '';

//   constructor(private router: Router) {}

//   ngOnInit(): void {}

//   setActiveTab(tab: string): void {
//     this.activeTab = tab;
//   }

//   openFilter(): void {
//     // Implement filter logic here
//   }

//   createNotification(): void {
//     this.router.navigate(['/create-bulk-notification']);
//   }

//   viewNotification(notification: any): void {
//     // Implement view notification logic here
//   }

//   pauseNotification(notification: any): void {
//     // Implement delete notification logic here
//   }

//   editNotification(notification: any): void {
//     // Implement edit notification logic here
//   }

//   dropNotification(notification: any): void {
//     // Implement edit notification logic here
//   }

//   sort(property: string): void {
//     // Implement sorting logic here
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bulk-notifications',
  templateUrl: './bulk-notifications.component.html',
  styleUrls: ['./bulk-notifications.component.css']
})
export class BulkNotificationsComponent implements OnInit {
  notifications = [
    {
      name: 'Multicurrency wallets',
      startDate: '02/06/2022 06:00',
      endDate: '02/07/2022 06:00',
      createdBy: 'Admin1',
      createdOn: '12/07/2020 11:00hrs',
      approvalStatus: 'Approved'
    }
  ];

  activeTab = 'customer';
  searchTerm = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  openFilter(): void {
    // Implement filter logic here
  }

  createNotification(): void {
    this.router.navigate(['/create-bulk-notification']);
  }

  viewNotification(notification: any): void {
    // Implement view notification logic here
  }

  pauseNotification(notification: any): void {
    // Implement delete notification logic here
  }

  editNotification(notification: any): void {
    // Implement edit notification logic here
  }

  dropNotification(notification: any): void {
    // Implement edit notification logic here
  }

  sort(property: string): void {
    // Implement sorting logic here
  }
}
