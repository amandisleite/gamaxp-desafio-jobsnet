const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { dataDia, dataMes, dataAno, estadoCivil, nomeCompleto, cep, cpf, sexo, endereco, numero, complemento, bairro, cidade, telefone, email, cargo, profissao, cnh, veiculo } = req.body;

        const newCandidate = new Candidate();

        newCandidate.dataDia = dataDia;
        newCandidate.dataMes = dataMes;
        newCandidate.dataAno = dataAno;
        newCandidate.nomeCompleto = nomeCompleto;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.cep = cep;
        newCandidate.cpf = cpf;
        newCandidate.sexo = sexo;
        newCandidate.endereco = endereco;
        newCandidate.numero = numero;
        newCandidate.complemento = complemento;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.telefone = telefone;
        newCandidate.email = email;
        newCandidate.profissao = profissao;
        newCandidate.cargo = cargo;
        newCandidate.veiculo = veiculo;
        newCandidate.cnh = cnh;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('vishe deu errinho');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};