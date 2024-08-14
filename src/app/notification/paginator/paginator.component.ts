// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-paginator',
//   templateUrl: './paginator.component.html',
//   styleUrl: './paginator.component.css'
// })
// export class PaginatorComponent {

// }

// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-paginator',
//   templateUrl: './paginator.component.html',
//   styleUrls: ['./paginator.component.css']
// })
// export class PaginatorComponent {
//   @Input() totalItems: number;
//   @Input() itemsPerPage: number;
//   @Input() currentPage: number;

//   @Output() pageChange = new EventEmitter<number>();

//   get totalPages(): number {
//     return Math.ceil(this.totalItems / this.itemsPerPage);
//   }

//   onPageChange(page: number) {
//     if (page >= 1 && page <= this.totalPages) {
//       this.pageChange.emit(page);
//     }
//   }
// }

//new

// import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

// @Component({
//   selector: 'app-paginator',
//   templateUrl: './paginator.component.html',
//   styleUrls: ['./paginator.component.css']
// })
// export class PaginatorComponent implements OnChanges {
//   @Input() totalItems: number = 0;
//   @Input() itemsPerPage: number = 10;
//   @Input() currentPage: number = 1;
//   @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

//   totalPages: number = 0;
//   pages: number[] = [];

//   ngOnChanges(changes: SimpleChanges) {
//     if (changes.totalItems || changes.itemsPerPage) {
//       this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
//       this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
//     }
//   }

//   setPage(page: number) {
//     if (page >= 1 && page <= this.totalPages) {
//       this.currentPage = page;
//       this.pageChange.emit(this.currentPage);
//     }
//   }
// }

//new

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnChanges {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  totalPages: number = 0;
  pages: number[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalItems'] || changes['itemsPerPage']) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.pages = Array(this.totalPages).fill(0).map((x, i) => i + 1);
    }
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }
}
