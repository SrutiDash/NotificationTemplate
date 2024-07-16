import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.css']
})
export class ReviewConfirmComponent implements OnInit {
  serviceType: string = '';
  eventTrigger: string = '';
  party: string = '';
  senderParent: string = '';
  grade: string = '';
  channels: string[] = [];
  inAppSmsNotifications: any[] = [];
  emailNotifications: any[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.serviceType = this.dataService.selectedServiceType;
    this.eventTrigger = this.dataService.selectedEventTrigger;
    this.party = this.dataService.selectedParty;
    this.senderParent = this.dataService.senderParent;
    this.grade = this.dataService.grade;
    this.channels = this.dataService.channels;
    this.inAppSmsNotifications = this.dataService.inAppSmsNotifications;
    this.emailNotifications = this.dataService.emailNotifications;
  }

  cancel() {
    this.router.navigate(['/notification-management']);
  }

  back() {
    this.router.navigate(['/create-notification']);
  }

  confirm() {
    // Save the data and navigate to the success page or perform other actions
  }
}
