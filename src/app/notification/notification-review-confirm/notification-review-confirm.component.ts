// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-notification-review-confirm',
//   templateUrl: './notification-review-confirm.component.html',
//   styleUrl: './notification-review-confirm.component.css'
// })
// export class NotificationReviewConfirmComponent {

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-notification-review-confirm',
  templateUrl: './notification-review-confirm.component.html',
  styleUrls: ['./notification-review-confirm.component.css']
})
export class NotificationReviewConfirmComponent implements OnInit {
  notification: any = {};

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.notification = this.dataService.getNotification();
  }

  cancel(): void {
    this.router.navigate(['/notification-edit', this.notification.id]);
  }

  back(): void {
    this.router.navigate(['/notification-edit', this.notification.id]);
  }

  confirm(): void {
    // Handle confirmation logic here (e.g., save changes to the backend)
    console.log('Notification confirmed:', this.notification);
    this.router.navigate(['/notification-management']);
  }
}
