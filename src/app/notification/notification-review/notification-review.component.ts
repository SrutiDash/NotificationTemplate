// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-notification-review',
//   templateUrl: './notification-review.component.html',
//   styleUrls: ['./notification-review.component.css']
// })
// export class NotificationReviewComponent implements OnInit {
//   // notification: any;
 

//   constructor(private dataService: DataService, private router: Router) { }

//   notification = this.dataService.getNotification();

//   ngOnInit(): void {
//     const navigation = this.router.getCurrentNavigation();
//     if (navigation?.extras.state) {
//       this.notification = navigation.extras.state['notification'];
//     } else {
//       // Handle the case when notification data is not available
//       this.router.navigate(['/notification-management']);
//     }
//   }

//   cancel(): void {
//     this.router.navigate(['/notification-management']);
//   }

//   back(): void {
//     this.router.navigate(['/create-notification']);
//   }

//   confirm(): void {
//     // Implement the confirm logic here
//     console.log('Notification confirmed:', this.notification);
//     // You can also navigate to a different page or show a confirmation message
//     this.router.navigate(['/notification-confirmation'], { state: { notification: this.notification } });
//   }
// }


//new

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-notification-review',
  templateUrl: './notification-review.component.html',
  styleUrls: ['./notification-review.component.css']
})
export class NotificationReviewComponent implements OnInit {
  notification: any;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['notification']) {
      this.notification = navigation.extras.state['notification'];
    } else {
      // Fallback to data service if state is not available
      this.notification = this.dataService.getNotification();
    }

    // Redirect to notification management if no notification data is found
    if (!this.notification) {
      this.router.navigate(['/notification-management']);
    }
  }

  cancel(): void {
    this.router.navigate(['/notification-management']);
  }

  back(): void {
    this.router.navigate(['/create-notification']);
  }

  confirm(): void {
    console.log('Notification confirmed:', this.notification);
    this.router.navigate(['/notification-confirmation'], {
      state: { notification: this.notification },
    });
  }
}
