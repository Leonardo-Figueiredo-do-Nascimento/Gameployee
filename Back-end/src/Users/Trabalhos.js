class Trabalho{
    constructor(id_usuario,titulo,arquivo){
        this.id = Math.floor(Math.random() * (10000 - 10 + 1)) + 10,
        this.id_usuario = id_usuario,
        this.titulo = titulo,
        this.arquivo = arquivo
    }
}

module.exports = Trabalho