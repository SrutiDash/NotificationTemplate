// import { Component, EventEmitter, Output, OnInit } from '@angular/core';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-filter-prompt',
//   templateUrl: './filter-prompt.component.html',
//   styleUrls: ['./filter-prompt.component.css']
// })
// export class FilterPromptComponent implements OnInit {
//   @Output() close = new EventEmitter<void>();
//   @Output() applyFilters = new EventEmitter<void>();

//   serviceTypes: string[] = [];
//   eventTriggers: string[] = [];
//   parties: string[] = [];

//   selectedServiceType: string = '';
//   selectedEventTrigger: string = '';
//   selectedParty: string = '';

//   startDate: string = '';
//   endDate: string = '';

//   constructor(private dataService: DataService) {}

//   ngOnInit() {
//     this.dataService.getFilteredServiceTypes().subscribe(data => {
//       this.serviceTypes = data;
//     });
//   }

//   onServiceTypeChange() {
//     if (this.selectedServiceType) {
//       this.dataService.getFilteredEventTriggers(this.selectedServiceType).subscribe(data => {
//         this.eventTriggers = data;
//         this.selectedEventTrigger = '';
//         this.parties = [];
//         this.selectedParty = '';
//       });
//     } else {
//       this.eventTriggers = [];
//       this.parties = [];
//       this.selectedEventTrigger = '';
//       this.selectedParty = '';
//     }
//   }

//   onEventTriggerChange() {
//     if (this.selectedEventTrigger) {
//       this.dataService.getFilteredParties(this.selectedServiceType, this.selectedEventTrigger).subscribe(data => {
//         this.parties = data;
//         this.selectedParty = '';
//       });
//     } else {
//       this.parties = [];
//       this.selectedParty = '';
//     }
//   }

//   applyFilter() {
//     // Logic to apply filters
//     this.applyFilters.emit();
//     this.close.emit();
//   }

//   clearFilters() {
//     this.selectedServiceType = '';
//     this.selectedEventTrigger = '';
//     this.selectedParty = '';
//     this.startDate = '';
//     this.endDate = '';
//     this.eventTriggers = [];
//     this.parties = [];
//   }
// }


// import { Component, EventEmitter, Output, OnInit } from '@angular/core';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-filter-prompt',
//   templateUrl: './filter-prompt.component.html',
//   styleUrls: ['./filter-prompt.component.css']
// })
// export class FilterPromptComponent implements OnInit {
//   @Output() close = new EventEmitter<void>();
//   @Output() applyFilters = new EventEmitter<void>();

//   serviceTypes: string[] = [];
//   eventTriggers: string[] = [];
//   parties: string[] = [];

//   selectedServiceType: string = '';
//   selectedEventTrigger: string = '';
//   selectedParty: string = '';

//   startDate: string = '';
//   endDate: string = '';

//   constructor(private dataService: DataService) {}

//   ngOnInit() {
//     this.dataService.getFilteredServiceTypes().subscribe(data => {
//       this.serviceTypes = data;
//     });
//   }

//   onServiceTypeChange() {
//     if (this.selectedServiceType) {
//       this.dataService.getFilteredEventTriggers(this.selectedServiceType).subscribe(data => {
//         this.eventTriggers = data;
//         this.selectedEventTrigger = '';
//         this.parties = [];
//         this.selectedParty = '';
//       });
//     } else {
//       this.eventTriggers = [];
//       this.parties = [];
//       this.selectedEventTrigger = '';
//       this.selectedParty = '';
//     }
//   }

//   onEventTriggerChange() {
//     if (this.selectedEventTrigger) {
//       this.dataService.getFilteredParties(this.selectedServiceType, this.selectedEventTrigger).subscribe(data => {
//         this.parties = data;
//         this.selectedParty = '';
//       });
//     } else {
//       this.parties = [];
//       this.selectedParty = '';
//     }
//   }

//   applyFilter() {
//     // Logic to apply filters
//     this.applyFilters.emit();
//     this.close.emit();
//   }

//   clearFilters() {
//     this.selectedServiceType = '';
//     this.selectedEventTrigger = '';
//     this.selectedParty = '';
//     this.startDate = '';
//     this.endDate = '';
//     this.eventTriggers = [];
//     this.parties = [];
//   }
// }

