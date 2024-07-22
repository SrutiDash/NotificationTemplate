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
  inAppNotifications: any[] = []; // Corrected
  smsNotifications: any[] = []; // Corrected
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

  saveNotification(): Observable<any> {
    // Implement save logic here, e.g., sending data to the backend
    return this.http.post(`${this.baseUrl}/save-notification`, {
      serviceType: this.selectedServiceType,
      eventTrigger: this.selectedEventTrigger,
      party: this.selectedParty,
      senderParent: this.senderParent,
      grade: this.grade,
      channels: this.channels,
      inAppNotifications: this.inAppNotifications, // Corrected
      smsNotifications: this.smsNotifications, // Corrected
      emailNotifications: this.emailNotifications
    });
  }
}
