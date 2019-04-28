import { Directive, Renderer2, ElementRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appFreshNews]'
})
export class FreshNewsDirective implements OnChanges {
  @Input() public publishedAt: string;
  constructor(private renderer: Renderer2, private element: ElementRef) {}

  public ngOnChanges(): void {
    const now = new Date();
    const creationDate = new Date(this.publishedAt);
    const hourDifference = Math.round((now.getTime()-creationDate.getTime()) / (1 * 3600 * 1000));

    let color=`hsla(${hourDifference * 12}, 100%, 50%, 0.3)`

    if (color) {
      this.renderer.setStyle(this.element.nativeElement, 'background', `${color}`);
    }
  }
}
