// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-bulk-notifications',
// //   templateUrl: './bulk-notifications.component.html',
// //   styleUrl: './bulk-notifications.component.css'
// // })
// // export class BulkNotificationsComponent {

// // }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-bulk-notifications',
//   templateUrl: './bulk-notifications.component.html',
//   styleUrls: ['./bulk-notifications.component.css']
// })
// export class BulkNotificationsComponent implements OnInit {
//   bulkNotifications = [
//     // Sample data, replace with your actual data
//     { id: 1, serviceType: 'Type1', eventTrigger: 'Trigger1', party: 'Party1', createdOn: '12 DEC 2020', createdBy: 'User1' },
//     // Add more sample bulk notifications as needed
//   ];

//   constructor(private router: Router) { }

//   ngOnInit(): void {
//     // Load your data here
//   }

//   viewNotification(notification: any) {
//     this.router.navigate(['/notification-details', notification.id]);
//   }

//   editNotification(notification: any) {
//     this.router.navigate(['/notification-edit', notification.id]);
//   }

//   deleteNotification(notification: any) {
//     // Logic to delete the notification
//   }
// }

// bulk-notifications.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulk-notifications',
  templateUrl: './bulk-notifications.component.html',
  styleUrls: ['./bulk-notifications.component.css']
})
export class BulkNotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Add initialization logic here if needed
  }

}
