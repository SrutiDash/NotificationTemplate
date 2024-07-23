import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-dialog',
  templateUrl: './file-dialog.component.html',
  styleUrls: ['./file-dialog.component.css']
})
export class FileDialogComponent {
  @Output() fileSelected = new EventEmitter<File | null>();
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  confirmSelection(): void {
    this.fileSelected.emit(this.selectedFile);
  }

  closeModal(): void {
    this.fileSelected.emit(null);
  }
}
