import { Cliente } from "./cliente";

export class Conta {

    constructor(
        public numero: number,
        public cliente: Cliente,
        public saldo: number = 0
    ) {}

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): boolean {

        if (valor > this.saldo) {
            return false;
        }

        this.saldo -= valor;
        return true;
    }

    transferir(contaDestino: Conta, valor: number): boolean {

        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }

        return false;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

}