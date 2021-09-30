import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoService, AtendimentoFinalizadoDirective, StatusPrioridadeDirective } from './shared';
import { ListarAtendimentoComponent } from './listar';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { CadastrarAtendimentoComponent } from './cadastrar';
import { EditarAtendimentoComponent } from './editar/editar-atendimento.component';



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
