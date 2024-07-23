// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// interface Channel {
//   name: string;
//   language: string;
//   header: string;
//   body: string;
//   image: File | null;
//   showOptions: boolean;
//   filteredOptions: string[];
//   showLanguageOptions: boolean;
//   filteredLanguageOptions: string[];
// }

// @Component({
//   selector: 'app-create-bulk-notification',
//   templateUrl: './create-bulk-notification.component.html',
//   styleUrls: ['./create-bulk-notification.component.css']
// })
// export class CreateBulkNotificationComponent implements OnInit {
//   activeTab = 'create';
//   channels: Channel[] = [
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [], showLanguageOptions: false, filteredLanguageOptions: [] },
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [], showLanguageOptions: false, filteredLanguageOptions: [] },
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [], showLanguageOptions: false, filteredLanguageOptions: [] }
//   ];
//   options: string[] = ['In-App Notification', 'SMS', 'Email'];
//   languageOptions: string[] = ['English'];
//   showFileDialog = false;
//   selectedChannel: Channel | null = null;
//   isNextEnabled = false;

//   constructor(private router: Router) { }

//   ngOnInit(): void {
//     this.channels.forEach(channel => {
//       channel.filteredOptions = [...this.options];
//       channel.filteredLanguageOptions = [...this.languageOptions];
//     });
//   }

//   setActiveTab(tab: string): void {
//     this.activeTab = tab;
//   }

//   showOptions(channel: Channel): void {
//     channel.showOptions = true;
//   }

//   hideOptions(channel: Channel): void {
//     setTimeout(() => channel.showOptions = false, 200); // Delay to allow click event to register
//   }

//   filterOptions(channel: Channel): void {
//     const query = channel.name.toLowerCase();
//     channel.filteredOptions = this.options.filter(option => option.toLowerCase().includes(query));
//   }

//   selectOption(channel: Channel, option: string): void {
//     channel.name = option;
//     channel.showOptions = false;
//   }

//   showLanguageOptions(channel: Channel): void {
//     channel.showLanguageOptions = true;
//   }

//   hideLanguageOptions(channel: Channel): void {
//     setTimeout(() => channel.showLanguageOptions = false, 200); // Delay to allow click event to register
//   }

//   filterLanguageOptions(channel: Channel): void {
//     const query = channel.language.toLowerCase();
//     channel.filteredLanguageOptions = this.languageOptions.filter(option => option.toLowerCase().includes(query));
//   }

//   selectLanguageOption(channel: Channel, option: string): void {
//     channel.language = option;
//     channel.showLanguageOptions = false;
//   }

//   openFileDialog(channel: Channel): void {
//     this.selectedChannel = channel;
//     this.showFileDialog = true;
//   }

//   onFileSelected(file: File | null, channel: Channel): void {
//     if (file) {
//       channel.image = file;
//       this.isNextEnabled = true;
//     }
//     this.showFileDialog = false;
//   }

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     if (this.isNextEnabled) {
//       this.router.navigate(['/schedule']);
//     }
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// interface Channel {
//   name: string;
//   language: string;
//   header: string;
//   body: string;
//   image: File | null;
//   showOptions: boolean;
//   filteredOptions: string[];
//   showLanguageOptions: boolean;
//   filteredLanguageOptions: string[];
// }

// @Component({
//   selector: 'app-create-bulk-notification',
//   templateUrl: './create-bulk-notification.component.html',
//   styleUrls: ['./create-bulk-notification.component.css']
// })
// export class CreateBulkNotificationComponent implements OnInit {
//   activeTab = 'create';
//   channels: Channel[] = [
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [], showLanguageOptions: false, filteredLanguageOptions: [] },
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [], showLanguageOptions: false, filteredLanguageOptions: [] },
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [], showLanguageOptions: false, filteredLanguageOptions: [] }
//   ];
//   options: string[] = ['In-App Notification', 'SMS', 'Email'];
//   languageOptions: string[] = ['English'];
//   showFileDialog = false;
//   selectedChannel: Channel | null = null;
//   isNextEnabled = false;

//   constructor(private router: Router) { }

//   ngOnInit(): void {
//     this.channels.forEach(channel => {
//       channel.filteredOptions = [...this.options];
//       channel.filteredLanguageOptions = [...this.languageOptions];
//     });
//   }

