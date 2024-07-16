// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private baseUrl = 'http://localhost:5000/api';

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
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private baseUrl = 'http://localhost:5000/api';

//   selectedServiceType: string = '';
//   selectedEventTrigger: string = '';
//   selectedParty: string = '';
//   senderParent: string = '';
//   grade: string = '';
//   channels: string[] = [];
//   inAppSmsNotifications: any[] = [];
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

//   saveNotification(notificationData: any): Observable<any> {
//     // Replace the URL and implementation as needed to save the notification data
//     return this.http.post(`${this.baseUrl}/save-notification`, notificationData);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private baseUrl = 'http://localhost:5000/api';

//   selectedServiceType: string = '';
//   selectedEventTrigger: string = '';
//   selectedParty: string = '';
//   senderParent: string = '';
//   grade: string = '';
//   channels: string[] = [];
//   inAppSmsNotifications: any[] = [];
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

//   saveNotification(notificationData: any): Observable<any> {
//     // Replace the URL and implementation as needed to save the notification data
//     return this.http.post(`${this.baseUrl}/save-notification`, notificationData);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private baseUrl = 'http://localhost:5000/api';

//   selectedServiceType: string = '';
//   selectedEventTrigger: string = '';
//   selectedParty: string = '';
//   senderParent: string = ''; // Added property
//   grade: string = ''; // Added property
//   channels: string[] = [];
//   inAppSmsNotifications: any[] = []; // Added property
//   emailNotifications: any[] = []; // Added property

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

//   saveNotification(notificationData: any): Observable<any> {
//     // Replace the URL and implementation as needed to save the notification data
//     return this.http.post(`${this.baseUrl}/save-notification`, notificationData);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private baseUrl = 'http://localhost:5000/api';

//   selectedServiceType: string = '';
//   selectedEventTrigger: string = '';
//   selectedParty: string = '';
//   senderParent: string = ''; // Added property
//   grade: string = ''; // Added property
//   channels: string[] = [];
//   inAppSmsNotifications: any[] = []; // Added property
//   emailNotifications: any[] = []; // Added property

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

//   saveNotification(notificationData: any): Observable<any> {
//     // Replace the URL and implementation as needed to save the notification data
//     return this.http.post(`${this.baseUrl}/save-notification`, notificationData);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private baseUrl = 'http://localhost:5000/api';

//   selectedServiceType: string = '';
//   selectedEventTrigger: string = '';
//   selectedParty: string = '';
//   senderParent: string = '';
//   grade: string = '';
//   channels: string[] = [];
//   inAppSmsNotifications: any[] = [];
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

//   saveNotification(notificationData: any): Observable<any> {
//     return this.http.post(`${this.baseUrl}/save-notification`, notificationData);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:5000/api';

  selectedServiceType: string = '';
  selectedEventTrigger: string = '';
  selectedParty: string = '';
  senderParent: string = '';
  grade: string = '';
  channels: string[] = [];
  inAppSmsNotifications: any[] = [];
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
}
