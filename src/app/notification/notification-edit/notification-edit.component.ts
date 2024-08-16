// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-notification-edit',
//   templateUrl: './notification-edit.component.html',
//   styleUrls: ['./notification-edit.component.css']
// })
// export class NotificationEditComponent implements OnInit {
//   notification: any = {};
//   languagesTexts: any[] = [];
//   search: string = '';  // Search property

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private dataService: DataService
//   ) {}

//   ngOnInit(): void {
//     const notificationId = this.route.snapshot.paramMap.get('id');
//     if (notificationId) {
//       this.dataService.getNotificationDetails(Number(notificationId)).subscribe({
//         next: (details) => {
//           this.notification = details;
//           this.languagesTexts = details.languagesTexts;
//         },
//         error: (error) => console.error('Failed to load notification details:', error)
//       });
//     }
//   }

//   cancel(): void {
//     this.router.navigate(['/notification-management']);
//   }

//   next(): void {
//     this.dataService.selectedServiceType = this.notification.serviceType;
//     this.dataService.selectedEventTrigger = this.notification.eventTrigger;
//     this.dataService.selectedParty = this.notification.party;
//     this.router.navigate(['/review-confirm']);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-notification-edit',
  templateUrl: './notification-edit.component.html',
  styleUrls: ['./notification-edit.component.css']
})
export class NotificationEditComponent implements OnInit {
  notification: any = {};
  originalNotification: any = {};  // To track original values
  languagesTexts: any[] = [];
  search: string = '';
  isEdited: boolean = false;  // Track if something has been edited

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const notificationId = this.route.snapshot.paramMap.get('id');
    if (notificationId) {
      this.dataService.getNotificationDetails(Number(notificationId)).subscribe({
        next: (details) => {
          this.notification = details;
          this.originalNotification = JSON.parse(JSON.stringify(details)); // Store a copy of original data
          this.languagesTexts = details.languagesTexts;
        },
        error: (error) => console.error('Failed to load notification details:', error)
      });
    }
  }

  // Track if the user has edited something
  onEdit() {
    this.isEdited = JSON.stringify(this.notification) !== JSON.stringify(this.originalNotification);
  }

  cancel(): void {
    this.router.navigate(['/notification-management']);
  }

  next(): void {
    if (this.isEdited) {
      this.dataService.setNotification(this.notification);  // Save edited data in the service
      this.router.navigate(['/notification-review-confirm']);  // Update the navigation route
    }
  }
}
