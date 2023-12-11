import { Component, QueryList, ViewChildren } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { intersection } from 'src/app/utils/array';

interface SidebarSubitem {
  title: string;
  path?: string;
  externalLink?: string;
  executable?: Function;
  icon?: string;
  roles?: string[];
}

interface SidebarItem {
  isActive: boolean; // Make the collapse work
  title: string;
  path?: string;
  externalLink?: string;
  executable?: Function;
  icon?: string;
  children?: SidebarSubitem[];
  roles?: string[];
}

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class DashboardSidebarComponent {

  // Get all view children with #rla applied
  @ViewChildren('rla')
  rlaList!: QueryList<RouterLinkActive>;

  intersection = intersection;

  sidebarItems: SidebarItem[] = [
    {
      isActive: false,
      title: 'Kitchen Sink',
      icon: 'bi-list-columns',
      path: '/dashboard/kitchen-sink',
    },
    {
      isActive: false,
      title: 'App input',
      icon: 'bi-ui-radios',
      path: '/dashboard/demos/app-input',
    },
    {
      isActive: false,
      title: 'App table',
      icon: 'bi-table',
      path: '/dashboard/demos/app-table',
    },
    {
      isActive: false,
      title: 'App chart',
      icon: 'bi-bar-chart-fill',
      path: '/dashboard/demos/app-chart',
    },
    {
      isActive: false,
      title: 'Wizard',
      icon: 'bi-eyeglasses',
      path: '/dashboard/demos/wizard'
    },
    {
      isActive: false,
      title: 'Bootstrap widgets',
      icon: 'bi-grid',
      children: [
        {
          path: '/dashboard/demos/accordion',
          title: 'Accordion'
        },
        {
          path: '/dashboard/demos/alert',
          title: 'Alert'
        },
        {
          path: '/dashboard/demos/carousel',
          title: 'Carousel'
        },
        {
          path: '/dashboard/demos/collapse',
          title: 'Collapse'
        },
        {
          path: '/dashboard/demos/datepicker',
          title: 'Datepicker'
        },
        {
          path: '/dashboard/demos/dropdown',
          title: 'Dropdown'
        },
        {
          path: '/dashboard/demos/modal',
          title: 'Modal'
        },
        {
          path: '/dashboard/demos/nav',
          title: 'Nav'
        },
        {
          path: '/dashboard/demos/offcanvas',
          title: 'Offcanvas'
        },
        {
          path: '/dashboard/demos/pagination',
          title: 'Pagination'
        },
        {
          path: '/dashboard/demos/popover',
          title: 'Popover'
        },
        {
          path: '/dashboard/demos/progressbar',
          title: 'Progress Bar'
        },
        {
          path: '/dashboard/demos/rating',
          title: 'Rating'
        },
        {
          path: '/dashboard/demos/table',
          title: 'Table'
        },
        {
          path: '/dashboard/demos/timepicker',
          title: 'Timepicker'
        },
        {
          path: '/dashboard/demos/toast',
          title: 'Toast'
        },
        {
          path: '/dashboard/demos/tooltip',
          title: 'Tooltip'
        },
        {
          path: '/dashboard/demos/typeahead',
          title: 'Typeahead'
        },
      ]
    },
  ];

  username$: Observable<string | undefined>;

  constructor(
    public sidebarService: SidebarService,
    public authService: AuthService
  ) {
    this.username$ = this.authService.user$
      .pipe(map(user => user.username));
  }

  ngAfterViewInit(): void {

    if (!this.rlaList) return;

    // Wait for the router to activate
    setTimeout(() => {

      // Look for the currently activated route
      const activeItemIndex = this.rlaList.toArray()
        .findIndex(x => x.isActive);

      // If there's and active item, then expand it
      if (activeItemIndex > -1)
        this.sidebarItems[activeItemIndex].isActive = true;
    }, 150);
  }
}
