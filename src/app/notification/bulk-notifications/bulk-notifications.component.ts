import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PauseDialogComponent } from '../pause-dialog/pause-dialog.component'; // Import the PauseDialogComponent

@Component({
  selector: 'app-bulk-notifications',
  templateUrl: './bulk-notifications.component.html',
  styleUrls: ['./bulk-notifications.component.css']
})
export class BulkNotificationsComponent implements OnInit {
  @ViewChild(PauseDialogComponent) pauseDialog!: PauseDialogComponent; // Add ViewChild reference

  notifications = [
    {
      name: 'Multicurrency wallets',
      startDate: '02/06/2022 06:00',
      endDate: '02/07/2022 06:00',
      createdBy: 'Admin1',
      createdOn: '12/07/2020 11:00hrs',
      approvalStatus: 'Approved',
      inAppMessageHeader: 'Header 1',
      inAppMessageBody: 'Body 1',
      smsMessageHeader: 'Header 2',
      smsMessageBody: 'Body 2',
      emailMessageHeader: 'Header 3',
      emailMessageBody: 'Body 3'
    }
  ];

  activeTab = 'customer';
  searchTerm = '';
  isFilterVisible = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  openFilter(): void {
    this.isFilterVisible = true;
  }

  closeFilter(): void {
    this.isFilterVisible = false;
  }

  applyFilter(filters: any): void {
    console.log('Filters applied:', filters);
    this.closeFilter();
  }

  createNotification(): void {
    this.router.navigate(['/create-bulk-notification']);
  }

  viewNotification(notification: any): void {
    this.router.navigate(['/view-bulk-notification'], { state: { notification } });
  }

  pauseNotification(notification: any): void {
    this.pauseDialog.show();
    this.pauseDialog.confirmed.subscribe((result: boolean) => {
      if (result) {
        console.log('Notification paused');
      }
    });
  }

  editNotification(notification: any): void {
    this.router.navigate(['/bulk-edit'], { state: { notification } });
  }

  dropNotification(notification: any): void {
    // Implement drop notification logic here
  }

  sort(property: string): void {
    // Implement sorting logic here
  }
}
