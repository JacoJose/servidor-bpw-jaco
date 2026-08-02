import express, { type Request, type Response } from "express";

import { Cliente } from "./models/cliente";
import { Conta } from "./models/conta";
import { Banco } from "./models/banco";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
    response.json({
        message: "API funcionando"
    });
});

app.get("/conta", (request: Request, response: Response) => {

    const banco = new Banco();

    const cliente1 = new Cliente(
        "12345678900",
        "Jacó"
    );

    const cliente2 = new Cliente(
        "98765432100",
        "Maria"
    );

    const conta1 = new Conta(
        1,
        cliente1
    );

    const conta2 = new Conta(
        2,
        cliente2
    );

    banco.adicionarConta(conta1);
    banco.adicionarConta(conta2);

    conta1.depositar(500);
    conta2.depositar(1000);

    console.log("=== ANTES DA TRANSFERÊNCIA ===");
    console.log(banco.listarContas());

    const transferencia = conta1.transferir(conta2, 200);

    console.log("Transferência realizada?", transferencia);

    console.log("=== DEPOIS DA TRANSFERÊNCIA ===");
    console.log(banco.listarContas());

    response.json({
        contas: banco.listarContas()
    });

});

app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`);
    console.log(`Conta: http://localhost:${PORT}/conta`);
});