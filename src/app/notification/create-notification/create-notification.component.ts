
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-create-notification',
//   templateUrl: './create-notification.component.html',
//   styleUrls: ['./create-notification.component.css']
// })
// export class CreateNotificationComponent {
//   selectedServiceType: string = '';
//   isServiceTypeSelected: boolean = false;
//   searchParameters = [
//     { channel: 'Email', language: 'English', header: 'Header 1', body: 'Body 1', attachable: 'Yes', documents: 'Doc 1' },
//     { channel: 'SMS', language: 'French', header: 'Header 2', body: 'Body 2', attachable: 'No', documents: 'Doc 2' },
//     // Add more rows as needed
//   ];

//   onServiceTypeChange(event: any) {
//     this.isServiceTypeSelected = !!event.target.value;
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
  isServiceTypeSelected: boolean = false;
  documents = ['Document 1', 'Document 2', 'Document 3'];
  searchParameters = [
    { channel: 'In-App Notification', language: '', header: '', body: '', attachable: '', documents: '' },
    { channel: 'SMS', language: '', header: '', body: '', attachable: '', documents: '' },
    { channel: 'Email', language: '', header: '', body: '', attachable: '', documents: '' },
    { channel: 'URL', language: '', header: '', body: '', attachable: '', documents: '' }
  ];

  onServiceTypeChange(event: any) {
    this.isServiceTypeSelected = !!event.target.value;
  }
}
