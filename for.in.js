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

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
    }
}