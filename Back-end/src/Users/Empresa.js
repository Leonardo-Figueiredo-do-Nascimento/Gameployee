class Empresa{
    constructor(nome,email,senha){
        this.id = Math.random(),
        this.nome = nome,
        this.email = email,
        this.senha = senha
    }

    vagas = [];

    adicionarVaga(titulo,cargo,descrição,país) {
        this.vagas.push({titulo,cargo,descrição,país})
    }
}

export default Empresa;