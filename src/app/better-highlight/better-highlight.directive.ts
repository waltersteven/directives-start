import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //This is a better approach of accessing the DOM, https://angular.io/api/core/Renderer2
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }


  /*HostBinding & HostListener are a good combination */

  //to which property(eg: style) of the element we want to bind. 
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; //transparent its an initial value.

  //HostListener: When we need to react on events.
  @HostListener('mouseenter') mouseover(eventData: Event) { //mouseenter its one of the events supported
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) { //mouseenter its one of the events supported
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }  
}
