import { Directive, ElementRef, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[statusPrioridade]'
})

export class StatusPrioridadeDirective {

  @Input() statusPrioridade: string;

  constructor(private elemento: ElementRef) { }


 ngOnInit () {
    if (this.statusPrioridade == 'Imediato') {
      this.elemento.nativeElement.style.backgroundColor = 'pink';
    } 
    else if (this.statusPrioridade == "Muito urgente") {
      this.elemento.nativeElement.style.backgroundColor = 'rgb(255, 172, 104)';
    } 
    else if (this.statusPrioridade == "Urgente") {
      this.elemento.nativeElement.style.backgroundColor = 'rgb(255, 255, 132)';
    } 
    else if (this.statusPrioridade == "Pouco urgente") {
      this.elemento.nativeElement.style.backgroundColor = 'rgb(176, 255, 176)';
    } 
    else if (this.statusPrioridade == "Não urgente"){
      this.elemento.nativeElement.style.backgroundColor = 'rgb(141, 193, 241)';
    }
  }

}


