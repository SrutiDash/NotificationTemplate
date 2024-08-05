// //new

// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-pause-dialog',
//   templateUrl: './pause-dialog.component.html',
//   styleUrls: ['./pause-dialog.component.css']
// })
// export class PauseDialogComponent {
//   @Output() confirmed = new EventEmitter<boolean>();
//   isVisible = false;

//   show(): void {
//     this.isVisible = true;
//   }

//   hide(): void {
//     this.isVisible = false;
//   }

//   confirm(): void {
//     this.confirmed.emit(true);
//     this.hide();
//   }

//   cancel(): void {
//     this.confirmed.emit(false);
//     this.hide();
//   }
// }


//new

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pause-dialog',
  templateUrl: './pause-dialog.component.html',
  styleUrls: ['./pause-dialog.component.css']
})
export class PauseDialogComponent {
  @Output() confirmed = new EventEmitter<boolean>();
  isVisible = false;

  show(): void {
    this.isVisible = true;
  }

  hide(): void {
    this.isVisible = false;
  }

  confirm(): void {
    this.confirmed.emit(true);
    this.hide();
  }

  cancel(): void {
    this.confirmed.emit(false);
    this.hide();
  }
}
