// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-notification-review-confirm',
//   templateUrl: './notification-review-confirm.component.html',
//   styleUrls: ['./notification-review-confirm.component.css']
// })
// export class NotificationReviewConfirmComponent implements OnInit {
//   notification: any = {};

//   constructor(private router: Router, private dataService: DataService) {}

//   ngOnInit(): void {
//     this.notification = this.dataService.getNotification();
//   }

//   cancel(): void {
//     this.router.navigate(['/notification-edit', this.notification.id]);
//   }

//   back(): void {
//     this.router.navigate(['/notification-edit', this.notification.id]);
//   }

//   confirm(): void {
//     // Handle confirmation logic here (e.g., save changes to the backend)
//     console.log('Notification confirmed:', this.notification);
//     this.router.navigate(['/notification-management']);
//   }
// }


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-notification-review-confirm',
//   templateUrl: './notification-review-confirm.component.html',
//   styleUrls: ['./notification-review-confirm.component.css']
// })
// export class NotificationReviewConfirmComponent {
//   notificationDetails: any = {};

//   constructor(private router: Router, private dataService: DataService) {
//     this.notificationDetails = this.dataService.getNotification();
//   }

//   cancel(): void {
//     // Navigate back to the notification management page
//     this.router.navigate(['/notifications']);
//   }

//   back(): void {
//     // Navigate back to the edit page
//     this.router.navigate(['/notification-edit', this.notificationDetails.id]);
//   }

//   confirm(): void {
//     // Logic for confirming the changes can be implemented here
//     // This could include saving the changes to the server, etc.
//   }
// }


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-notification-review-confirm',
//   templateUrl: './notification-review-confirm.component.html',
//   styleUrls: ['./notification-review-confirm.component.css']
// })
// export class NotificationReviewConfirmComponent {
//   notificationDetails: any = {};

//   constructor(private router: Router, private dataService: DataService) {
//     this.notificationDetails = this.dataService.getNotification();
//   }

//   cancel(): void {
//     this.router.navigate(['/notifications']);
//   }

//   back(): void {
//     this.router.navigate(['/notification-edit', this.notificationDetails.id]);
//   }

//   confirm(): void {
//     // Implement the confirm logic
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-notification-review-confirm',
  templateUrl: './notification-review-confirm.component.html',
  styleUrls: ['./notification-review-confirm.component.css']
})
export class NotificationReviewConfirmComponent implements OnInit {
  notificationDetails: any = {};

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.notificationDetails = this.dataService.getNotification();

    // Handle case where no notification data is found
    if (!this.notificationDetails) {
      console.error('No notification data found.');
      this.cancel(); // Navigate back to the notifications page
    }
  }

  cancel(): void {
    this.router.navigate(['/notifications']);
  }

  // back(): void {
  //   this.router.navigate(['/notification-edit', this.notificationDetails.id]);
  // }

  back(): void {
    this.router.navigate(['/notification-edit']);
  }

  confirm(): void {
    // Implement the confirm logic
  }
}
