import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsLabelComponent } from './news-label.component';

describe('NewsLabelComponent', () => {
  let component: NewsLabelComponent;
  let fixture: ComponentFixture<NewsLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
