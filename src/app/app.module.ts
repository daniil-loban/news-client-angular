import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { GetNewsService } from './services/get-news.service';
import { NewsListComponent } from './components/news-list/news-list.component';
import { FreshNewsDirective } from './directives/fresh-news.directive';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { DisplayNewsComponent } from './components/display-news/display-news.component';
import { RouterModule, Routes } from '@angular/router';
import { ReadNewsComponent } from './components/read-news/read-news.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NewsLabelComponent } from './components/news-label/news-label.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import {NewsResolver} from './resolvers/news-resolver'

const appRoutes: Routes = [
  {
    path: 'news',
    component: NewsListComponent,
    resolve: { allNews: NewsResolver }
  },
  { path: 'post/:id', component: ReadNewsComponent, data: {breadcrumbs: 'Current news'}},
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    FreshNewsDirective,
    NewsItemComponent,
    DisplayNewsComponent,
    ReadNewsComponent,
    NotFoundPageComponent,
    NewsLabelComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    NewsResolver,
    GetNewsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
