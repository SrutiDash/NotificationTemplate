// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-some-component',
//   templateUrl: './some-component.component.html',
//   styleUrl: './some-component.component.css'
// })
// export class SomeComponentComponent {

// }


import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';  // Ensure the path is correct based on your project structure.

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.css']  // If you have styling specific to this component.
})
export class SomeComponent implements OnInit {
  notification: any = {
    serviceType: '',
    eventTrigger: '',
    party: '',
    parameters: [],
    senderParent: '',
    grade: '',
    channels: [],
    inAppNotifications: [],
    smsNotifications: [],
    emailNotifications: []
  };

  selectedServiceType: string = '';
  selectedEventTrigger: string = '';
  selectedParty: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadInitialData();
  }

  loadInitialData() {
    this.dataService.getNotificationTemplate(1).subscribe({
      next: (data) => {
        this.notification = data;
        this.selectedServiceType = data.serviceType;
        this.selectedEventTrigger = data.eventTrigger;
        this.selectedParty = data.party;
        // Assuming that the data model includes these fields; adjust as necessary.
      },
      error: (err) => console.error('Failed to load notification template', err)
    });
  }

  onServiceTypeChange(newType: string) {
    this.selectedServiceType = newType;
    this.notification.serviceType = newType;
    // Fetch dependent data if necessary
  }

  saveNotification() {
    this.dataService.saveNotification(this.notification).subscribe({
      next: (response) => console.log('Notification saved', response),
      error: (err) => console.error('Failed to save notification', err)
    });
  }

  // Additional methods can be added here for further interaction, such as updating other parts of the notification
}
