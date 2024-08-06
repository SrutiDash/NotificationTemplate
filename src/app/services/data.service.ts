//new

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private baseUrl = 'http://localhost:5000/api';

//   private notification = {
//     serviceType: '',
//     eventTrigger: '',
//     party: '',
//     parameters: [
//       { channel: '', language: 'English', header: '', body: '', documents: '', filteredChannels: [] }
//     ]
//   };

//   setNotification(notification: any) {
//     this.notification = notification;
//   }

//   getNotification() {
//     return this.notification;
//   }

//   selectedServiceType: string = '';
//   selectedEventTrigger: string = '';
//   selectedParty: string = '';
//   senderParent: string = '';
//   grade: string = '';
//   channels: string[] = [];
//   inAppNotifications: any[] = []; // Corrected
//   smsNotifications: any[] = []; // Corrected
//   emailNotifications: any[] = [];

//   constructor(private http: HttpClient) { }

//   getServiceTypes(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/service-types`);
//   }

//   getEventTriggers(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/event-triggers`);
//   }

//   getParties(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/parties`);
//   }

//   getParameters(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/parameters`);
//   }

//   saveNotification(): Observable<any> {
//     // Implement save logic here, e.g., sending data to the backend
//     return this.http.post(`${this.baseUrl}/save-notification`, {
//       serviceType: this.selectedServiceType,
//       eventTrigger: this.selectedEventTrigger,
//       party: this.selectedParty,
//       senderParent: this.senderParent,
//       grade: this.grade,
//       channels: this.channels,
//       inAppNotifications: this.inAppNotifications, // Corrected
//       smsNotifications: this.smsNotifications, // Corrected
//       emailNotifications: this.emailNotifications
//     });
//   }
// }

//new

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private baseUrl = 'http://localhost:5000/api';

// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification.model';  // Ensure correct path

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:5000/api';

  private notification = {
    serviceType: '',
    eventTrigger: '',
    party: '',
    parameters: [
      { channel: '', language: 'English', header: '', body: '', documents: '', filteredChannels: [] }
    ]
  };

  setNotification(notification: any) {
    this.notification = notification;
  }

  getNotification() {
    return this.notification;
  }

  selectedServiceType: string = '';
  selectedEventTrigger: string = '';
  selectedParty: string = '';
  senderParent: string = '';
  grade: string = '';
  channels: string[] = [];
  inAppNotifications: any[] = [];
  smsNotifications: any[] = [];
  emailNotifications: any[] = [];

  constructor(private http: HttpClient) { }

  getServiceTypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/service-types`);
  }

  getEventTriggers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/event-triggers`);
  }

  getParties(): Observable<any> {
    return this.http.get(`${this.baseUrl}/parties`);
  }

  getParameters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/parameters`);
  }

  // Add a method to fetch notification templates
  getNotificationTemplates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/notification-templates`);
  }

  saveNotification(): Observable<any> {
    // Implement save logic here, e.g., sending data to the backend
    return this.http.post(`${this.baseUrl}/save-notification`, {
      serviceType: this.selectedServiceType,
      eventTrigger: this.selectedEventTrigger,
      party: this.selectedParty,
      senderParent: this.senderParent,
      grade: this.grade,
      channels: this.channels,
      inAppNotifications: this.inAppNotifications,
      smsNotifications: this.smsNotifications,
      emailNotifications: this.emailNotifications
    });
  }
}
