import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input,
  Output,
  output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTest]',
  standalone: true,
  exportAs: 'directive',
})
export class Test {
  private element = inject(ElementRef);
  private render = inject(Renderer2);
  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  @HostBinding('style.transaction') transaction = '';
  @HostBinding('style.transition') transition = '';
  @Input() defult: string = 'yellow';
  @Input() changed: string = 'white';
  @Input() isHover: boolean = false;
  @Output() togeel = new EventEmitter<boolean>(false);

  constructor() {
    // this.element.nativeElement.style.backgroundColor = 'red';
    // this.render.setStyle(this.element.nativeElement, 'color', 'blue');
  }
  @HostListener('mouseover') mouseover() {
    // this.render.setStyle(this.element.nativeElement, 'color', ' red');
    // this.backgroundColor = 'green';
    this.render.setStyle(this.element.nativeElement, 'color', this.changed);
    this.backgroundColor = this.defult;
    this.transition = 'all 1s';
    this.isHover = true;

    this.togeel.emit(this.isHover);
  }
  @HostListener('mouseleave') mouseleave() {
    // this.render.setStyle(this.element.nativeElement, 'color', ' red');
    // this.backgroundColor = 'green';
    // this.render.setStyle(this.element.nativeElement, 'color', this.changed);
    // this.backgroundColor = this.defult;
    // this.transition = 'all 1s';
    this.isHover = false;

    this.togeel.emit(this.isHover);
  }

  hi(): void {
    console.log('hello');
  }
}
