const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312313332',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['5511999998888', '551999202939'],
    media: 7.5,
    estaAprovado: function (mediaBase) {
        return this.media >= mediaBase ? true: false
    }
}

console.log('oi');
console.log(estudante.estaAprovado(7));
