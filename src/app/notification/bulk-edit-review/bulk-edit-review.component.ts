import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bulk-edit-review',
  templateUrl: './bulk-edit-review.component.html',
  styleUrls: ['./bulk-edit-review.component.css']
})
export class BulkEditReviewComponent implements OnInit {
  notification = {
    name: '',
    inAppMessageHeader: '',
    inAppMessageBody: '',
    smsMessageHeader: '',
    smsMessageBody: '',
    emailMessageHeader: '',
    emailMessageBody: '',
    startDate: '',
    endDate: '',
    submitTime: '',
    repeat: '',
    days: '',
    sendTo: '',
    totalRecords: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.notification = navigation.extras.state['notification'];
    }
  }

  cancel(): void {
    this.router.navigate(['/bulk-notifications']);
  }

  back(): void {
    this.router.navigate(['/bulk-edit'], { state: { notification: this.notification } });
  }

  submit(): void {
    // Implement the logic for submission
    console.log('Notification submitted');
  }
}
