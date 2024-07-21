// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   dropdownOpen = false;
//   activeMenu: string | null = null;

//   constructor(private router: Router) {}

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   navigateTo(route: string) {
//     this.activeMenu = route;
//     this.router.navigate([route]);
//   }

//   logout() {
//     // Add logout logic here
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dropdownOpen = false;
  activeMenu: string | null = null;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  navigateTo(route: string) {
    this.activeMenu = route;
    this.router.navigate([route]);
  }

  logout() {
    // Implement logout logic
  }
}
