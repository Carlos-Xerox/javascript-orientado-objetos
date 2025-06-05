const estudantes = require('./estudantes.json');

function buscaInformcacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformcacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformcacao(estudantes, 'telefone', '19918820860');
console.log(telefoneEstudante);