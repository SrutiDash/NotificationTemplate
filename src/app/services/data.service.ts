import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification.model';

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

  getNotificationTemplates(filters: { [key: string]: string } = {}): Observable<any[]> {
    let params = new HttpParams();
    for (const key in filters) {
      if (filters[key]) {
        params = params.append(key, filters[key]);
      }
    }
    return this.http.get<any[]>(`${this.baseUrl}/notification-templates`, { params });
  }

  getNotificationTemplate(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/notification-templates/${id}`);
  }

  deleteNotification(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/notification-templates/${id}`);
  }

  getFilteredServiceTypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter-service-types`);
  }

  getFilteredEventTriggers(serviceType: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter-event-triggers/${serviceType}`);
  }

  getFilteredParties(serviceType: string, eventTrigger: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter-parties/${serviceType}/${eventTrigger}`);
  }

  // data.service.ts
getNotificationDetails(id: number): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/notification-details/${id}`);
}


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
