import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isOpen = true;

  constructor(
    public breakpointObserver: BreakpointObserver
  ) {

    // Open/close sidebar based on device width
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches)
          this.isOpen = true;
        else
          this.isOpen = false;
      });
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
