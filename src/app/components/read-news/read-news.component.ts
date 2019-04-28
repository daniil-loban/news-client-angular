import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {GetNewsService} from '../../services/get-news.service'
import {News} from '../../models/news'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-read-news',
  templateUrl: './read-news.component.html',
  styleUrls: ['./read-news.component.css']
})

export class ReadNewsComponent implements OnInit {
  newsId:number;
  currentNews$:Observable<any>;
  constructor(
    private getNewsService:GetNewsService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit() {
   this.currentNews$ = this.getNewsService.getNewsById(this.route.snapshot.params['id'])
  }
}
