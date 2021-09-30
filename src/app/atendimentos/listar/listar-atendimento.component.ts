import { Component, OnInit } from '@angular/core';
import { Atendimento, AtendimentoService } from '../shared';

@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrls: ['./listar-atendimento.component.css']
})
export class ListarAtendimentoComponent implements OnInit {

  atendimentos: Atendimento[];

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit() {

    this.atendimentos = this.listarPacientes();
  }

  listarPacientes(): Atendimento[]{
    return this.atendimentoService.listarPacientes();
  }

  alterarStatus(atendimento: Atendimento):void{
    if(confirm('Deseja marcar o status do atendimento como concluído ?"' +atendimento.paciente+'"?')){
      this.atendimentoService.alterarStatus(atendimento.id);
      this.atendimentos = this.listarPacientes();
    }else{
      this.atendimentos = this.listarPacientes();
    }
    
  }
    


  



}
