import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-filter-prompt',
  templateUrl: './filter-prompt.component.html',
  styleUrls: ['./filter-prompt.component.css']
})
export class FilterPromptComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<void>();
  @Output() applyFilters = new EventEmitter<any>();
  @Input() isVisible: boolean = false;

  serviceTypes: string[] = [];
  eventTriggers: string[] = [];
  parties: string[] = [];

  selectedServiceType: string = '';
  selectedEventTrigger: string = '';
  selectedParty: string = '';

  startDate: string = '';
  endDate: string = '';

  serviceTypeSearch: string = '';
  eventTriggerSearch: string = '';
  partySearch: string = '';

  filteredServiceTypes: string[] = [];
  filteredEventTriggers: string[] = [];
  filteredParties: string[] = [];

  showServiceTypeDropdown: boolean = false;
  showEventTriggerDropdown: boolean = false;
  showPartyDropdown: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getFilteredServiceTypes().subscribe(data => {
      this.serviceTypes = data;
      this.filteredServiceTypes = data; // Initialize filteredServiceTypes
    });
  }
  
  filterServiceTypes() {
    if (this.serviceTypeSearch.trim() === '') {
      this.filteredServiceTypes = this.serviceTypes; // Show all options if the search input is empty
    } else {
      this.filteredServiceTypes = this.serviceTypes.filter(type =>
        type.toLowerCase().includes(this.serviceTypeSearch.toLowerCase())
      );
    }
  }
  

  filterEventTriggers() {
    this.filteredEventTriggers = this.eventTriggers.filter(trigger =>
      trigger.toLowerCase().includes(this.eventTriggerSearch.toLowerCase())
    );
  }

  filterParties() {
    this.filteredParties = this.parties.filter(party =>
      party.toLowerCase().includes(this.partySearch.toLowerCase())
    );
  }

  selectServiceType(serviceType: string) {
    this.selectedServiceType = serviceType;
    this.serviceTypeSearch = serviceType;
    this.showServiceTypeDropdown = false;
    this.onServiceTypeChange();
  }

  selectEventTrigger(eventTrigger: string) {
    this.selectedEventTrigger = eventTrigger;
    this.eventTriggerSearch = eventTrigger;
    this.showEventTriggerDropdown = false;
    this.onEventTriggerChange();
  }

  selectParty(party: string) {
    this.selectedParty = party;
    this.partySearch = party;
    this.showPartyDropdown = false;
  }

  onServiceTypeChange() {
    if (this.selectedServiceType) {
      this.dataService.getFilteredEventTriggers(this.selectedServiceType).subscribe(data => {
        this.eventTriggers = data;
        this.filteredEventTriggers = data; // Initialize filteredEventTriggers
        this.selectedEventTrigger = '';
        this.parties = [];
        this.selectedParty = '';
        this.eventTriggerSearch = '';
        this.partySearch = '';
      });
    } else {
      this.eventTriggers = [];
      this.filteredEventTriggers = [];
      this.parties = [];
      this.filteredParties = [];
      this.selectedEventTrigger = '';
      this.selectedParty = '';
      this.eventTriggerSearch = '';
      this.partySearch = '';
    }
  }

  onEventTriggerChange() {
    if (this.selectedEventTrigger) {
      this.dataService.getFilteredParties(this.selectedServiceType, this.selectedEventTrigger).subscribe(data => {
        this.parties = data;
        this.filteredParties = data; // Initialize filteredParties
        this.selectedParty = '';
        this.partySearch = '';
      });
    } else {
      this.parties = [];
      this.filteredParties = [];
      this.selectedParty = '';
      this.partySearch = '';
    }
  }

  applyFilter() {
    const filters = {
      serviceType: this.selectedServiceType,
      eventTrigger: this.selectedEventTrigger,
      party: this.selectedParty,
      startDate: this.startDate,
      endDate: this.endDate
    };
    this.applyFilters.emit(filters);
    this.closeDialog.emit();
  }

  clearFilters() {
    this.selectedServiceType = '';
    this.selectedEventTrigger = '';
    this.selectedParty = '';
    this.startDate = '';
    this.endDate = '';
    this.serviceTypeSearch = '';
    this.eventTriggerSearch = '';
    this.partySearch = '';
    this.filteredServiceTypes = this.serviceTypes;
    this.filteredEventTriggers = [];
    this.filteredParties = [];
  }
}

