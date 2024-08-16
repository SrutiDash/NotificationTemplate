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
//   search: string = '';  // Add the search property here

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
//     // Assuming that you want to keep the existing data structure for saving
//     this.dataService.selectedServiceType = this.notification.serviceType;
//     this.dataService.selectedEventTrigger = this.notification.eventTrigger;
//     this.dataService.selectedParty = this.notification.party;
//     this.dataService.senderParent = this.notification.senderParent;
//     this.dataService.grade = this.notification.grade;
//     this.dataService.inAppNotifications = [this.notification.inAppNotification];
//     this.dataService.smsNotifications = [this.notification.sms];
//     this.dataService.emailNotifications = [this.notification.email];
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
  languagesTexts: any[] = [];

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
          this.languagesTexts = details.languagesTexts;
        },
        error: (error) => console.error('Failed to load notification details:', error)
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/notification-management']);
  }

  next(): void {
    this.dataService.selectedServiceType = this.notification.serviceType;
    this.dataService.selectedEventTrigger = this.notification.eventTrigger;
    this.dataService.selectedParty = this.notification.party;
    this.router.navigate(['/review-confirm']);
  }
}
