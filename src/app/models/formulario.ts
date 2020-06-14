import { PortadorTEA } from './portador-tea';

export class Formulario {
    responsavel: string;
    cpf: string;
    portadoresTEA: PortadorTEA[];

    constructor(responsavel: string, cpf: string, portadoresTEA: PortadorTEA[]) {
        this.responsavel = responsavel;
        this.cpf = cpf;
        this.portadoresTEA = portadoresTEA;
    }
}
