const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nomeCompleto: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    dataDia: { type: String, unique: false, required: false },
    dataMes: { type: String, unique: false, required: false },
    dataAno: { type: String, unique: false, required: false },
    estadoCivil: { type: String, unique: false, required: false },
    sexo: { type: String, unique: false, required: false },
    cep: { type: String, unique: false, required: true },
    endereco: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    complemento: { type: String, unique: false, required: false },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    telefone: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    profissao: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    veiculo: { type: String, unique: false, required: false },
    cnh: { type: String, unique: false, required: false }
}, {
    timestamps: true
    });

module.exports = mongoose.model('Candidate', CandidateSchema);