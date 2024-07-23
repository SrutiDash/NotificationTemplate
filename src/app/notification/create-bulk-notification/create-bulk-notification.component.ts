// import { Component, OnInit } from '@angular/core';

// interface Channel {
//   name: string;
//   language: string;
//   header: string;
//   body: string;
//   image: File | null;
//   showOptions: boolean;
//   filteredOptions: string[];
// }

// @Component({
//   selector: 'app-create-bulk-notification',
//   templateUrl: './create-bulk-notification.component.html',
//   styleUrls: ['./create-bulk-notification.component.css']
// })
// export class CreateBulkNotificationComponent implements OnInit {
//   activeTab = 'create';
//   channels: Channel[] = [
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [] },
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [] },
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [] }
//   ];
//   options: string[] = ['In-App Notification', 'SMS', 'Email'];

//   constructor() { }

//   ngOnInit(): void {
//     this.channels.forEach(channel => {
//       channel.filteredOptions = [...this.options];
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

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     // Implement next logic
//   }

//   onFileChange(event: any, channel: Channel): void {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       channel.image = input.files[0];
//     }
//   }
// }

// import { Component, OnInit } from '@angular/core';

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

//   onFileChange(event: any, channel: Channel): void {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       channel.image = input.files[0];
//     }
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { FileDialogComponent } from '../file-dialog/file-dialog.component';

// interface Channel {
//   name: string;
//   language: string;
//   header: string;
//   body: string;
//   image: File | null;
//   showOptions: boolean;
//   filteredOptions: string[];
// }

// @Component({
//   selector: 'app-create-bulk-notification',
//   templateUrl: './create-bulk-notification.component.html',
//   styleUrls: ['./create-bulk-notification.component.css']
// })
// export class CreateBulkNotificationComponent implements OnInit {
//   activeTab = 'create';
//   channels: Channel[] = [
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [] },
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [] },
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [] }
//   ];
//   options: string[] = ['In-App Notification', 'SMS', 'Email'];

//   constructor(public dialog: MatDialog) {}

//   ngOnInit(): void {
//     this.channels.forEach(channel => {
//       channel.filteredOptions = [...this.options];
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

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     // Implement next logic
//   }

//   onFileChange(channel: Channel): void {
//     const dialogRef = this.dialog.open(FileDialogComponent);

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         channel.image = result;
//       }
//     });
//   }
// }

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
//   showFileDialog: boolean = false;
//   selectedChannel: Channel | null = null;

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

//   openFileDialog(channel: Channel): void {
//     this.selectedChannel = channel;
//     this.showFileDialog = true;
//   }

//   onFileSelected(file: File, channel: Channel | null): void {
//     if (channel) {
//       channel.image = file;
//     }
//     this.showFileDialog = false;
//   }

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     // Implement next logic
//   }
// }

// import { Component, OnInit } from '@angular/core';

// interface Channel {
//   name: string;
//   language: string;
//   header: string;
//   body: string;
//   image: File | null;
//   showOptions: boolean;
//   filteredOptions: string[];
// }

// @Component({
//   selector: 'app-create-bulk-notification',
//   templateUrl: './create-bulk-notification.component.html',
//   styleUrls: ['./create-bulk-notification.component.css']
// })
// export class CreateBulkNotificationComponent implements OnInit {
//   activeTab = 'create';
//   channels: Channel[] = [
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [] },
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [] },
//     { name: '', language: '', header: '', body: '', image: null, showOptions: false, filteredOptions: [] }
//   ];
//   options: string[] = ['In-App Notification', 'SMS', 'Email'];

//   constructor() { }

//   ngOnInit(): void {
//     this.channels.forEach(channel => {
//       channel.filteredOptions = [...this.options];
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

//   cancel(): void {
//     // Implement cancel logic
//   }

//   next(): void {
//     // Implement next logic
//   }

//   onFileChange(event: any, channel: Channel): void {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       channel.image = input.files[0];
//       input.value = ''; // Reset the input value to allow the same file to be selected again
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';

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

  selectedChannel: Channel | null = null;
  showFileDialog = false;

  constructor() { }

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

  cancel(): void {
    // Implement cancel logic
  }

  next(): void {
    // Implement next logic
  }

  openFileDialog(channel: Channel): void {
    this.selectedChannel = channel;
    this.showFileDialog = true;
  }

  onFileSelected(file: File | null): void {
    if (this.selectedChannel && file) {
      this.selectedChannel.image = file;
    }
    this.showFileDialog = false;
    this.selectedChannel = null;
  }
}
