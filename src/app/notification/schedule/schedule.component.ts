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

//   cancel(): void {
//     // Implement cancel logic
//   }

//   confirm(): void {
//     // Implement confirm logic
//     this.isConfirmEnabled = true;
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
  isConfirmEnabled = false;

  constructor(private router: Router) {}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  cancel(): void {
    // Implement cancel logic
  }

  confirm(): void {
    // Implement confirm logic
    this.router.navigate(['/nextPage']);
  }
}
