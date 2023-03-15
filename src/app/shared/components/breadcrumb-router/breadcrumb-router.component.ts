import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-router',
  templateUrl: './breadcrumb-router.component.html',
  styleUrls: ['./breadcrumb-router.component.css']
})
export class BreadcrumbRouterComponent {

  incrementalSegments!: { label: string, path: string }[];

  constructor() {

    const labels = location.pathname.split('/').slice(1);

    this.incrementalSegments = [];

    for (let i = 0; i < labels.length; i++) {

      const label = labels[i][0].toUpperCase() + labels[i].slice(1).toLocaleLowerCase();
      const path = '/' + labels.slice(0, i + 1).join('/');

      this.incrementalSegments.push({ label, path });
    }
  }
}
