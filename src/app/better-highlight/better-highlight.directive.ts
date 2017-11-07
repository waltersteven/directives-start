//Creating an enhanced attribute directive
import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highLightColor: string = 'blue';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  //to which property(eg: style) of the element we want to bind. 
  @HostBinding('style.backgroundColor') backgroundColor: string; //transparent its an initial value.

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //This is a better approach of accessing the DOM, https://angular.io/api/core/Renderer2
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  /*HostBinding & HostListener are a good combination */  

  //HostListener: When we need to react on events.
  @HostListener('mouseenter') mouseover(eventData: Event) { //mouseenter its one of the events supported
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) { //mouseenter its one of the events supported
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }  
}
