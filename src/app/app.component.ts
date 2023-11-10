import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Multi Layout';

  constructor() {
    const cwarn = console.warn;
    window.console.warn = (message: any) => {
      if (typeof message === "string") {
        if (message.includes("It looks like you're using the disabled attribute")) {
          return;
        }
        cwarn(message);
      }
    }
  }
}
