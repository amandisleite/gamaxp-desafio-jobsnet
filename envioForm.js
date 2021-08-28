const Form = () => {

        let form = {
            
            nomeCompleto: document.getElementById('inputNome').value,
            cpf: document.getElementById('inputCpf').value,
            dataDia: document.getElementById('dataDia').value,
            dataMes: document.getElementById('dataMes').value,
            dataAno: document.getElementById('dataAno').value,
            estadoCivil: document.getElementById('inputEstadoCivil').value,
            sexo: document.getElementById('inputSexo').value,
            cep: document.getElementById('inputCep').value,
            endereco: document.getElementById('inputEndereco').value,
            numero: document.getElementById('inputNumero').value,
            complemento: document.getElementById('inputComplemento').value,
            bairro: document.getElementById('inputBairro').value,
            cidade: document.getElementById('inputCidade').value,
            telefone: document.getElementById('inputTelefone').value,
            email: document.getElementById('inputEmail').value,
            profissao: document.getElementById('inputProfissao').value,
            cargo: document.getElementById('inputCargo').value,
            veiculo: document.getElementById('inputVeiculo').value,
            cnh: document.getElementById('inputCNH').value,
        };
    
        console.log(form);
        return form

    }
    
    const createCandidate = async (candidato) => {

        try {
            const user = fetch('http://localhost:5000/register', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(Form())
            });
            if (user.status === 200) {
                console.log(Form());
                alert('deu certo')
            }
        } catch (error) {
            alert ('deu errado');
            console.log(Form());
        }

    }

    





