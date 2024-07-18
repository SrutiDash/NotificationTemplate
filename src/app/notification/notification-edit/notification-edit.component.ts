// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-notification-edit',
//   templateUrl: './notification-edit.component.html',
//   styleUrls: ['./notification-edit.component.css']
// })
// export class NotificationEditComponent implements OnInit {
//   notification: any = {};
//   search: string = '';

//   constructor(private route: ActivatedRoute, private router: Router) { }

//   ngOnInit(): void {
//     const notificationId = this.route.snapshot.paramMap.get('id');
//     // Fetch the notification details based on the ID
//     // This is sample data, replace it with actual data fetching logic
//     this.notification = {
//       serviceType: 'Send Money',
//       eventTrigger: 'Success',
//       party: 'Sender',
//       senderParent: 'Customer',
//       grade: 'Gold',
//       createdBy: 'Chnladmin',
//       createdOn: '12/07/2020 11:00hrs',
//       status: 'Approved',
//       inAppNotification: {
//         language: 'English',
//         header: 'Payment Successful',
//         messageBody: 'Dear <First Name> <Last Name>, <Transaction Amount> is debited from <Currency> <Wallet> with <Transaction ID>.',
//         attachableDocuments: 'Statement'
//       },
//       sms: {
//         language: 'English',
//         header: '-',
//         body: 'We have just introduced multi currency wallets like United States Dollar and more. To activate multicurrency wallet, click here https://www.google.com/search?q=dummy+',
//         attachableDocuments: 'Statement'
//       },
//       email: {
//         language: 'English',
//         header: 'Payment Successful',
//         body: 'To activate multicurrency wallet, please click here https://www.google.com/search?q=dummy+ or call customer support',
//         attachableDocuments: 'Statement'
//       },
//       url: {
//         language: 'English',
//         header: 'Payment Successful',
//         body: 'To activate multicurrency wallet, please click here https://www.google.com/search?q=dummy+ or call customer support',
//         attachableDocuments: 'Statement'
//       }
//     };
//   }

//   cancel(): void {
//     this.router.navigate(['/notification-management']);
//   }

//   next(): void {
//     // Logic for next button, potentially navigating to another step
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-notification-edit',
  templateUrl: './notification-edit.component.html',
  styleUrls: ['./notification-edit.component.css']
})
export class NotificationEditComponent implements OnInit {
  notification: any = {};
  search: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    const notificationId = this.route.snapshot.paramMap.get('id');
    // Fetch the notification details based on the ID
    // This is sample data, replace it with actual data fetching logic
    this.notification = {
      serviceType: 'Send Money',
      eventTrigger: 'Success',
      party: 'Sender',
      senderParent: 'Customer',
      grade: 'Gold',
      createdBy: 'Chnladmin',
      createdOn: '12/07/2020 11:00hrs',
      status: 'Approved',
      inAppNotification: {
        language: 'English',
        header: 'Payment Successful',
        messageBody: 'Dear <First Name> <Last Name>, <Transaction Amount> is debited from <Currency> <Wallet> with <Transaction ID>.',
        attachableDocuments: 'Statement'
      },
      sms: {
        language: 'English',
        header: '-',
        body: 'We have just introduced multi currency wallets like United States Dollar and more. To activate multicurrency wallet, click here https://www.google.com/search?q=dummy+',
        attachableDocuments: 'Statement'
      },
      email: {
        language: 'English',
        header: 'Payment Successful',
        body: 'To activate multicurrency wallet, please click here https://www.google.com/search?q=dummy+ or call customer support',
        attachableDocuments: 'Statement'
      },
      url: {
        language: 'English',
        header: 'Payment Successful',
        body: 'To activate multicurrency wallet, please click here https://www.google.com/search?q=dummy+ or call customer support',
        attachableDocuments: 'Statement'
      }
    };
  }

  cancel(): void {
    this.router.navigate(['/notification-management']);
  }

  next(): void {
    this.dataService.selectedServiceType = this.notification.serviceType;
    this.dataService.selectedEventTrigger = this.notification.eventTrigger;
    this.dataService.selectedParty = this.notification.party;
    this.dataService.senderParent = this.notification.senderParent;
    this.dataService.grade = this.notification.grade;
    this.dataService.inAppNotifications = [this.notification.inAppNotification];
    this.dataService.smsNotifications = [this.notification.sms];
    this.dataService.emailNotifications = [this.notification.email];
    this.router.navigate(['/review-confirm']);
  }
}
