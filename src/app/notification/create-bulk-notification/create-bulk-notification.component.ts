import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bulk-notification',
  templateUrl: './create-bulk-notification.component.html',
  styleUrls: ['./create-bulk-notification.component.css']
})
export class CreateBulkNotificationComponent implements OnInit {
  channels = [
    { name: 'In-App Notification' },
    { name: 'SMS' },
    { name: 'Email' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['/bulk-notifications']);
  }

  next(): void {
    // Implement the next step logic here
  }
}
