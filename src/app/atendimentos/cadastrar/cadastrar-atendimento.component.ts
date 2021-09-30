import { Component, OnInit, ViewChild } from '@angular/core';
import { AtendimentoService, Atendimento } from '../shared';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-atendimento',
  templateUrl: './cadastrar-atendimento.component.html',
  styleUrls: ['./cadastrar-atendimento.component.css']
})
export class CadastrarAtendimentoComponent implements OnInit {

  @ViewChild('formAtendimento', {static:true})formAtendimento:NgForm;
  atendimento: Atendimento; 

  constructor(private atendimentoService: AtendimentoService, private router : Router) { }

  ngOnInit(): void {
    this.atendimento = new Atendimento();
  }

  cadastrarAtendimento():void{
    if(this.formAtendimento.form.valid){
      this.atendimentoService.cadastrarAtendimento(this.atendimento);
      this.router.navigate(['/atendimentos']);
    }
  }

}
