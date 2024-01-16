import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileMenuService {
  private isDropdownOpenSubject = new BehaviorSubject<boolean>(false);
  isDropdownOpen$ = this.isDropdownOpenSubject.asObservable();

  toggleMenu() {
    this.isDropdownOpenSubject.next(!this.isDropdownOpenSubject.value);
  }

  closeMenu(): void {
    this.isDropdownOpenSubject.next(false);
  }
}
