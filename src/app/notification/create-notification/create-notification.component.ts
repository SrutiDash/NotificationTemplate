import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.css']
})
export class CreateNotificationComponent implements OnInit {
  notification = {
    serviceType: '',
    eventTrigger: '',
    party: '',
    parameters: [
      { channel: '', language: 'English', header: '', body: '', documents: '', filteredChannels: [] }
    ]
  };

  serviceTypes: string[] = [];
  filteredServiceTypes: string[] = [];
  eventTriggers: string[] = [];
  filteredEventTriggers: string[] = [];
  parties: string[] = [];
  filteredParties: string[] = [];
  parameters: string[] = [];
  filteredParameters: string[] = [];
  channels: string[] = ['In-App Notification', 'SMS', 'Email', 'URL'];
  documents: string[] = ['Document 1', 'Document 2', 'Document 3'];

  showServiceTypeOptions: boolean = false;
  showEventTriggerOptions: boolean = false;
  showPartyOptions: boolean = false;
  showParameterOptions: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getServiceTypes().subscribe((data: any) => {
      this.serviceTypes = data;
      this.filteredServiceTypes = this.serviceTypes;
    });

    this.dataService.getEventTriggers().subscribe((data: any) => {
      this.eventTriggers = data;
      this.filteredEventTriggers = this.eventTriggers;
    });

    this.dataService.getParties().subscribe((data: any) => {
      this.parties = data;
      this.filteredParties = this.parties;
    });

    this.dataService.getCreateParameters().subscribe((data: any) => {
      this.parameters = data;
      this.filteredParameters = data;
    });
  }

  filterOptions(type: string, event: any, param?: any) {
    const query = event.target.value.toLowerCase();
    if (type === 'serviceType') {
      this.filteredServiceTypes = this.serviceTypes.filter(option =>
        option.toLowerCase().includes(query)
      );
    } else if (type === 'eventTrigger') {
      this.filteredEventTriggers = this.eventTriggers.filter(option =>
        option.toLowerCase().includes(query)
      );
    } else if (type === 'party') {
      this.filteredParties = this.parties.filter(option =>
        option.toLowerCase().includes(query)
      );
    } else if (type === 'parameter') {
      this.filteredParameters = this.parameters.filter(option =>
        option.toLowerCase().includes(query)
      );
    } else if (type === 'channel' && param) {
      param.filteredChannels = this.channels.filter(option =>
        option.toLowerCase().includes(query)
      );
    }
  }

  selectOption(type: string, option: string, param?: any) {
    if (type === 'serviceType') {
      this.notification.serviceType = option;
      this.showServiceTypeOptions = false;
      this.filteredServiceTypes = [];
      (document.getElementById('serviceTypeSearch') as HTMLInputElement).value = option;
    } else if (type === 'eventTrigger') {
      this.notification.eventTrigger = option;
      this.showEventTriggerOptions = false;
      this.filteredEventTriggers = [];
      (document.getElementById('eventTriggerSearch') as HTMLInputElement).value = option;
    } else if (type === 'party') {
      this.notification.party = option;
      this.showPartyOptions = false;
      this.filteredParties = [];
      (document.getElementById('partySearch') as HTMLInputElement).value = option;
    } else if (type === 'parameter') {
      this.notification.parameters[0].body = option;
      this.notification.parameters[0].header = this.notification.eventTrigger;
      this.showParameterOptions = false;
      this.filteredParameters = [];
      (document.getElementById('parameterSearch') as HTMLInputElement).value = option;
      this.checkFormValidity();
    } else if (type === 'channel' && param) {
      param.channel = option;
      param.filteredChannels = [];
      this.checkFormValidity();
    }
  }

  showOptions(type: string, param?: any) {
    if (type === 'serviceType') {
      this.showServiceTypeOptions = true;
      this.filteredServiceTypes = [...this.serviceTypes];
    } else if (type === 'eventTrigger') {
      this.showEventTriggerOptions = true;
      this.filteredEventTriggers = [...this.eventTriggers];
    } else if (type === 'party') {
      this.showPartyOptions = true;
      this.filteredParties = [...this.parties];
    } else if (type === 'parameter') {
      this.showParameterOptions = true;
      this.filteredParameters = [...this.parameters];
    } else if (type === 'channel' && param) {
      param.filteredChannels = [...this.channels];
    }
  }

  checkFormValidity() {
    return (
      this.notification.serviceType !== '' &&
      this.notification.eventTrigger !== '' &&
      this.notification.party !== '' &&
      this.notification.parameters[0].body !== '' &&
      this.notification.parameters[0].channel !== ''
    );
  }

  isFormValid(): boolean {
    return this.checkFormValidity();
  }

  cancel() {
    this.router.navigate(['/notification-management']);
  }

  next() {
    if (this.isFormValid()) {
      // Set the notification data in the data service
      this.dataService.setNotification(this.notification);

      // Navigate to the Notification Review page with the notification data
      this.router.navigate(['/notification-review'], {
        state: { notification: this.notification },
      });
    } else {
      console.error('Form is not valid.');
    }
  }
}
