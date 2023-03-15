import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from "@angular/core";
import { Subscription } from "rxjs";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { intersection } from "src/app/utils/array";

@Directive({
    selector:"[rbacAllow]",
    standalone: true,
})
export class RbacAllowDirective implements OnDestroy {

    @Input()
    set rbacAllow(allowedRoles: string[]) {
        this.allowedRoles = allowedRoles;
        this.showIfUserAllowed();
    }

    allowedRoles!: string[];
    user!: User;
    sub: Subscription;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authService: AuthService
    ) {

        this.sub = authService.user$
            .subscribe(user => {
                this.user = user;
                this.showIfUserAllowed();
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    showIfUserAllowed() {

        if (!this.allowedRoles || this.allowedRoles.length === 0 || !this.user) {
            this.viewContainer.clear();
            return;
        }

        const isUserAllowed = intersection(this.allowedRoles, this.user.roles).length > 0;

        if (isUserAllowed)
            this.viewContainer.createEmbeddedView(this.templateRef);
        else
            this.viewContainer.clear();
    }

}