// import { Component, EventEmitter, Output, OnInit } from '@angular/core';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-filter-prompt',
//   templateUrl: './filter-prompt.component.html',
//   styleUrls: ['./filter-prompt.component.css']
// })
// export class FilterPromptComponent implements OnInit {
//   @Output() close = new EventEmitter<void>();
//   @Output() applyFilters = new EventEmitter<void>();

//   serviceTypes: string[] = [];
//   eventTriggers: string[] = [];
//   parties: string[] = [];

//   selectedServiceType: string = '';
//   selectedEventTrigger: string = '';
//   selectedParty: string = '';

//   startDate: string = '';
//   endDate: string = '';

//   constructor(private dataService: DataService) {}

//   ngOnInit() {
//     this.dataService.getFilteredServiceTypes().subscribe(data => {
//       console.log('Service Types:', data);  // Debug log
//       this.serviceTypes = data;
//     });
//   }

//   onServiceTypeChange() {
//     console.log('Selected Service Type:', this.selectedServiceType);  // Debug log
//     if (this.selectedServiceType) {
//       this.dataService.getFilteredEventTriggers(this.selectedServiceType).subscribe(data => {
//         console.log('Event Triggers:', data);  // Debug log
//         this.eventTriggers = data;
//         this.selectedEventTrigger = '';
//         this.parties = [];
//         this.selectedParty = '';
//       });
//     } else {
//       this.eventTriggers = [];
//       this.parties = [];
//       this.selectedEventTrigger = '';
//       this.selectedParty = '';
//     }
//   }

//   onEventTriggerChange() {
//     console.log('Selected Event Trigger:', this.selectedEventTrigger);  // Debug log
//     if (this.selectedEventTrigger) {
//       this.dataService.getFilteredParties(this.selectedServiceType, this.selectedEventTrigger).subscribe(data => {
//         console.log('Parties:', data);  // Debug log
//         this.parties = data;
//         this.selectedParty = '';
//       });
//     } else {
//       this.parties = [];
//       this.selectedParty = '';
//     }
//   }

//   applyFilter() {
//     // Logic to apply filters
//     this.applyFilters.emit();
//     this.close.emit();
//   }

//   clearFilters() {
//     this.selectedServiceType = '';
//     this.selectedEventTrigger = '';
//     this.selectedParty = '';
//     this.startDate = '';
//     this.endDate = '';
//     this.eventTriggers = [];
//     this.parties = [];
//   }
// }

import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-filter-prompt',
  templateUrl: './filter-prompt.component.html',
  styleUrls: ['./filter-prompt.component.css']
})
export class FilterPromptComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() applyFilters = new EventEmitter<void>();

  serviceTypes: string[] = [];
  eventTriggers: string[] = [];
  parties: string[] = [];

  selectedServiceType: string = '';
  selectedEventTrigger: string = '';
  selectedParty: string = '';

  startDate: string = '';
  endDate: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getFilteredServiceTypes().subscribe(data => {
      console.log('Service Types:', data);  // Debug log
      this.serviceTypes = data;
    });
  }

  onServiceTypeChange() {
    console.log('Selected Service Type:', this.selectedServiceType);  // Debug log
    if (this.selectedServiceType) {
      this.dataService.getFilteredEventTriggers(this.selectedServiceType).subscribe(data => {
        console.log('Event Triggers:', data);  // Debug log
        this.eventTriggers = data;
        this.selectedEventTrigger = '';
        this.parties = [];
        this.selectedParty = '';
      });
    } else {
      this.eventTriggers = [];
      this.parties = [];
      this.selectedEventTrigger = '';
      this.selectedParty = '';
    }
  }

  onEventTriggerChange() {
    console.log('Selected Event Trigger:', this.selectedEventTrigger);  // Debug log
    if (this.selectedEventTrigger) {
      this.dataService.getFilteredParties(this.selectedServiceType, this.selectedEventTrigger).subscribe(data => {
        console.log('Parties:', data);  // Debug log
        this.parties = data;
        this.selectedParty = '';
      });
    } else {
      this.parties = [];
      this.selectedParty = '';
    }
  }

  applyFilter() {
    // Logic to apply filters
    this.applyFilters.emit();
    this.close.emit();
  }

  clearFilters() {
    this.selectedServiceType = '';
    this.selectedEventTrigger = '';
    this.selectedParty = '';
    this.startDate = '';
    this.endDate = '';
    this.eventTriggers = [];
    this.parties = [];
  }
}
