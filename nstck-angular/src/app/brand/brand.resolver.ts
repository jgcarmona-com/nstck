import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { LogService } from '@core/services/log-service.service';
import { Observable, of } from 'rxjs';
import { Brand } from './model/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandResolver implements Resolve<Brand | null> {
  constructor(private logger: LogService) {
    this.logger.verbose('brandResolver::constructor');
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Brand | null> {
    const moniker = route.params['brand-moniker'];
    this.logger.verbose('Resolving BRAND with moniker: ' + moniker);
    if (moniker === 'the-brand-moniker') {
      const brand: Brand = {
        id: 'id',
        brandName: 'brand name goes here',
        moniker: 'the-brand-moniker',
      };
      return of(brand);
    } else {
      return of(null);
    }
  }
}
