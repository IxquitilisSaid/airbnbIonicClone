import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.userIsAuthenticated) {
      // if the user isn't logged in he get's redirected
      this.router.navigateByUrl('/auth');
    }
    // if the user is logged, this returns true (duh)
    // and the statement above doesn't execute
    return this.authService.userIsAuthenticated;
  }
}
