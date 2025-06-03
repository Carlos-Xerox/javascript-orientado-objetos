const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312313332',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['5511999998888', '551999202939'],
    // enderecos: [{
    //     rua: 'Rua Joseph Climber',
    //     numero: '45',
    //     complemento: 'apto43'
    // },
    // {
    //     rua: 'Rua Dona Clotilde',
    //     numero: '71',
    //     complemento: null
    // }]
}

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
    console.error('É necessário ter um endereço cadastrado');
}