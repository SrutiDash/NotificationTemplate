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
//     if (changes['totalItems'] || changes['itemsPerPage']) {
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


//new2-----------


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
//     if (changes['totalItems'] || changes['itemsPerPage']) {
//       this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
//       this.pages = Array.from({ length: this.totalPages }, (v, k) => k + 1);
//     }
//   }

//   shouldShowPage(page: number): boolean {
//     return (
//       page === 1 ||
//       page === this.totalPages ||
//       (page >= this.currentPage - 2 && page <= this.currentPage + 2)
//     );
//   }

//   showEllipsis(): boolean {
//     return this.totalPages > 5 && this.currentPage < this.totalPages - 2;
//   }

//   setPage(page: number) {
//     page = Number(page);
//     if (page >= 1 && page <= this.totalPages) {
//       this.currentPage = page;
//       this.pageChange.emit(this.currentPage);
//     }
//   }
// }


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
      this.pages = Array.from({ length: this.totalPages }, (v, k) => k + 1);
    }
  }

  shouldShowPage(page: number): boolean {
    return (
      page === 1 ||
      page === this.totalPages ||
      (page >= this.currentPage - 2 && page <= this.currentPage + 2)
    );
  }

  showEllipsis(): boolean {
    return this.totalPages > 5 && this.currentPage < this.totalPages - 2;
  }

  setPage(page: number) {
    page = Number(page);
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }

  onPageSelect(event: Event) {
    const selectedPage = (event.target as HTMLSelectElement).value;
    this.setPage(Number(selectedPage));
  }
}


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
//   middlePages: number[] = [];

//   ngOnChanges(changes: SimpleChanges) {
//     if (changes['totalItems'] || changes['itemsPerPage']) {
//       this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
//       this.pages = Array.from({ length: this.totalPages }, (v, k) => k + 1);
//       this.updateMiddlePages();
//     }
//   }

//   updateMiddlePages() {
//     const start = Math.max(2, this.currentPage - 2);
//     const end = Math.min(this.totalPages - 1, this.currentPage + 2);
//     this.middlePages = this.pages.slice(start - 1, end);
//   }

//   shouldShowPage(page: number): boolean {
//     return (
//       page === 1 ||
//       page === this.totalPages ||
//       (page >= this.currentPage - 2 && page <= this.currentPage + 2)
//     );
//   }

//   showLeftEllipsis(): boolean {
//     return this.currentPage > 4;
//   }

//   showRightEllipsis(): boolean {
//     return this.currentPage < this.totalPages - 3;
//   }

//   setPage(page: number) {
//     page = Number(page);
//     if (page >= 1 && page <= this.totalPages) {
//       this.currentPage = page;
//       this.updateMiddlePages();
//       this.pageChange.emit(this.currentPage);
//     }
//   }

//   onPageSelect(event: Event) {
//     const selectedPage = (event.target as HTMLSelectElement).value;
//     this.setPage(Number(selectedPage));
//   }
// }
