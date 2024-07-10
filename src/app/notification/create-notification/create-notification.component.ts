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
