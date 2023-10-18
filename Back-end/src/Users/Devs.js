class Desenvolvedor{
    constructor(nome,cargo,email,senha){
        this.id = Math.random(),
        this.nome = nome,
        this.cargo = cargo,
        this.email = email,
        this.senha = senha
    }

    trabalhos = [];

    adicionarTrabalho(arquivo) {
        this.trabalhos.push(arquivo)
    }
}

export default Empresa;