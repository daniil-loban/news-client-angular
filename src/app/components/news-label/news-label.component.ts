import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-label',
  templateUrl: './news-label.component.html',
  styleUrls: ['./news-label.component.css']
})
export class NewsLabelComponent {
  @Input() public label: string;
  @Input() public content: string;
  @Input() public isLink: boolean=false;
}
