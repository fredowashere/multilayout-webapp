import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { forms } from '../forms';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const lastSegment = route.routeConfig?.path?.split("/").pop()!;
    const id = route.paramMap.get("id")! || lastSegment;
    console.log({ id, form: forms[id] });
    return forms[id];
  }
}
