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
//   originalNotification: any = {};  // To track original values
//   languagesTexts: any[] = [];
//   search: string = '';
//   isEdited: boolean = false;  // Track if something has been edited

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
//           this.originalNotification = JSON.parse(JSON.stringify(details)); // Store a copy of original data
//           this.languagesTexts = details.languagesTexts;
//         },
//         error: (error) => console.error('Failed to load notification details:', error)
//       });
//     }
//   }

//   // Track if the user has edited something
//   onEdit() {
//     this.isEdited = JSON.stringify(this.notification) !== JSON.stringify(this.originalNotification);
//   }

//   cancel(): void {
//     this.router.navigate(['/notification-management']);
//   }

//   next(): void {
//     if (this.isEdited) {
//       this.dataService.setNotification(this.notification);  // Save edited data in the service
//       this.router.navigate(['/notification-review-confirm']);  // Update the navigation route
//     }
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
  notification: any = {}; // Define the notification object
  languagesTexts: any[] = [];
  isEdited: boolean = false; // To track if any changes have been made
  search: string = ''; // Search field

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const notificationId = this.route.snapshot.params['id'];
    this.dataService.getNotificationDetails(notificationId).subscribe({
      next: (details) => {
        this.notification = details;
        this.languagesTexts = details.languagesTexts.map((item: any) => {
          return {
            ...item,
            header: details.eventTrigger // Set the header value to the event trigger
          };
        });
      },
      error: (error) => console.error('Failed to load notification details:', error)
    });
  }

  onEdit(): void {
    this.isEdited = true; // Set the isEdited flag to true when any field is modified
  }

  cancel(): void {
    this.router.navigate(['/notifications']); // Navigate back to the notification management page
  }

  next(): void {
    // Implement the save or next functionality here
    console.log('Proceed to the next step with the edited notification:', this.notification);
    // Navigate to another page or save the notification
    this.router.navigate(['/notification-review'], { state: { notification: this.notification } });
  }
}
