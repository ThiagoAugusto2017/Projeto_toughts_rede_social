const {
    DataTypes
} = require('sequelize') // conexão modelo de configuração com o banco de dados e planilhas
const db = require('../db/conn') // conexao com o banco de dados


//* puxar o usuario
const User = require('./User')


// Tought => Nome de banco de dados
//
const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false, // nao aceito campos nulo
        require: true,
    }
})
//* relacionamento das tabelas
// relacionamento de tabelas
Tought.belongsTo(User); //aqui dizemos  que um pensamento pertence a um usuario// 1 para 1
User.hasMany(Tought) //aqui dizemos que uma pessoa tem varios pensamento //1 para muitos


module.exports = Tought // expostamos a configuração