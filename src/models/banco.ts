import { Conta } from "./conta";

export class Banco {

    private contas: Conta[] = [];

    adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    listarContas(): Conta[] {
        return this.contas;
    }

    buscarConta(numero: number): Conta | undefined {
        return this.contas.find(conta => conta.numero === numero);
    }

}