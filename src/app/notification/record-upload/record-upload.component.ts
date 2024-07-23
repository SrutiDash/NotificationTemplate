// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-record-upload',
//   templateUrl: './record-upload.component.html',
//   styleUrl: './record-upload.component.css'
// })
// export class RecordUploadComponent {

// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Record {
  totalRecords: string;
}

@Component({
  selector: 'app-record-upload',
  templateUrl: './record-upload.component.html',
  styleUrls: ['./record-upload.component.css']
})
export class RecordUploadComponent {
  activeTab = 'record-upload';
  record: Record = {
    totalRecords: ''
  };

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
