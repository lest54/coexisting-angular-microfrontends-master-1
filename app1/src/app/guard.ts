import { Injectable, Injector } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor() {}

  async canActivate(
    route: ActivatedRouteSnapshot
  ): Promise<boolean|UrlTree> {
     return true;
  }
}
