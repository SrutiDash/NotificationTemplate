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
  showModal: boolean = false; // Property to control modal visibility

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    // Load data from the service or state management
    this.serviceType = this.dataService.selectedServiceType;
    this.eventTrigger = this.dataService.selectedEventTrigger;
    this.party = this.dataService.selectedParty;
    this.senderParent = this.dataService.senderParent;
    this.grade = this.dataService.grade;
    this.channels = this.dataService.channels;

    this.inAppNotifications = this.dataService.inAppNotifications; // Corrected
    this.smsNotifications = this.dataService.smsNotifications; // Corrected
    this.emailNotifications = this.dataService.emailNotifications;
  }

  cancel() {
    // Handle cancel logic
    this.router.navigate(['/notification-management']);
  }

  back() {
    // Navigate back to the previous page
    this.router.navigate(['/notification-edit']);
  }

  confirm() {
    // Handle confirm logic
    // Save the data and show modal on success
    this.dataService.saveNotification().subscribe({
      next: () => {
        this.showModal = true; // Show modal on successful save
      },
      error: (err) => {
        console.error('Error saving notification:', err);
      }
    });
  }

  closeModal() {
    this.showModal = false;
    this.router.navigate(['/notification-management']); // Optional: redirect or perform other actions
  }
}
