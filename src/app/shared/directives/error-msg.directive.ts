import { Directive, ElementRef, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]',
})
export class ErrorMsgDirective implements OnInit {
  htmlElement: ElementRef<HTMLElement>;
  _mensaje: string = 'Campo requerido';
  _color: string = 'red';


  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
    if (valor === false) {
      this.htmlElement.nativeElement.classList.add('d-none');
    } else {
      this.htmlElement.nativeElement.classList.remove('d-none');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = this.el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  //Estos dos metodos se encargan de setear la propiedad privada y ser utilizados en el OnInit para dar valor por defecto
  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}

