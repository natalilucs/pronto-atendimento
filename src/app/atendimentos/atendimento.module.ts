import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoService } from './shared';
import { ListarAtendimentoComponent } from './listar';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { CadastrarAtendimentoComponent } from './cadastrar';
import { EditarAtendimentoComponent } from './editar/editar-atendimento.component';
import { StatusPrioridadeDirective } from './shared/status-prioridade.directive';
import { AtendimentoFinalizadoDirective } from './shared/atendimento-finalizado.directive';


@NgModule({
  declarations: [
    ListarAtendimentoComponent,
    CadastrarAtendimentoComponent,
    EditarAtendimentoComponent,
    StatusPrioridadeDirective,
    AtendimentoFinalizadoDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    
  ],
  providers:[
    AtendimentoService
  ]
})
export class AtendimentoModule { }
