//Creating a basic attribute directive
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]' // [] = attribute style, recognize when added without brackets to an element.
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef) {} //elementRef its the element where the attribute directive was placed on.    

    ngOnInit(){
        // We are getting access to the element where the attribute directive was placed on, then getting access to that exact element and then overwritting the style.
        this.elementRef.nativeElement.style.backgroundColor = 'green'; 
    }
}