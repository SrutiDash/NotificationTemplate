// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-create-notification',
//   templateUrl: './create-notification.component.html',
//   styleUrls: ['./create-notification.component.css']
// })
// export class CreateNotificationComponent {
//   selectedServiceType: string = '';
//   isServiceTypeSelected: boolean = false;
//   documents: string[] = ['Document 1', 'Document 2', 'Document 3'];
//   searchParameters = [
//     { channel: 'In-App Notification', language: '', header: '', body: '', attachable: '', documents: '' },
//     { channel: 'SMS', language: '', header: '', body: '', attachable: '', documents: '' },
//     { channel: 'Email', language: '', header: '', body: '', attachable: '', documents: '' },
//     { channel: 'URL', language: '', header: '', body: '', attachable: '', documents: '' }
//   ];

//   serviceTypes: string[] = [
//     'Send Money', 'Cash - In', 'Add Money', 'Transfer To Bank', 'Recharge', 'Bill Pay', 'Request Money'
//   ];

//   eventTriggers: string[] = ['Success', 'Failed'];
//   parties: string[] = ['Sender', 'Receiver'];

//   filteredServiceTypes: string[] = [];
//   filteredEventTriggers: string[] = [];
//   filteredParties: string[] = [];

//   onServiceTypeChange(event: any) {
//     this.isServiceTypeSelected = !!event.target.value;
//   }

//   filterOptions(type: string, event: any) {
//     const query = event.target.value.toLowerCase();
//     if (type === 'serviceType') {
//       this.filteredServiceTypes = this.serviceTypes.filter(option => option.toLowerCase().includes(query));
//     } else if (type === 'eventTrigger') {
//       this.filteredEventTriggers = this.eventTriggers.filter(option => option.toLowerCase().includes(query));
//     } else if (type === 'party') {
//       this.filteredParties = this.parties.filter(option => option.toLowerCase().includes(query));
//     }
//   }

//   selectOption(type: string, option: string) {
//     if (type === 'serviceType') {
//       this.selectedServiceType = option;
//       this.isServiceTypeSelected = true;
//       this.filteredServiceTypes = [];
//     } else if (type === 'eventTrigger') {
//       // Handle event trigger selection
//     } else if (type === 'party') {
//       // Handle party selection
//     }
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.css']
})
export class CreateNotificationComponent {
  selectedServiceType: string = '';
  selectedEventTrigger: string = '';
  selectedParty: string = '';
  isServiceTypeSelected: boolean = false;
  documents: string[] = ['Document 1', 'Document 2', 'Document 3'];
  searchParameters = [
    { channel: 'In-App Notification', language: '', header: '', body: '', attachable: '', documents: '' },
    { channel: 'SMS', language: '', header: '', body: '', attachable: '', documents: '' },
    { channel: 'Email', language: '', header: '', body: '', attachable: '', documents: '' },
    { channel: 'URL', language: '', header: '', body: '', attachable: '', documents: '' }
  ];

  serviceTypes: string[] = [
    'Send Money', 'Cash - In', 'Add Money', 'Transfer To Bank', 'Recharge', 'Bill Pay', 'Request Money'
  ];

  eventTriggers: string[] = ['Success', 'Failed'];
  parties: string[] = ['Sender', 'Receiver'];

  filteredServiceTypes: string[] = [];
  filteredEventTriggers: string[] = [];
  filteredParties: string[] = [];

  onServiceTypeChange(event: any) {
    this.isServiceTypeSelected = !!event.target.value;
  }

  filterOptions(type: string, event: any) {
    const query = event.target.value.toLowerCase();
    if (type === 'serviceType') {
      this.filteredServiceTypes = this.serviceTypes.filter(option => option.toLowerCase().includes(query));
    } else if (type === 'eventTrigger') {
      this.filteredEventTriggers = this.eventTriggers.filter(option => option.toLowerCase().includes(query));
    } else if (type === 'party') {
      this.filteredParties = this.parties.filter(option => option.toLowerCase().includes(query));
    }
  }

  selectOption(type: string, option: string) {
    if (type === 'serviceType') {
      this.selectedServiceType = option;
      this.isServiceTypeSelected = true;
      this.filteredServiceTypes = [];
      (document.getElementById('serviceTypeSearch') as HTMLInputElement).value = option;
    } else if (type === 'eventTrigger') {
      this.selectedEventTrigger = option;
      this.filteredEventTriggers = [];
      (document.getElementById('eventTriggerSearch') as HTMLInputElement).value = option;
    } else if (type === 'party') {
      this.selectedParty = option;
      this.filteredParties = [];
      (document.getElementById('partySearch') as HTMLInputElement).value = option;
    }
  }

  showOptions(type: string) {
    if (type === 'serviceType') {
      this.filteredServiceTypes = [...this.serviceTypes];
    } else if (type === 'eventTrigger') {
      this.filteredEventTriggers = [...this.eventTriggers];
    } else if (type === 'party') {
      this.filteredParties = [...this.parties];
    }
  }
}
