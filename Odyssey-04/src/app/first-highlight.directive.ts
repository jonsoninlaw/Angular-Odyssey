import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[firstHighlight]'
})
export class FirstHighlightDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '1.2em');
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '1em');
  }
}
