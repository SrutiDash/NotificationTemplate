// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'notification-template';
// }

// export class AppComponent {
//   dropdownOpen = false;
//   activeMenu: string | null = null;
//   activeSubMenu: string | null = null;

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   toggleSubMenu(menu: string) {
//     this.activeMenu = this.activeMenu === menu ? null : menu;
//   }

//   navigateTo(route: string) {
//     // Logic to navigate to the desired route
//     // For example, using Angular Router
//     this.router.navigate([route]);
//   }

//   logout() {
//     // Logic to handle logout
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
  activeSubMenu: string | null = null;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleSubMenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    // Logic to handle logout
  }
}
