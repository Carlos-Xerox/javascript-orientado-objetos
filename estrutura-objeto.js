const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312313332',
    turma: 'Javascript'
}

console.log(estudante.nome);
console.log(`O nome de estudante é ${estudante.nome}`);
console.log(`Os 3 primeiros números do CPF são ${estudante.cpf.substring(0,3)}`);
