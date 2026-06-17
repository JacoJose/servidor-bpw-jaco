export class User {
    private static contadorID = 1
    public id: number
    constructor(
        public nome: string,
        public email: string,
        private senha: string,
    ) {
        this.id = User.contadorID++
    }

    verificarSenha(senhaDigitada: string): boolean {
        return this.senha === senhaDigitada
    }
    
}