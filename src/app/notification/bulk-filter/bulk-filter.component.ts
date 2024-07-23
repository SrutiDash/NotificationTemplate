// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-bulk-filter',
//   templateUrl: './bulk-filter.component.html',
//   styleUrls: ['./bulk-filter.component.css']
// })
// export class BulkFilterComponent {
//   @Input() isVisible = false;
//   @Output() closeDialog = new EventEmitter<void>(); // Renamed
//   @Output() applyFilters = new EventEmitter<any>();

//   filters = {
//     notificationName: '',
//     startDate: '',
//     endDate: '',
//     status: ''
//   };

//   close(): void {
//     this.closeDialog.emit(); // Renamed
//   }

//   apply(): void {
//     this.applyFilters.emit(this.filters);
//   }

//   clear(): void {
//     this.filters = {
//       notificationName: '',
//       startDate: '',
//       endDate: '',
//       status: ''
//     };
//   }
// }

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bulk-filter',
  templateUrl: './bulk-filter.component.html',
  styleUrls: ['./bulk-filter.component.css']
})
export class BulkFilterComponent {
  @Input() isVisible = false;
  @Output() closeDialog = new EventEmitter<void>();
  @Output() applyFilters = new EventEmitter<any>();

  filters = {
    approvalStatus: {
      approved: false,
      initiated: false,
      rejected: false
    },
    status: {
      active: false,
      scheduled: false,
      paused: false,
      resumed: false,
      deleted: false,
      completed: false
    },
    dateRange: {
      startDate: '',
      endDate: ''
    },
    creationDate: ''
  };

  close(): void {
    this.closeDialog.emit();
  }

  apply(): void {
    this.applyFilters.emit(this.filters);
  }

  clear(): void {
    this.filters = {
      approvalStatus: {
        approved: false,
        initiated: false,
        rejected: false
      },
      status: {
        active: false,
        scheduled: false,
        paused: false,
        resumed: false,
        deleted: false,
        completed: false
      },
      dateRange: {
        startDate: '',
        endDate: ''
      },
      creationDate: ''
    };
  }
}
