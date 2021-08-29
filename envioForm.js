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
      
    const user = await fetch('http://localhost:5000/register', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
              },
              body: JSON.stringify(Form())
          });
          if (user.status == 200) {
              console.log(Form())
              alert('deu certo');
          } if (user.status == 500) {
              alert ('já temos seus dados'); 
          }
        
}

function checkForm() {
    let nomeCompleto = document.getElementById('inputNome').value;
    let cpf = document.getElementById('inputCpf').value;
    let dataDia = document.getElementById('dataDia').value;
    let dataMes = document.getElementById('dataMes').value;
    let dataAno = document.getElementById('dataAno').value;
    let estadoCivil = document.getElementById('inputEstadoCivil').value;
    let sexo = document.getElementById('inputSexo').value;
    let cep = document.getElementById('inputCep').value;
    let endereco = document.getElementById('inputEndereco').value;
    let numero = document.getElementById('inputNumero').value;
    let complemento = document.getElementById('inputComplemento').value;
    let bairro = document.getElementById('inputBairro').value;
    let cidade = document.getElementById('inputCidade').value;
    let telefone = document.getElementById('inputTelefone').value;
    let email = document.getElementById('inputEmail').value;
    let profissao = document.getElementById('inputProfissao').value;
    let cargo = document.getElementById('inputCargo').value;
    let veiculo = document.getElementById('inputVeiculo').value;
    let cnh = document.getElementById('inputCNH').value;

    if (nomeCompleto == '' || cpf == '' || dataDia == '' || dataMes == '' || dataAno == ''
    || cep == '' || endereco == '' || numero == '' || bairro == '' || cidade == ''
    || telefone == '' || email == false || profissao == '' || cargo == '') {
        alert('preencha os campos novamente');
    } else {
        document.getElementById('enviar').addEventListener('focusout', createCandidate);

        createCandidate();
        alert('verificando cadastro...');
    }
}
