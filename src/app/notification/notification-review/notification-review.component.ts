// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-notification-review',
//   templateUrl: './notification-review.component.html',
//   styleUrls: ['./notification-review.component.css']
// })
// export class NotificationReviewComponent implements OnInit {
//   notification = {
//     serviceType: '',
//     eventTrigger: '',
//     party: '',
//     parameters: [
//       { channel: '', language: 'English', header: '', body: '', documents: '' }
//     ]
//   };

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     const navigation = this.router.getCurrentNavigation();
//     if (navigation?.extras?.state) {
//       this.notification = navigation.extras.state['notification'];
//     }
//   }

//   cancel(): void {
//     this.router.navigate(['/bulk-notifications']);
//   }

//   back(): void {
//     this.router.navigate(['/create-notification'], { state: { notification: this.notification } });
//   }

//   confirm(): void {
//     // Implement the logic for confirmation
//     console.log('Notification confirmed');
//   }
// }

//new4

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-notification-review',
//   templateUrl: './notification-review.component.html',
//   styleUrls: ['./notification-review.component.css']
// })
// export class NotificationReviewComponent implements OnInit {
//   notification = {
//     serviceType: '',
//     eventTrigger: '',
//     party: '',
//     parameters: [
//       { channel: '', language: 'English', header: '', body: '', documents: '' }
//     ]
//   };

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     const navigation = this.router.getCurrentNavigation();
//     if (navigation?.extras?.state) {
//       this.notification = navigation.extras.state['notification'];
//     }
//   }

//   cancel(): void {
//     this.router.navigate(['/bulk-notifications']);
//   }

//   back(): void {
//     this.router.navigate(['/create-notification'], { state: { notification: this.notification } });
//   }

//   confirm(): void {
//     // Implement the logic for confirmation
//     console.log('Notification confirmed');
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-review',
  templateUrl: './notification-review.component.html',
  styleUrls: ['./notification-review.component.css']
})
export class NotificationReviewComponent implements OnInit {
  notification = {
    serviceType: '',
    eventTrigger: '',
    party: '',
    parameters: [
      { channel: '', language: 'English', header: '', body: '', documents: '' }
    ]
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.notification = navigation.extras.state['notification'];
    }
  }

  cancel(): void {
    this.router.navigate(['/bulk-notifications']);
  }

  back(): void {
    this.router.navigate(['/create-notification'], { state: { notification: this.notification } });
  }

  confirm(): void {
    // Implement the logic for confirmation
    console.log('Notification confirmed');
  }
}
