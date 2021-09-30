export class Atendimento{
    constructor(
        public id?: number,
        public paciente?: string,
        public prioridade?: string,
        public status?: boolean 
    ){}
}