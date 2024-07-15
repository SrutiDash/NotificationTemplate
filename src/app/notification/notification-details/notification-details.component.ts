import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {
  notification: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

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
        messageBody: 'Dear <First Name> <Last Name>, <Transaction Amount> is debited from <Currency> <Wallet> with <Transaction ID>.'
      },
      sms: {
        language: 'English',
        header: '-',
        body: 'We have just introduced multi currency wallets like United States Dollar and more. To activate multicurrency wallet, click here https://www.google.com/search?q=dummy+'
      },
      email: {
        language: 'English',
        header: 'Payment Successful',
        body: 'To activate multicurrency wallet, please click here https://www.google.com/search?q=dummy+ or call customer support'
      }
    };
  }

  close(): void {
    this.router.navigate(['/notification-management']);
  }
}
