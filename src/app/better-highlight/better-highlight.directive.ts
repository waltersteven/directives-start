import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //This is a better approach of accessing the DOM, https://angular.io/api/core/Renderer2
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  //HostListener: When we need to react on events.
  @HostListener('mouseenter') mouseover(eventData: Event) { //mouseenter its one of the events supported
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) { //mouseenter its one of the events supported
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
