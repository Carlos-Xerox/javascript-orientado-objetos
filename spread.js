const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312313332',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['5511999998888', '551999202939'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto43'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: ''
    }]
}

function exibirTelefones(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);