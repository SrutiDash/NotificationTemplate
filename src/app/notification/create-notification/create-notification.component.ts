import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.css']
})
export class CreateNotificationComponent implements OnInit {
  selectedServiceType: string = '';
  selectedEventTrigger: string = '';
  selectedParty: string = '';
  selectedCondition: string = '';
  isServiceTypeSelected: boolean = false;
  isConditionSelected: boolean = false;
  documents: string[] = ['Document 1', 'Document 2', 'Document 3'];
  searchParameters = [
    { channel: '', language: '', header: '', body: '', attachable: '', documents: '', filteredChannels: [] },
    { channel: '', language: '', header: '', body: '', attachable: '', documents: '', filteredChannels: [] },
    { channel: '', language: '', header: '', body: '', attachable: '', documents: '', filteredChannels: [] },
    { channel: '', language: '', header: '', body: '', attachable: '', documents: '', filteredChannels: [] }
  ];

  serviceTypes: string[] = [];
  filteredServiceTypes: string[] = [];
  eventTriggers: string[] = [];
  filteredEventTriggers: string[] = [];
  parties: string[] = [];
  filteredParties: string[] = [];
  conditions: string[] = ['Condition 1', 'Condition 2', 'Condition 3'];
  conditionFields1: string[] = ['Field1 Option 1', 'Field1 Option 2', 'Field1 Option 3'];
  conditionFields2: string[] = ['Field2 Option 1', 'Field2 Option 2', 'Field2 Option 3'];
  conditionFields3: string[] = ['Field3 Option 1', 'Field3 Option 2', 'Field3 Option 3'];
  conditionFields4: string[] = ['Field4 Option 1', 'Field4 Option 2', 'Field4 Option 3'];
  channels: string[] = ['In-App Notification', 'SMS', 'Email', 'URL'];

  filteredConditions: string[] = [];
  filteredConditionFields1: string[][] = [];
  filteredConditionFields2: string[][] = [];
  filteredConditionFields3: string[][] = [];
  filteredConditionFields4: string[][] = [];

  addedConditions: string[] = [];

  showServiceTypeOptions: boolean = false;
  showEventTriggerOptions: boolean = false;
  showPartyOptions: boolean = false;

