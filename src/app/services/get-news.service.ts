import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { News } from '../models/news';
import {tap} from 'rxjs/operators';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable()
export class GetNewsService {

  constructor(private http: HttpClient, private router: Router) { }
  news: News[];

  getTopNews(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us').pipe(
      tap((response) => { this.news = response.articles })
    )
  }

  getNewsById(id:number|string):any{
    if (this.news)
      return this.news.find(item => item.title === id)
    else {
      this.router.navigate(['/']);
    }
  }

}
