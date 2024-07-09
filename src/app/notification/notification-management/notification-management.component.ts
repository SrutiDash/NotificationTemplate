// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-notification-management',
// //   templateUrl: './notification-management.component.html',
// //   styleUrl: './notification-management.component.css'
// // })
// // export class NotificationManagementComponent {

// // }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-notification-management',
//   templateUrl: './notification-management.component.html',
//   styleUrls: ['./notification-management.component.css']
// })
// export class NotificationManagementComponent {

//   constructor(private router: Router) { }

//   navigateToCreate() {
//     this.router.navigate(['/create-notification']);
//   }
// }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-notification-management',
//   templateUrl: './notification-management.component.html',
//   styleUrls: ['./notification-management.component.css']
// })
// export class NotificationManagementComponent {

//   constructor(private router: Router) { }

//   navigateToCreate() {
//     this.router.navigate(['/create-notification']);
//   }
// }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-notification-management',
//   templateUrl: './notification-management.component.html',
//   styleUrls: ['./notification-management.component.css']
// })
// export class NotificationManagementComponent {
//   isFilterPromptVisible = false;

//   constructor(private router: Router) { }

//   toggleFilterPrompt() {
//     this.isFilterPromptVisible = !this.isFilterPromptVisible;
//   }

//   navigateToCreate() {
//     this.router.navigate(['/create-notification']);
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.css']
})
export class NotificationManagementComponent {
  isFilterPromptVisible = false;

  constructor(private router: Router) { }

  toggleFilterPrompt() {
    this.isFilterPromptVisible = !this.isFilterPromptVisible;
  }

  navigateToCreate() {
    this.router.navigate(['/create-notification']);
  }
}
