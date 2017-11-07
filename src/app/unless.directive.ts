//Creating an structural directive
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition:boolean){ //set means is a METHOD, its executed whenever the property changes, in this case, the condition. Got to have the same name as selector.
    if (!condition){ //when we want to display
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear(); //remove everything from this place at the DOM
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { } //first we inject the template (the view) which is what to place, second is the view container (where to place it)

}
