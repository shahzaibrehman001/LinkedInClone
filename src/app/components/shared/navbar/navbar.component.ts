import { Component, HostListener } from '@angular/core';
import { ProfileMenuService } from '../../../services/profile-menu.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isDropdownOpen$!: Observable<boolean>;

  constructor(private dropdownservice: ProfileMenuService) {
    this.isDropdownOpen$ = this.dropdownservice.isDropdownOpen$;
  }

  toggleMenu() {
    this.dropdownservice.toggleMenu();
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isDropdownButton = target.closest('.navbar-right button');
    const isDropdownContent = target.closest('.dropdown-content');

    if (!isDropdownButton && !isDropdownContent) {
      this.dropdownservice.closeMenu();
    }
  }
}
