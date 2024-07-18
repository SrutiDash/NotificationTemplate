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
//   inAppNotifications: any[] = [];
//   smsNotifications: any[] = [];
//   emailNotifications: any[] = [];

//   constructor(private dataService: DataService, private router: Router) { }

//   ngOnInit(): void {
//     // Load data from the service or state management
//     this.serviceType = this.dataService.selectedServiceType;
//     this.eventTrigger = this.dataService.selectedEventTrigger;
//     this.party = this.dataService.selectedParty;
//     this.senderParent = this.dataService.senderParent;
//     this.grade = this.dataService.grade;
//     this.channels = this.dataService.channels;

//     this.inAppNotifications = this.dataService.inAppNotifications; // Corrected
//     this.smsNotifications = this.dataService.smsNotifications; // Corrected
//     this.emailNotifications = this.dataService.emailNotifications;
//   }

//   cancel() {
//     // Handle cancel logic
//     this.router.navigate(['/notification-management']);
//   }

//   back() {
//     // Navigate back to the previous page
//     this.router.navigate(['/create-notification']);
//   }

//   confirm() {
//     // Handle confirm logic
//     // Save the data and redirect to the success page
//     this.dataService.saveNotification().subscribe(() => {
//       this.router.navigate(['/success']);
//     });
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
  inAppNotifications: any[] = [];
  smsNotifications: any[] = [];
  emailNotifications: any[] = [];
  showPopup: boolean = false; // New property to control the popup visibility

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    // Load data from the service or state management
    this.serviceType = this.dataService.selectedServiceType;
    this.eventTrigger = this.dataService.selectedEventTrigger;
    this.party = this.dataService.selectedParty;
    this.senderParent = this.dataService.senderParent;
    this.grade = this.dataService.grade;
    this.channels = this.dataService.channels;

    this.inAppNotifications = this.dataService.inAppNotifications;
    this.smsNotifications = this.dataService.smsNotifications;
    this.emailNotifications = this.dataService.emailNotifications;
  }

  cancel() {
    this.router.navigate(['/notification-management']);
  }

  back() {
    this.router.navigate(['/create-notification']);
  }

  confirm() {
    // Show the popup dialog when confirm button is clicked
    this.showPopup = true;
  }

  closePopup() {
    // Hide the popup dialog
    this.showPopup = false;
  }

  confirmAction() {
    // Handle confirm logic
    // Save the data and redirect to the success page
    this.dataService.saveNotification().subscribe(() => {
      this.router.navigate(['/success']);
    });
  }
}
