import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AtendimentoRoutes } from "./atendimentos";

export const router : Routes = [
    {
        path: '',
        redirectTo: 'atendimentos/listar',
        pathMatch:'full'  
    },
    ...AtendimentoRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule {}