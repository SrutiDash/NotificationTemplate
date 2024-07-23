// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-record-upload',
//   templateUrl: './record-upload.component.html',
//   styleUrls: ['./record-upload.component.css']
// })
// export class RecordUploadComponent {
//   activeTab = 'record-upload';
//   progress = 48; // Example progress value, you can update this dynamically
//   isUploadComplete = true; // Set to true for demo, update logic as needed

//   constructor(private router: Router) {}

//   setActiveTab(tab: string): void {
//     this.activeTab = tab;
//   }

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     if (this.isUploadComplete) {
//       this.router.navigate(['/bulk-review-confirm']);
//     }
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-upload',
  templateUrl: './record-upload.component.html',
  styleUrls: ['./record-upload.component.css']
})
export class RecordUploadComponent {
  activeTab = 'record-upload';
  progress = 48; // Example progress value, you can update this dynamically
  isUploadComplete = true; // Set to true for demo, update logic as needed

  constructor(private router: Router) {}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  cancel(): void {
    // Implement cancel logic
  }

  next(): void {
    if (this.isUploadComplete) {
      this.router.navigate(['/bulk-review-confirm']);
    }
  }
}
