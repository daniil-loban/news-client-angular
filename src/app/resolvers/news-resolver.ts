import { Injectable } from '@angular/core';
import { GetNewsService } from '../services/get-news.service';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class NewsResolver implements Resolve<any> {
  constructor(private getNewsService: GetNewsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.getNewsService.getTopNews().catch(() => {
      return Observable.of('data not available at this time');
    });
  }
}
