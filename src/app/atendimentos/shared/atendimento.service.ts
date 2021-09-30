import { Injectable } from '@angular/core';
import { Atendimento } from '../shared';

@Injectable()

export class AtendimentoService {

  constructor() { }
  
  listarPacientes(): Atendimento []{
    const atendimentos = localStorage['atendimentos'];
    return atendimentos ? JSON.parse(atendimentos): [];
  }

  cadastrarAtendimento(atendimento: Atendimento): void{
    const atendimentos = this.listarPacientes();
    atendimento.id = new Date().getTime();
    atendimentos.push(atendimento);
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  buscarPorId(id: number): Atendimento{
    const atendimentos: Atendimento[] = this.listarPacientes();
    return atendimentos.find(atendimento => atendimento.id ===id);
  }

  editarCadastro(atendimento : Atendimento): void{
    const atendimentos: Atendimento[] = this.listarPacientes();
    atendimentos.forEach((obj, indice, objs)=>{
      if(atendimento.id === obj.id){
        objs[indice] = atendimento;
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos); // atendimento*
  }

  alterarStatus(id: number):void {
    let atendimentos : Atendimento[] = this.listarPacientes();
    atendimentos.forEach((obj,indice,objs)=>{
      if (id === obj.id){
        objs[indice].status = !obj.status;
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }



}
