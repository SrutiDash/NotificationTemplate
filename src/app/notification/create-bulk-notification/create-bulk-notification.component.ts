// import { Component, OnInit } from '@angular/core';

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

//   selectedChannel: Channel | null = null;
//   showFileDialog = false;

//   constructor() { }

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

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     // Implement next logic
//   }

//   openFileDialog(channel: Channel): void {
//     this.selectedChannel = channel;
//     this.showFileDialog = true;
//   }

//   onFileSelected(file: File | null): void {
//     if (this.selectedChannel && file) {
//       this.selectedChannel.image = file;
//     }
//     this.showFileDialog = false;
//     this.selectedChannel = null;
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

//   selectedChannel: Channel | null = null;
//   showFileDialog = false;
//   showNextDialog = false;
//   enableConfirm = false;
//   enableNext = false;

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
//     if (option === 'Email') {
//       channel.header = 'Default Email Header';
//       channel.body = 'Default Email Body';
//     } else {
//       channel.header = '';
//       channel.body = '';
//     }
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

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     if (this.activeTab === 'create') {
//       this.showNextDialog = true;
//     } else {
//       this.router.navigate(['/schedule']);
//     }
//   }

//   openFileDialog(channel: Channel): void {
//     this.selectedChannel = channel;
//     this.showFileDialog = true;
//   }

//   onFileSelected(file: File | null): void {
//     if (this.selectedChannel && file) {
//       this.selectedChannel.image = file;
//       this.enableConfirm = true;
//     }
//     this.showFileDialog = false;
//     this.selectedChannel = null;
//   }

//   confirmUpload(): void {
//     this.enableNext = true;
//     this.enableConfirm = false;
//   }

//   closeNextDialog(): void {
//     this.showNextDialog = false;
//     this.router.navigate(['/schedule']);
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
//   showLanguageOptions: boolean;
//   filteredOptions: string[];
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
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, showLanguageOptions: false, filteredOptions: [], filteredLanguageOptions: [] },
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, showLanguageOptions: false, filteredOptions: [], filteredLanguageOptions: [] },
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, showLanguageOptions: false, filteredOptions: [], filteredLanguageOptions: [] }
//   ];
//   options: string[] = ['In-App Notification', 'SMS', 'Email'];
//   languageOptions: string[] = ['English'];
//   showFileDialog = false;
//   selectedChannel: Channel | null = null;
//   enableNextButton = false;

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

//   onFileSelected(file: File): void {
//     if (this.selectedChannel) {
//       this.selectedChannel.image = file;
//     }
//   }

//   confirmFileUpload(): void {
//     this.enableNextButton = true;
//   }

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     if (this.enableNextButton) {
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
//     // Navigate to schedule page
//     this.router.navigate(['/schedule']);
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
    // Navigate to schedule page
    this.router.navigate(['/schedule']);
  }
}
