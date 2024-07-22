import { Component, OnInit } from '@angular/core';

interface Channel {
  name: string;
  language: string;
  header: string;
  body: string;
  image: File | null;
  showOptions: boolean;
  filteredOptions: string[];
}

@Component({
  selector: 'app-create-bulk-notification',
  templateUrl: './create-bulk-notification.component.html',
  styleUrls: ['./create-bulk-notification.component.css']
})
export class CreateBulkNotificationComponent implements OnInit {
  activeTab = 'create';
  channels: Channel[] = [
    { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [] },
    { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [] },
    { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [] }
  ];
  options: string[] = ['In-App Notification', 'SMS', 'Email'];

  constructor() { }

  ngOnInit(): void {
    this.channels.forEach(channel => {
      channel.filteredOptions = [...this.options];
    });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  showOptions(channel: Channel): void {
    channel.showOptions = true;
  }

  hideOptions(channel: Channel): void {
    setTimeout(() => channel.showOptions = false, 200); // Delay to allow click event to register
  }

  filterOptions(channel: Channel): void {
    const query = channel.name.toLowerCase();
    channel.filteredOptions = this.options.filter(option => option.toLowerCase().includes(query));
  }

  selectOption(channel: Channel, option: string): void {
    channel.name = option;
    channel.showOptions = false;
  }

  cancel(): void {
    // Implement cancel logic
  }

  next(): void {
    // Implement next logic
  }

  onFileChange(event: any, channel: Channel): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      channel.image = input.files[0];
    }
  }
}
