// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-bulk-review-confirm',
//   templateUrl: './bulk-review-confirm.component.html',
//   styleUrl: './bulk-review-confirm.component.css'
// })
// export class BulkReviewConfirmComponent {

// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bulk-review-confirm',
  templateUrl: './bulk-review-confirm.component.html',
  styleUrls: ['./bulk-review-confirm.component.css']
})
export class BulkReviewConfirmComponent {
  activeTab = 'review';

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
