// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// interface Notification {
//   name: string;
//   startDate: string;
//   endDate: string;
// }

// @Component({
//   selector: 'app-schedule',
//   templateUrl: './schedule.component.html',
//   styleUrls: ['./schedule.component.css']
// })
// export class ScheduleComponent {
//   activeTab = 'schedule';
//   notification: Notification = {
//     name: '',
//     startDate: '',
//     endDate: ''
//   };
//   isConfirmEnabled = false;

//   constructor(private router: Router) {}

//   setActiveTab(tab: string): void {
//     this.activeTab = tab;
//   }

//   checkIfNextCanBeEnabled(): void {
//     this.isConfirmEnabled = !!(this.notification.name && this.notification.startDate && this.notification.endDate);
//   }

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     if (this.isConfirmEnabled) {
//       this.router.navigate(['/record-upload']);
//     }
//   }
// }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// interface Notification {
//   name: string;
//   startDate: string;
//   endDate: string;
// }

// @Component({
//   selector: 'app-schedule',
//   templateUrl: './schedule.component.html',
//   styleUrls: ['./schedule.component.css']
// })
// export class ScheduleComponent {
//   activeTab = 'schedule';
//   notification: Notification = {
//     name: '',
//     startDate: '',
//     endDate: ''
//   };
//   isConfirmEnabled = false;

//   constructor(private router: Router) {}

//   setActiveTab(tab: string): void {
//     this.activeTab = tab;
//   }

//   checkIfNextCanBeEnabled(): void {
//     this.isConfirmEnabled = !!(this.notification.name && this.notification.startDate && this.notification.endDate);
//   }

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     if (this.isConfirmEnabled) {
//       this.router.navigate(['/record-upload']);
//     }
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Notification {
  name: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  activeTab = 'schedule';
  notification: Notification = {
    name: '',
    startDate: '',
    endDate: ''
  };
  isNextEnabled = false;

  constructor(private router: Router) {}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  checkIfNextCanBeEnabled(): void {
    this.isNextEnabled = !!(this.notification.name && this.notification.startDate && this.notification.endDate);
  }

  cancel(): void {
    // Implement cancel logic
  }

  next(): void {
    if (this.isNextEnabled) {
      this.router.navigate(['/record-upload']);
    }
  }
}

