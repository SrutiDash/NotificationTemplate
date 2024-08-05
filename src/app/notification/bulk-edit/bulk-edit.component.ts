import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bulk-edit',
  templateUrl: './bulk-edit.component.html',
  styleUrls: ['./bulk-edit.component.css']
})
export class BulkEditComponent implements OnInit {
  notification = {
    name: '',
    inAppMessageHeader: '',
    inAppMessageBody: '',
    smsMessageHeader: '',
    smsMessageBody: '',
    emailMessageHeader: '',
    emailMessageBody: ''
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

  next(): void {
    this.router.navigate(['/bulk-edit-review'], { state: { notification: this.notification } });
  }
  
}
