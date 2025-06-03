const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312313332',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['5511999998888', '551999202939'],
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto43'
    }]
}

estudante.endereco.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: ''
})

// console.log(estudante.endereco);
// console.log(estudante.endereco[0]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);
