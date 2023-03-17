import { Component, ElementRef, ViewChild } from '@angular/core';
import { delay } from 'src/app/utils/promise';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {

  @ViewChild('logo') logo!: ElementRef;
  
  today: Date = new Date();

  constructor() {}

  async ngOnInit() {

    await delay(2000);

    this.logo.nativeElement.classList.add('expand');
    await delay(450);
    // this.router.navigate(['/']);
  }
}
