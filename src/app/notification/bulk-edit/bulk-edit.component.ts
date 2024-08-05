// // import { Component, OnInit } from '@angular/core';
// // import { Router } from '@angular/router';

// // @Component({
// //   selector: 'app-bulk-edit',
// //   templateUrl: './bulk-edit.component.html',
// //   styleUrls: ['./bulk-edit.component.css']
// // })
// // export class BulkEditComponent implements OnInit {
// //   notification = {
// //     name: '',
// //     channel: 'in-app',
// //     language: '',
// //     messageHeader: '',
// //     messageBody: ''
// //   };

// //   constructor(private router: Router) {}

// //   ngOnInit(): void {
// //     const navigation = this.router.getCurrentNavigation();
// //     if (navigation?.extras?.state) {
// //       this.notification = navigation.extras.state.notification;
// //     }
// //   }

// //   cancel(): void {
// //     this.router.navigate(['/bulk-notifications']);
// //   }

// //   next(): void {
// //     // Implement the logic for the next step
// //     console.log('Next step');
// //   }
// // }

// //new

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-bulk-edit',
//   templateUrl: './bulk-edit.component.html',
//   styleUrls: ['./bulk-edit.component.css']
// })
// export class BulkEditComponent implements OnInit {
//   notification = {
//     name: '',
//     channel: 'in-app',
//     language: '',
//     messageHeader: '',
//     messageBody: ''
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

//   next(): void {
//     // Implement the logic for the next step
//     console.log('Next step');
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bulk-edit',
  templateUrl: './bulk-edit.component.html',
  styleUrls: ['./bulk-edit.component.css']
})
export class BulkEditComponent implements OnInit {
  notification = {
    name: '',
    inAppMessageHeader: '',
    inAppMessageBody: '',
    smsMessageHeader: '',
    smsMessageBody: '',
    emailMessageHeader: '',
    emailMessageBody: ''
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

  next(): void {
    // Implement the logic for the next step
    console.log('Next step');
  }
}

