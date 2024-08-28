// src/app/models/notification.model.ts

// export interface Notification {
//     id: number; 
//     serviceType: string;
//     eventTrigger: string;
//     party: string;
//     createdOn: string;  // Format as needed based on your backend response
//     createdBy: string;  // Adjust if necessary or add optional with createdBy?: string
//   }

export interface Notification {
  id: number;
  serviceType: string;
  eventTrigger: string;
  party: string;
  createdOn: string;
  createdBy: string;
  disabled?: boolean;  // Add the disabled property
}

  