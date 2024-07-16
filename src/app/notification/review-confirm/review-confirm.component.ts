// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-review-confirm',
//   templateUrl: './review-confirm.component.html',
//   styleUrls: ['./review-confirm.component.css']
// })
// export class ReviewConfirmComponent implements OnInit {
//   serviceType: string = '';
//   eventTrigger: string = '';
//   party: string = '';
//   senderParent: string = '';
//   grade: string = '';
//   channels: string[] = [];
//   inAppSmsNotifications: any[] = [];
//   emailNotifications: any[] = [];

//   constructor(private dataService: DataService, private router: Router) { }

//   ngOnInit(): void {
//     this.serviceType = this.dataService.selectedServiceType;
//     this.eventTrigger = this.dataService.selectedEventTrigger;
//     this.party = this.dataService.selectedParty;
//     this.senderParent = this.dataService.senderParent;
//     this.grade = this.dataService.grade;
//     this.channels = this.dataService.channels;
//     this.inAppSmsNotifications = this.dataService.inAppSmsNotifications;
//     this.emailNotifications = this.dataService.emailNotifications;
//   }

//   cancel() {
//     this.router.navigate(['/notification-management']);
//   }

//   back() {
//     this.router.navigate(['/create-notification']);
//   }

//   confirm() {
//     // Save the data and navigate to the success page or perform other actions
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.css']
})
export class ReviewConfirmComponent implements OnInit {
  serviceType: string = '';
  eventTrigger: string = '';
  party: string = '';
  senderParent: string = '';
  grade: string = '';
  channels: string[] = [];
  inAppSmsNotifications: any[] = [];
  emailNotifications: any[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    // Load data from the service or state management
    this.serviceType = this.dataService.selectedServiceType;
    this.eventTrigger = this.dataService.selectedEventTrigger;
    this.party = this.dataService.selectedParty;
    this.senderParent = this.dataService.senderParent;
    this.grade = this.dataService.grade;
    this.channels = this.dataService.channels;

    // Sample data for demonstration purposes
    this.inAppSmsNotifications = [
      { language: 'English', header: 'Sample Header 1', body: 'Sample Body 1' },
      { language: 'Spanish', header: 'Sample Header 2', body: 'Sample Body 2' }
    ];

    this.emailNotifications = [
      { language: 'English', header: 'Email Header 1', body: 'Email Body 1', attachableDocument: 'Document 1' },
      { language: 'Spanish', header: 'Email Header 2', body: 'Email Body 2', attachableDocument: 'Document 2' }
    ];
  }

  cancel() {
    // Handle cancel logic
    this.router.navigate(['/notification-management']);
  }

  back() {
    // Navigate back to the previous page
    this.router.navigate(['/create-notification']);
  }

  confirm() {
    // Handle confirm logic
    // Save the data and redirect to the success page
    this.dataService.saveNotification().subscribe(() => {
      this.router.navigate(['/success']);
    });
  }
}
