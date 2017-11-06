import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //This is a better approach of accessing the DOM, https://angular.io/api/core/Renderer2
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}
