const {
    DataTypes
} = require('sequelize') // conexão modelo de configuração com o banco de dados e planilhas

const db = require('../db/conn') // conexao com o banco de dados

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        require: true
    },
    email: {
        type: DataTypes.STRING,
        require: true
    },
    senha: {
        type: DataTypes.STRING,
        require: true
    }
})



module.exports = User;

// Este e um banco de dados para login de usuario, todos os banco de dados precisa de um models