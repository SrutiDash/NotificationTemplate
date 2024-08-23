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
  languagesTexts: any[] = [];
  isEdited: boolean = false; 
  search: string = ''; 
  parameters: string[] = [];
  filteredParameters: string[] = [];
  showParameterOptions: boolean = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   const notificationId = this.route.snapshot.params['id'];
  //   this.dataService.getNotificationDetails(notificationId).subscribe({
  //     next: (details) => {
  //       this.notification = details;
  //       this.languagesTexts = details.languagesTexts.map((item: any) => ({
  //         ...item,
  //         header: details.eventTrigger 
  //       }));

  //       this.dataService.getEditParameters(
  //         this.notification.serviceType,
  //         this.notification.eventTrigger,
  //         this.notification.party
  //       ).subscribe((data: any) => {
  //         this.parameters = data;
  //         this.filteredParameters = data;
  //       });
  //     },
  //     error: (error) => console.error('Failed to load notification details:', error)
  //   });
  // }

  ngOnInit(): void {
    const notificationData = history.state.notification;
  
    if (notificationData) {
      this.notification = notificationData;
      this.languagesTexts = notificationData.languagesTexts || [];
    } else {
      const notificationId = this.route.snapshot.params['id'];
      this.dataService.getNotificationDetails(notificationId).subscribe({
        next: (details) => {
          this.notification = details;
          this.languagesTexts = details.languagesTexts.map((item: any) => {
            return {
              ...item,
              header: details.eventTrigger // Set the header value to the event trigger
            };
          });
  
          // Fetch parameters based on the notification's service type, event trigger, and party
          this.dataService.getEditParameters(
            this.notification.serviceType,
            this.notification.eventTrigger,
            this.notification.party
          ).subscribe((data: any) => {
            this.parameters = data;
            this.filteredParameters = data;
          });
        },
        error: (error) => console.error('Failed to load notification details:', error)
      });
    }
  }
  

  filterOptions(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredParameters = this.parameters.filter(option =>
      option.toLowerCase().includes(query)
    );
    this.showParameterOptions = true;
  }

  selectOption(option: string) {
    this.search = option;
    this.showParameterOptions = false;
    this.isEdited = true;
  }

  showOptions() {
    this.showParameterOptions = true;
  }

  hideOptions() {
    setTimeout(() => {
      this.showParameterOptions = false;
    }, 200); 
  }

  onEdit(): void {
    this.isEdited = true; 
  }

  cancel(): void {
    this.router.navigate(['/notifications']); 
  }

  next(): void {
    this.dataService.setNotification({
      ...this.notification,
      languagesTexts: this.languagesTexts
    });
    this.router.navigate(['/notification-review-confirm']);
  }
}










