import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent {
  formConf: any[] = [];
  out = {};

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.formConf = data.formConf;
    });
  }
}
