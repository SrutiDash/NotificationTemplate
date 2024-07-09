import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-prompt',
  templateUrl: './filter-prompt.component.html',
  styleUrls: ['./filter-prompt.component.css']
})
export class FilterPromptComponent {
  @Output() close = new EventEmitter<void>();

  applyFilters() {
    // Logic to apply filters
    this.close.emit();
  }

  clearFilters() {
    // Logic to clear filters
  }
}
