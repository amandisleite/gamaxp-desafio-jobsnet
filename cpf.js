console.log('javascript carregado')

function validaCPF(cpf) {

    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9); // pegou os 9 primeiros caracteres
        var digitos = cpf.substring(9); // pega os digitos finais

        var soma = 0;
        for (var i = 10; i > 1; i--) { // diminui nos números, vai pra baixo
            soma += numeros.charAt(10 - i) * i; // charAt busca as posições até encontrar o que tá procurando
            //Primeiramente multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 e soma os resultados.
            // a soma dada é essa da frase de cima
        }
            var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            // pega o resto da divisão da soma por 11; tem que ser menor que 2
            // pergunta se é verdadedeira a condição e atribui 0 se isso concretiza
            // senão for verdade, vai pra operação 11 - (soma % 11)

            // validação do primeiro dígito
            if (resultado != digitos.charAt(0)) { //se o resultado for diferente do primeiro digito (o da posição 0)
                return false;
            }

            soma = 0;
            numeros = cpf.substring(0, 10);

            for (var k = 11; k > 1; k--) {
                soma += numeros.charAt(11 - k) * k;
            }

            resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

            // validação do segundo dígito
            if (resultado != digitos.charAt(1)) {
                return false;
            }

        return true;
    }
}

function validacao() {
    console.log('iniciando validação')
    document.getElementById('error').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    

    let cpf = document.getElementById('inputCpf').value;

    var resultadoValidacao = validaCPF(cpf);
    console.log(cpf);

    if (resultadoValidacao) { // vai verificar se o resultado é verdadeiro
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}

document.getElementById('inputCpf').addEventListener('focusout', validacao);