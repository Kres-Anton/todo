import {Directive, Input, EventEmitter, ElementRef, Renderer, Inject} from '@angular/core';
 
@Directive({
  selector: '[focus]'
})

export class FocusDirective {
  @Input('focus')
  focusEvent: boolean;
 
  constructor(@Inject(ElementRef) private element: ElementRef, private renderer: Renderer) {
  	
  	 }
  
  ngOnChanges() {
    this.renderer.invokeElementMethod(this.element.nativeElement, 'focus',[]);
  }
 
}