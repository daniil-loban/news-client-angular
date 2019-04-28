import { Component, OnInit, OnDestroy } from '@angular/core';
import {GetNewsService} from '../../services/get-news.service'
import {News} from '../../models/news'
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit, OnDestroy {
  constructor(private getNewsService:GetNewsService, private route: ActivatedRoute) { }
  news: News[];
  searchValue = '';
  searchControl = new FormControl();
  formCtrlSub: Subscription;

  ngOnInit() {

    this.formCtrlSub = this.searchControl.valueChanges
      .debounceTime(1000)
      .subscribe(newValue => this.searchValue = newValue);

    this.news = this.route.snapshot.data.allNews.articles;
  }
  ngOnDestroy() {
    this.formCtrlSub.unsubscribe();
  }
}

