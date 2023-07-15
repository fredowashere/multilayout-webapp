import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { Subscription } from "rxjs";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { intersection } from "src/app/utils/array";

@Directive({
    selector:"[rbacAllow]",
    standalone: true,
})
export class RbacAllowDirective implements OnInit, OnDestroy {

    @Input()
    set rbacAllow(allowedRoles: string[]) {
        this.allowedRoles = allowedRoles;
        this.showIfUserAllowed();
    }

    initialized = false;
    sub!: Subscription;
    user!: User;
    allowedRoles!: string[];

    constructor(
        private authService: AuthService,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    ngOnInit() {
        this.sub = this.authService.user$
            .subscribe(user => {
                this.user = user;
                this.showIfUserAllowed();
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    showIfUserAllowed() {

        if (this.initialized) this.viewContainer.clear();

        if (
            !this.user
         || !this.allowedRoles
         ||  this.allowedRoles.length === 0
         || !(intersection(this.allowedRoles, this.user.roles).length > 0)
        ) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.initialized = true;
        }
    }

}