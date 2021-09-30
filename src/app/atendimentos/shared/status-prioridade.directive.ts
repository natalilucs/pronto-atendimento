import { Directive, ElementRef, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[statusPrioridade]'
})

export class StatusPrioridadeDirective {

  @Input() statusPrioridade: string;

  constructor(private elemento: ElementRef) { }


 ngOnInit () {
    if (this.statusPrioridade == 'Imediato') {
      this.elemento.nativeElement.style.backgroundColor = '#FF0000';
    } 
    else if (this.statusPrioridade == "Muito urgente") {
      this.elemento.nativeElement.style.backgroundColor = '#FF8C00';
    } 
    else if (this.statusPrioridade == "Urgente") {
      this.elemento.nativeElement.style.backgroundColor = '#FFFF00';
    } 
    else if (this.statusPrioridade == "Pouco urgente") {
      this.elemento.nativeElement.style.backgroundColor = '#00FF7F';
    } 
    else if (this.statusPrioridade == "Não urgente"){
      this.elemento.nativeElement.style.backgroundColor = '#00CED1';
    }
  }

}


