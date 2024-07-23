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
//   isFilterVisible = false;
//   filters = {
//     notificationName: '',
//     startDate: '',
//     endDate: '',
//     status: ''
//   };

//   constructor(private router: Router) {}

//   ngOnInit(): void {}

//   setActiveTab(tab: string): void {
//     this.activeTab = tab;
//   }

//   openFilter(): void {
//     this.isFilterVisible = true;
//   }

//   closeFilter(): void {
//     this.isFilterVisible = false;
//   }

//   applyFilter(filters: any): void {
//     // Implement the filter logic here, for now we just log the filters
//     console.log('Filters applied:', filters);
//     this.closeFilter();
//   }

//   createNotification(): void {
//     this.router.navigate(['/create-bulk-notification']);
//   }

//   viewNotification(notification: any): void {
//     // Implement view notification logic here
//   }

//   pauseNotification(notification: any): void {
//     // Implement pause notification logic here
//   }

//   editNotification(notification: any): void {
//     // Implement edit notification logic here
//   }

//   dropNotification(notification: any): void {
//     // Implement drop notification logic here
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
  isFilterVisible = false;
  filters = {
    notificationName: '',
    startDate: '',
    endDate: '',
    status: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  openFilter(): void {
    this.isFilterVisible = true;
  }

  closeFilter(): void {
    this.isFilterVisible = false;
  }

  applyFilter(filters: any): void {
    // Apply the filter logic here, for now we just log the filters
    console.log('Filters applied:', filters);
    this.closeFilter();
  }

  createNotification(): void {
    this.router.navigate(['/create-bulk-notification']);
  }

  viewNotification(notification: any): void {
    // Implement view notification logic here
  }

  pauseNotification(notification: any): void {
    // Implement pause notification logic here
  }

  editNotification(notification: any): void {
    // Implement edit notification logic here
  }

  dropNotification(notification: any): void {
    // Implement drop notification logic here
  }

  sort(property: string): void {
    // Implement sorting logic here
  }
}
