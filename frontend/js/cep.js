'use strict';

const cleanForm = (endereco) => {
    document.getElementById('inputEndereco').value = '';
    document.getElementById('inputBairro').value = '';
    document.getElementById('inputCidade').value = '';
}

const fillForm = (endereco) => {
    document.getElementById('inputEndereco').value = endereco.logradouro;
    document.getElementById('inputBairro').value = endereco.bairro;
    document.getElementById('inputCidade').value = endereco.localidade;
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {

    cleanForm();
    document.getElementById('errorCep').style.display = 'none';

    const cep = document.getElementById('inputCep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)) {
        const dados = await fetch(url)
        const endereco = await dados.json();
    
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('errorCep').style.display = 'block';
        } else {
            fillForm(endereco);

        }
    } else {
        document.getElementById('errorCep').style.display = 'block';
    };  
}

document.getElementById('inputCep').addEventListener('focusout', pesquisarCep);