import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil, tap } from 'rxjs';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  destroy$ = new Subject<void>();

  constructor(
    public sidebarService: SidebarService,
    private router: Router
  ) { }

  ngOnInit() {

    // Autoscroll to top on route change
    this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter(event => event instanceof NavigationEnd),
        tap(() => document.querySelector('.sb-layout__main')?.scrollTop)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
