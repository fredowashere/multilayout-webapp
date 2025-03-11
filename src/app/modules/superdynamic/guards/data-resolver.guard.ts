import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { forms } from '../forms';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.paramMap.get("id")!;
    console.log({ id, form: forms[id] });
    return forms[id];
  }
}
