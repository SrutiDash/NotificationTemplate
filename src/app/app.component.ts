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
//   isFilterPromptVisible = false;

//   constructor(private router: Router) {}

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   toggleSubMenu(menu: string) {
//     this.activeMenu = this.activeMenu === menu ? null : menu;
//   }

//   setActiveSubMenu(subMenu: string) {
//     this.activeSubMenu = subMenu;
//   }

//   toggleFilterPrompt() {
//     this.isFilterPromptVisible = !this.isFilterPromptVisible;
//   }

//   navigateTo(route: string) {
//     this.router.navigate([route]);
//   }

//   logout() {
    
//   }
// }


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
//   isFilterPromptVisible = false;

//   constructor(private router: Router) {}

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   toggleSubMenu(menu: string) {
//     this.activeMenu = this.activeMenu === menu ? null : menu;
//   }

//   setActiveSubMenu(subMenu: string) {
//     this.activeSubMenu = subMenu;
//   }

//   toggleFilterPrompt() {
//     this.isFilterPromptVisible = !this.isFilterPromptVisible;
//   }

//   navigateTo(route: string) {
//     this.router.navigate([route]);
//   }

//   logout() {
//     // Logic to handle logout
//   }
// }

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
//   isFilterPromptVisible = false;

//   constructor(private router: Router) {}

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   toggleSubMenu(menu: string) {
//     this.activeMenu = this.activeMenu === menu ? null : menu;
//   }

//   setActiveSubMenu(subMenu: string) {
//     this.activeSubMenu = subMenu;
//   }

//   toggleFilterPrompt() {
//     this.isFilterPromptVisible = !this.isFilterPromptVisible;
//   }

//   navigateTo(route: string) {
//     this.router.navigate([route]);
//   }

//   navigateToCreate() {
//     this.router.navigate(['/create-notification']);
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
  isFilterPromptVisible = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleSubMenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  setActiveSubMenu(subMenu: string) {
    this.activeSubMenu = subMenu;
  }

  toggleFilterPrompt() {
    this.isFilterPromptVisible = !this.isFilterPromptVisible;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    
  }
}
