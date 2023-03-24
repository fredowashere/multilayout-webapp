import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ENV_DEV } from "src/environments/envs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem("token");

        if (!idToken) // exclude bearer for StatoAvanzamento with "environment.name === ENV_DEV ||"
            return next.handle(req);

        const cloned = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + idToken)
        });

        return next.handle(cloned);
    }
}