// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-view-bulk-notification',
//   templateUrl: './view-bulk-notification.component.html',
//   styleUrls: ['./view-bulk-notification.component.css']
// })
// export class ViewBulkNotificationComponent implements OnInit {
//   notification: any;

//   constructor(private router: Router) {
//     const navigation = this.router.getCurrentNavigation();
//     if (navigation?.extras?.state) {
//       this.notification = navigation.extras.state.notification;
//     }
//   }

//   ngOnInit(): void {}

//   close(): void {
//     // Implement the close logic
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-bulk-notification',
  templateUrl: './view-bulk-notification.component.html',
  styleUrls: ['./view-bulk-notification.component.css']
})
export class ViewBulkNotificationComponent implements OnInit {
  notification: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.notification = navigation.extras.state['notification'];
    }
  }

  ngOnInit(): void {}

  close(): void {
    // Implement the close logic
  }
}
