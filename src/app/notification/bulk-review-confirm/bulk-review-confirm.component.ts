// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-bulk-review-confirm',
//   templateUrl: './bulk-review-confirm.component.html',
//   styleUrl: './bulk-review-confirm.component.css'
// })
// export class BulkReviewConfirmComponent {

// }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-bulk-review-confirm',
//   templateUrl: './bulk-review-confirm.component.html',
//   styleUrls: ['./bulk-review-confirm.component.css']
// })
// export class BulkReviewConfirmComponent {
//   activeTab = 'review';

//   constructor(private router: Router) {}

//   setActiveTab(tab: string): void {
//     this.activeTab = tab;
//   }

//   cancel(): void {
//     // Implement cancel logic
//   }

//   confirm(): void {
//     // Implement confirm logic
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Notification {
  name: string;
  startDate: string;
  endDate: string;
}

interface Channel {
  name: string;
  language: string;
  header: string;
  body: string;
  image: File | null;
}

@Component({
  selector: 'app-bulk-review-confirm',
  templateUrl: './bulk-review-confirm.component.html',
  styleUrls: ['./bulk-review-confirm.component.css']
})
export class BulkReviewConfirmComponent {
  activeTab = 'review';
  notification: Notification = {
    name: 'Sample Notification',
    startDate: '2024-07-24',
    endDate: '2024-07-31'
  };
  channels: Channel[] = [
    {
      name: 'In-App Notification',
      language: 'English',
      header: 'Sample Header',
      body: 'Sample Body',
      image: new File(["sample content"], "sample-image.jpg")
    }
    // Add more channels if needed
  ];

  constructor(private router: Router) {}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  cancel(): void {
    // Implement cancel logic
  }

  confirm(): void {
    // Implement confirm logic
  }
}
