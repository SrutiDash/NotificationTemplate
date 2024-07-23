// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// interface Record {
//   totalRecords: string;
// }

// @Component({
//   selector: 'app-record-upload',
//   templateUrl: './record-upload.component.html',
//   styleUrls: ['./record-upload.component.css']
// })
// export class RecordUploadComponent {
//   activeTab = 'record-upload';
//   record: Record = {
//     totalRecords: ''
//   };

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

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// interface Record {
//   totalRecords: string;
// }

// @Component({
//   selector: 'app-record-upload',
//   templateUrl: './record-upload.component.html',
//   styleUrls: ['./record-upload.component.css']
// })
// export class RecordUploadComponent {
//   activeTab = 'record-upload';
//   record: Record = {
//     totalRecords: ''
//   };

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

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// interface Record {
//   totalRecords: string;
// }

// @Component({
//   selector: 'app-record-upload',
//   templateUrl: './record-upload.component.html',
//   styleUrls: ['./record-upload.component.css']
// })
// export class RecordUploadComponent {
//   activeTab = 'record-upload';
//   record: Record = {
//     totalRecords: ''
//   };

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
//   isUploadComplete = false;

//   constructor(private router: Router) {}

//   setActiveTab(tab: string): void {
//     this.activeTab = tab;
//   }

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     if (this.isUploadComplete) {
//       this.router.navigate(['/next-page']); // Replace with actual next page route
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
  isUploadComplete = false;

  constructor(private router: Router) {}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  cancel(): void {
    // Implement cancel logic
  }

  next(): void {
    if (this.isUploadComplete) {
      this.router.navigate(['/next-page']); // Replace with actual next page route
    }
  }
}
