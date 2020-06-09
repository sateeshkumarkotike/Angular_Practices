import { Directive, ElementRef, HostListener, Renderer2, Host } from '@angular/core';

@Directive({
  selector: '[appBasic]'
})

export class BasicDirective {

  constructor(private element:ElementRef , private renderer:Renderer2) { 
    console.log(element);
  }

  @HostListener('mouseover') onHover(){
     this.renderer.setStyle(this.element.nativeElement,'color','red');
     this.renderer.setStyle(this.element.nativeElement,'background-color','blue');
  }

  @HostListener('mouseout') onLeave(){
    this.renderer.setStyle(this.element.nativeElement,'color','black');
    this.renderer.setStyle(this.element.nativeElement,'background-color','white');
  }

}
