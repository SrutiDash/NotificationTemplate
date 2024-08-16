// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Notification } from '../models/notification.model';

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
//   inAppNotifications: any[] = [];
//   smsNotifications: any[] = [];
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

//   getNotificationTemplates(filters: { [key: string]: string } = {}): Observable<any[]> {
//     let params = new HttpParams();
//     for (const key in filters) {
//       if (filters[key]) {
//         params = params.append(key, filters[key]);
//       }
//     }
//     return this.http.get<any[]>(`${this.baseUrl}/notification-templates`, { params });
//   }

//   getNotificationTemplate(id: number): Observable<any> {
//     return this.http.get(`${this.baseUrl}/notification-templates/${id}`);
//   }

//   deleteNotification(id: number): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/notification-templates/${id}`);
//   }

//   getFilteredServiceTypes(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/filter-service-types`);
//   }

//   getFilteredEventTriggers(serviceType: string): Observable<any> {
//     return this.http.get(`${this.baseUrl}/filter-event-triggers/${serviceType}`);
//   }

//   getFilteredParties(serviceType: string, eventTrigger: string): Observable<any> {
//     return this.http.get(`${this.baseUrl}/filter-parties/${serviceType}/${eventTrigger}`);
//   }

//   // data.service.ts
// getNotificationDetails(id: number): Observable<any> {
//   return this.http.get<any>(`${this.baseUrl}/notification-details/${id}`);
// }


//   saveNotification(): Observable<any> {
//     return this.http.post(`${this.baseUrl}/save-notification`, {
//       serviceType: this.selectedServiceType,
//       eventTrigger: this.selectedEventTrigger,
//       party: this.selectedParty,
//       senderParent: this.senderParent,
//       grade: this.grade,
//       channels: this.channels,
//       inAppNotifications: this.inAppNotifications,
//       smsNotifications: this.smsNotifications,
//       emailNotifications: this.emailNotifications
//     });
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:5000/api';

  // Properties to hold the selected values
  selectedServiceType: string = '';
  selectedEventTrigger: string = '';
  selectedParty: string = '';
  senderParent: string = '';
  grade: string = '';
  channels: string[] = [];
  inAppNotifications: any[] = [];
  smsNotifications: any[] = [];
  emailNotifications: any[] = [];

  private notification: any = {};  // Store the edited notification

  constructor(private http: HttpClient) {}

  // Method to get service types
  getServiceTypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/service-types`);
  }

  // Method to get event triggers
  getEventTriggers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/event-triggers`);
  }

  // Method to get parties
  getParties(): Observable<any> {
    return this.http.get(`${this.baseUrl}/parties`);
  }

  // Method to get parameters
  getParameters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/parameters`);
  }

  // Method to delete a notification
  deleteNotification(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/notification-templates/${id}`);
  }

  // Method to get filtered service types
  getFilteredServiceTypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter-service-types`);
  }

  // Method to get filtered event triggers
  getFilteredEventTriggers(serviceType: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter-event-triggers/${serviceType}`);
  }

  // Method to get filtered parties
  getFilteredParties(serviceType: string, eventTrigger: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter-parties/${serviceType}/${eventTrigger}`);
  }

  // Method to get notification templates with filters
  getNotificationTemplates(filters: { [key: string]: string } = {}): Observable<any[]> {
    let params = new HttpParams();
    for (const key in filters) {
      if (filters[key]) {
        params = params.append(key, filters[key]);
      }
    }
    return this.http.get<any[]>(`${this.baseUrl}/notification-templates`, { params });
  }

  // Method to get notification details
  getNotificationDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/notification-details/${id}`);
  }

  // Method to set the notification object
  setNotification(notification: any) {
    this.notification = notification;
  }

  // Method to get the notification object
  getNotification() {
    return this.notification;
  }

  // Method to save a notification
  saveNotification(): Observable<any> {
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
