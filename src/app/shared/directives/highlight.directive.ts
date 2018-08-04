import { Directive,
         OnInit,
         OnDestroy,

         Input,
         HostListener,

         ElementRef,
         Renderer2, // wrapper on DOM APIs, set/remove class, style
} from '@angular/core';

// no template
// no styles
// yes, life cycle, oninit, ondestory, input, output
// <div appHighlight />  -- div is host element
@Directive({
  selector: '[appHighlight]', // [] must for directive selector names
})
export class HighlightDirective   implements OnInit, OnDestroy {

  @Input('appHighlight')
  color: string;

  @Input()
  theme: string;

  constructor(private hostElement: ElementRef, 
              private renderer: Renderer2) {
      console.log('Highlight directive created')
   }

   ngOnInit() {
    this.color = this.color || 'lightblue';  // default if color is not provided
    console.log('directive oninit', this.color);

    }

   ngOnDestroy() {
    console.log('directive ondestroy')
   }

   @HostListener('click')
   onclick() {
     console.log('click');
   }

   @HostListener('mouseenter')
   onmouseenter() {
     this.renderer.setStyle(this.hostElement.nativeElement, 
                            'background',
                          this.color);

   }

   @HostListener('mouseleave') 
   onMouseLeave() {
      this.renderer.removeStyle(this.hostElement.nativeElement, 
                                'background');
   }

}
