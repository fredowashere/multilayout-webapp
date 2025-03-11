import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-shell',
  templateUrl: './custom-shell.component.html',
  styleUrls: ['./custom-shell.component.css']
})
export class CustomShellComponent {
  formConf: any[] = [];
  out = {};

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.formConf = data.formConf;
    });

    console.warn("YAY");
  }
}
