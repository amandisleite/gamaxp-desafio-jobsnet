function Candidate(event) {
    
    const createCandidate = async (candidato) => {
        
         let   nomeCompleto = document.getElementById('inputNome').value;
         let   cpf = document.getElementById('inputCpf').value;
         let   dataDia = document.getElementById('dataDia').value;
         let   dataMes = document.getElementById('dataMes').value;
         let   dataAno = document.getElementById('dataAno').value;
         let   estadoCivil = document.getElementById('inputEstadoCivil').value;
         let   sexo = document.getElementById('inputSexo').value;
         let   cep = document.getElementById('inputCep').value;
         let   endereco = document.getElementById('inputEndereco').value;
         let   numero = document.getElementById('inputNumero').value;
         let   complemento = document.getElementById('inputComplemento').value;
         let   bairro = document.getElementById('inputBairro').value;
         let   cidade = document.getElementById('inputCidade').value;
         let   telefone = document.getElementById('inputTelefone').value;
         let   email = document.getElementById('inputEmail').value;
         let   profissao = document.getElementById('inputProfissao').value;
         let   cargo = document.getElementById('inputCargo').value;
         let   veiculo = document.getElementById('inputVeiculo').value;
         let   cnh = document.getElementById('inputCNH').value;



        let form = {
            
            nomeCompleto: `${nomeCompleto}`,
            cpf: `${cpf}`,
            dataDia: `${dataDia}`,
            dataMes: `${dataMes}`,
            dataAno: `${dataAno}`,
            estadoCivil: `${estadoCivil}`,
            sexo: `${sexo}`,
            cep: `${cep}`,
            endereco: `${endereco}`,
            numero: `${numero}`,
            complemento: `${complemento}`,
            bairro: `${bairro}`,
            cidade: `${cidade}`,
            telefone: `${telefone}`,
            email: `${email}`,
            profissao: `${profissao}`,
            cargo: `${cargo}`,
            veiculo: `${veiculo}`,
            cnh: `${cnh}`

        };
    
        console.log(form);
    
        try {
            const user = fetch('http://localhost:5000/register', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(form)
            });
            if (user.status === 200) {
                console.log(form);
                alert('deu certo')
            }
        } catch (error) {
            alert ('deu errado');
            console.log(form);
        }
    }

}

// document.getElementById('submit').addEventListener('click', Candidate);