//   setActiveTab(tab: string): void {
//     this.activeTab = tab;
//   }

//   showOptions(channel: Channel): void {
//     channel.showOptions = true;
//   }

//   hideOptions(channel: Channel): void {
//     setTimeout(() => channel.showOptions = false, 200); // Delay to allow click event to register
//   }

//   filterOptions(channel: Channel): void {
//     const query = channel.name.toLowerCase();
//     channel.filteredOptions = this.options.filter(option => option.toLowerCase().includes(query));
//   }

//   selectOption(channel: Channel, option: string): void {
//     channel.name = option;
//     channel.showOptions = false;
//     this.checkIfNextCanBeEnabled();
//   }

//   showLanguageOptions(channel: Channel): void {
//     channel.showLanguageOptions = true;
//   }

//   hideLanguageOptions(channel: Channel): void {
//     setTimeout(() => channel.showLanguageOptions = false, 200); // Delay to allow click event to register
//   }

//   filterLanguageOptions(channel: Channel): void {
//     const query = channel.language.toLowerCase();
//     channel.filteredLanguageOptions = this.languageOptions.filter(option => option.toLowerCase().includes(query));
//   }

//   selectLanguageOption(channel: Channel, option: string): void {
//     channel.language = option;
//     channel.showLanguageOptions = false;
//     this.checkIfNextCanBeEnabled();
//   }

//   openFileDialog(channel: Channel): void {
//     this.selectedChannel = channel;
//     this.showFileDialog = true;
//   }

//   onFileSelected(file: File | null, channel: Channel): void {
//     if (file) {
//       channel.image = file;
//       this.checkIfNextCanBeEnabled();
//     }
//     this.showFileDialog = false;
//   }

//   checkIfNextCanBeEnabled(): void {
//     this.isNextEnabled = this.channels.every(channel => 
//       channel.name && channel.language && channel.header && channel.body && channel.image);
//   }

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     if (this.isNextEnabled) {
//       this.router.navigate(['/schedule']);
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Channel {
  name: string;
  language: string;
  header: string;
  body: string;
  image: File | null;
  showOptions: boolean;
  filteredOptions: string[];
  showLanguageOptions: boolean;
  filteredLanguageOptions: string[];
}

@Component({
  selector: 'app-create-bulk-notification',
  templateUrl: './create-bulk-notification.component.html',
  styleUrls: ['./create-bulk-notification.component.css']
})
export class CreateBulkNotificationComponent implements OnInit {
  activeTab = 'create';
  channels: Channel[] = [
    { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [], showLanguageOptions: false, filteredLanguageOptions: [] },
    { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [], showLanguageOptions: false, filteredLanguageOptions: [] },
    { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [], showLanguageOptions: false, filteredLanguageOptions: [] }
  ];
  options: string[] = ['In-App Notification', 'SMS', 'Email'];
  languageOptions: string[] = ['English'];
  showFileDialog = false;
  selectedChannel: Channel | null = null;
  isNextEnabled = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.channels.forEach(channel => {
      channel.filteredOptions = [...this.options];
      channel.filteredLanguageOptions = [...this.languageOptions];
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

  showLanguageOptions(channel: Channel): void {
    channel.showLanguageOptions = true;
  }

  hideLanguageOptions(channel: Channel): void {
    setTimeout(() => channel.showLanguageOptions = false, 200); // Delay to allow click event to register
  }

  filterLanguageOptions(channel: Channel): void {
    const query = channel.language.toLowerCase();
    channel.filteredLanguageOptions = this.languageOptions.filter(option => option.toLowerCase().includes(query));
  }

  selectLanguageOption(channel: Channel, option: string): void {
    channel.language = option;
    channel.showLanguageOptions = false;
  }

  openFileDialog(channel: Channel): void {
    this.selectedChannel = channel;
    this.showFileDialog = true;
  }

  onFileSelected(file: File | null, channel: Channel): void {
    if (file) {
      channel.image = file;
      this.isNextEnabled = true;
    }
    this.showFileDialog = false;
  }

  cancel(): void {
    // Implement cancel logic
  }

  next(): void {
    if (this.isNextEnabled) {
      this.router.navigate(['/schedule']);
    }
  }
}
