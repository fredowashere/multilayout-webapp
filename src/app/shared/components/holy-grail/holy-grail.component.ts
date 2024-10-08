import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { HolySidebarService } from "./holy-sidebar.service";

@Component({
    selector: "app-holy-grail",
    templateUrl: "./holy-grail.component.html",
    styleUrls: [ "./holy-grail.component.css" ],
})
export class HolyGrailComponent {

    @Input("hasSidebarLeft") hasSidebarLeft = true;
    @Input("hasSidebarRight") hasSidebarRight = true;

    constructor(
        public sidebarService: HolySidebarService,
        private router: Router
    ) {}

    ngOnInit() {
        if (window.innerWidth > 700) {
            this.sidebarService.isLeftOpen = this.hasSidebarLeft;
            this.sidebarService.isRightOpen = this.hasSidebarRight;
        }
    }
}