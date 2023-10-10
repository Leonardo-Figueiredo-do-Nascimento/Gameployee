class Empresa{
    constructor(nome,email,senha){
        this.id = Math.random(),
        this.nome = nome,
        this.email = email,
        this.senha = senha
    }

}

export default Empresa;