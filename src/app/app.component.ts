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
//   activeSubMenu: string | null = null;

//   constructor(private router: Router) {}

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   toggleSubMenu(menu: string) {
//     this.activeMenu = this.activeMenu === menu ? null : menu;
//   }

//   navigateTo(route: string) {
//     this.router.navigate([route]);
//   }

//   logout() {
//     // Logic to handle logout
//   }
// }

// export class AppComponent {
//   dropdownOpen = false;
//   activeMenu: string | null = null;
//   activeSubMenu: string | null = null;

//   constructor(private router: Router) {}

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   toggleSubMenu(menu: string) {
//     this.activeMenu = this.activeMenu === menu ? null : menu;
//   }

//   navigateTo(route: string) {
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
