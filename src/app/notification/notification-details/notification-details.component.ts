//new---------------------------------------

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';  // Ensure this path is correct

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {
  notificationDetails: any;  // Replace 'any' with a specific type if you have a model defined

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const notificationId = this.route.snapshot.params['id'];  // Ensure 'id' matches the route parameter name
    this.dataService.getNotificationTemplate(notificationId).subscribe({
      next: (details) => this.notificationDetails = details,
      error: (error) => console.error('Failed to load notification details:', error)
    });
  }

  close(): void {
    this.router.navigate(['/notification-management']);
  }
}

