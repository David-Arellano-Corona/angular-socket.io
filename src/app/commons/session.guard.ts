import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { SessionService } from './session.services';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  
  constructor(
    private sessionService:SessionService,
    private router: Router
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      const hasSession = this.sessionService.getsession();
      if(!hasSession){
        this.router.navigate(['/'])
        return false
      }
      return true
  }
  
}
