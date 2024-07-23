// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-next-dialog',
//   templateUrl: './next-dialog.component.html',
//   styleUrl: './next-dialog.component.css'
// })
// export class NextDialogComponent {

// }

// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-next-dialog',
//   templateUrl: './next-dialog.component.html',
//   styleUrls: ['./next-dialog.component.css']
// })
// export class NextDialogComponent {
//   @Output() close = new EventEmitter<void>();

//   closeDialog(): void {
//     this.close.emit();
//   }
// }

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-next-dialog',
  templateUrl: './next-dialog.component.html',
  styleUrls: ['./next-dialog.component.css']
})
export class NextDialogComponent {
  @Output() fileSelected = new EventEmitter<File>();
  @Output() confirmed = new EventEmitter<void>();
  showModal = false;
  file: File | null = null;

  openDialog() {
    this.showModal = true;
  }

  closeDialog() {
    this.showModal = false;
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      this.fileSelected.emit(this.file);
    }
  }

  confirm() {
    if (this.file) {
      this.confirmed.emit();
      this.closeDialog();
    }
  }
}

