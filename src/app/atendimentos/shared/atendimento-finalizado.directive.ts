import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[atendimentoFinalizado]'
})
export class AtendimentoFinalizadoDirective {
  
  @Input() atendimentoFinalizado:boolean;
  
  constructor(private elemento:ElementRef) { }

  ngOnInit () {
    if (this.atendimentoFinalizado == true) {
      this.elemento.nativeElement.style.color = 'green',
      this.elemento.nativeElement.style.weigth = 'bold',
      this.elemento.nativeElement.style.background = 'lightgray'
    }
  }
  


}



