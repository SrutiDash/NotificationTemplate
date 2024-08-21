// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-notification-details',
//   templateUrl: './notification-details.component.html',
//   styleUrls: ['./notification-details.component.css']
// })
// export class NotificationDetailsComponent implements OnInit {
//   notificationDetails: any = {};
//   languagesTexts: any[] = [];

//   constructor(
//     private dataService: DataService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const notificationId = this.route.snapshot.params['id'];
//     this.dataService.getNotificationDetails(notificationId).subscribe({
//       next: (details) => {
//         this.notificationDetails = details;
//         this.languagesTexts = details.languagesTexts;
//       },
//       error: (error) => console.error('Failed to load notification details:', error)
//     });
//   }

//   close(): void {
//     this.router.navigate(['/notifications']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {
  notificationDetails: any = {};
  languagesTexts: any[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const notificationId = this.route.snapshot.params['id'];
    this.dataService.getNotificationDetails(notificationId).subscribe({
      next: (details) => {
        this.notificationDetails = details;
        this.languagesTexts = details.languagesTexts.map((item: any) => {
          return {
            ...item,
            header: details.eventTrigger // Set the header value to the event trigger
          };
        });
      },
      error: (error) => console.error('Failed to load notification details:', error)
    });
  }

  close(): void {
    this.router.navigate(['/notifications']);
  }
}

