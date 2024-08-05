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

interface RecordStatus {
  total: number;
  uploaded: number;
  failed: number;
  pending: number;
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
    },
    {
      name: 'SMS',
      language: 'English',
      header: 'SMS Header',
      body: 'SMS Body',
      image: null
    },
    {
      name: 'Email',
      language: 'English',
      header: 'Email Header',
      body: 'Email Body',
      image: null
    }
  ];
  frequency = 'Daily';
  recordStatus: RecordStatus = {
    total: 1200,
    uploaded: 560,
    failed: 30,
    pending: 610
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