  constructor(private dataService: DataService) { }

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
  }

  filterOptions(type: string, event: any, param?: any, index?: number) {
    const query = event.target.value.toLowerCase();
    if (type === 'serviceType') {
      this.filteredServiceTypes = this.serviceTypes.filter(option => option.toLowerCase().includes(query));
    } else if (type === 'eventTrigger') {
      this.filteredEventTriggers = this.eventTriggers.filter(option => option.toLowerCase().includes(query));
    } else if (type === 'party') {
      this.filteredParties = this.parties.filter(option => option.toLowerCase().includes(query));
    } else if (type === 'condition') {
      this.filteredConditions = this.conditions.filter(option => option.toLowerCase().includes(query));
    } else if (type === 'conditionField1' && index !== undefined) {
      this.filteredConditionFields1[index] = this.conditionFields1.filter(option => option.toLowerCase().includes(query));
    } else if (type === 'conditionField2' && index !== undefined) {
      this.filteredConditionFields2[index] = this.conditionFields2.filter(option => option.toLowerCase().includes(query));
    } else if (type === 'conditionField3' && index !== undefined) {
      this.filteredConditionFields3[index] = this.conditionFields3.filter(option => option.toLowerCase().includes(query));
    } else if (type === 'conditionField4' && index !== undefined) {
      this.filteredConditionFields4[index] = this.conditionFields4.filter(option => option.toLowerCase().includes(query));
    } else if (type === 'channel' && param) {
      param.filteredChannels = this.channels.filter(option => option.toLowerCase().includes(query));
    }
  }

  selectOption(type: string, option: string, param?: any, index?: number) {
    if (type === 'serviceType') {
      this.selectedServiceType = option;
      this.isServiceTypeSelected = true;
      this.showServiceTypeOptions = false;
      this.filteredServiceTypes = [];
      (document.getElementById('serviceTypeSearch') as HTMLInputElement).value = option;
    } else if (type === 'eventTrigger') {
      this.selectedEventTrigger = option;
      this.showEventTriggerOptions = false;
      this.filteredEventTriggers = [];
      (document.getElementById('eventTriggerSearch') as HTMLInputElement).value = option;
    } else if (type === 'party') {
      this.selectedParty = option;
      this.showPartyOptions = false;
      this.filteredParties = [];
      (document.getElementById('partySearch') as HTMLInputElement).value = option;
    } else if (type === 'condition') {
      this.selectedCondition = option;
      this.isConditionSelected = true;
      this.filteredConditions = [];
      this.addedConditions.push(option);
      this.filteredConditionFields1.push([]);
      this.filteredConditionFields2.push([]);
      this.filteredConditionFields3.push([]);
      this.filteredConditionFields4.push([]);
      (document.getElementById('conditionSearch') as HTMLInputElement).value = option;
    } else if (type === 'conditionField1' && index !== undefined) {
      this.filteredConditionFields1[index] = [];
      (document.getElementById('conditionField1_' + index) as HTMLInputElement).value = option;
    } else if (type === 'conditionField2' && index !== undefined) {
      this.filteredConditionFields2[index] = [];
      (document.getElementById('conditionField2_' + index) as HTMLInputElement).value = option;
    } else if (type === 'conditionField3' && index !== undefined) {
      this.filteredConditionFields3[index] = [];
      (document.getElementById('conditionField3_' + index) as HTMLInputElement).value = option;
    } else if (type === 'conditionField4' && index !== undefined) {
      this.filteredConditionFields4[index] = [];
      (document.getElementById('conditionField4_' + index) as HTMLInputElement).value = option;
      this.addCondition(index);
    } else if (type === 'channel' && param) {
      param.channel = option;
      param.filteredChannels = [];
    }
  }

  showOptions(type: string, param?: any, index?: number) {
    if (type === 'serviceType') {
      this.showServiceTypeOptions = true;
      this.filteredServiceTypes = [...this.serviceTypes];
    } else if (type === 'eventTrigger') {
      this.showEventTriggerOptions = true;
      this.filteredEventTriggers = [...this.eventTriggers];
    } else if (type === 'party') {
      this.showPartyOptions = true;
      this.filteredParties = [...this.parties];
    } else if (type === 'condition') {
      this.filteredConditions = [...this.conditions];
    } else if (type === 'conditionField1' && index !== undefined) {
      this.filteredConditionFields1[index] = [...this.conditionFields1];
    } else if (type === 'conditionField2' && index !== undefined) {
      this.filteredConditionFields2[index] = [...this.conditionFields2];
    } else if (type === 'conditionField3' && index !== undefined) {
      this.filteredConditionFields3[index] = [...this.conditionFields3];
    } else if (type === 'conditionField4' && index !== undefined) {
      this.filteredConditionFields4[index] = [...this.conditionFields4];
    } else if (type === 'channel' && param) {
      param.filteredChannels = [...this.channels];
    }
  }

  addCondition(index: number) {
    this.addedConditions.push('');
    this.filteredConditionFields1.push([]);
    this.filteredConditionFields2.push([]);
    this.filteredConditionFields3.push([]);
    this.filteredConditionFields4.push([]);
  }

  removeCondition(index: number) {
    this.addedConditions.splice(index, 1);
    this.filteredConditionFields1.splice(index, 1);
    this.filteredConditionFields2.splice(index, 1);
    this.filteredConditionFields3.splice(index, 1);
    this.filteredConditionFields4.splice(index, 1);
  }

  showOr(index: number) {
    const orButton = document.querySelector('.or-condition-' + index);
    if (orButton) {
      orButton.classList.add('visible');
    }
  }

  hideOr(index: number) {
    const orButton = document.querySelector('.or-condition-' + index);
    if (orButton) {
      orButton.classList.remove('visible');
    }
  }
}
