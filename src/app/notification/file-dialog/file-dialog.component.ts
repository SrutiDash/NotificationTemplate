// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-file-dialog',
// //   templateUrl: './file-dialog.component.html',
// //   styleUrl: './file-dialog.component.css'
// // })
// // export class FileDialogComponent {

// // }

// import { Component } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';

// @Component({
//   selector: 'app-file-dialog',
//   templateUrl: './file-dialog.component.html',
// })
// export class FileDialogComponent {
//   constructor(public dialogRef: MatDialogRef<FileDialogComponent>) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   chooseFile(): void {
//     // Trigger the file input click
//     const fileInput = document.createElement('input');
//     fileInput.type = 'file';
//     fileInput.accept = 'image/*';
//     fileInput.onchange = (event: any) => {
//       this.dialogRef.close(event.target.files[0]);
//     };
//     fileInput.click();
//   }
// }

// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-file-dialog',
//   templateUrl: './file-dialog.component.html',
//   styleUrls: ['./file-dialog.component.css']
// })
// export class FileDialogComponent {
//   @Output() fileSelected = new EventEmitter<File>();
//   showModal: boolean = true;

//   closeModal(): void {
//     this.showModal = false;
//   }

//   onFileSelected(event: any): void {
//     const file = event.target.files[0];
//     if (file) {
//       this.fileSelected.emit(file);
//       this.closeModal();
//     }
//   }
// }

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-dialog',
  templateUrl: './file-dialog.component.html',
  styleUrls: ['./file-dialog.component.css']
})
export class FileDialogComponent {
  @Output() fileSelected = new EventEmitter<File | null>();

  onFileChange(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileSelected.emit(input.files[0]);
    }
  }

  closeDialog(): void {
    this.fileSelected.emit(null);
  }
}
