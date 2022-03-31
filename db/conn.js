const {
    Sequelize
} = require('sequelize'); // puxamos a importação  do banco de dados

const sequelize = new Sequelize("toughts", "root", '', { // criação  do banco de dados
    host: "localhost",
    dialect: "mysql"
})

try { // autencirção de coneção caso tenha erro pegamos no catch
    sequelize.authenticate()
    console.log("Authenticated  sucess")

} catch (err) {
    console.log("nao foi possivel Authenticated" + err.message)
}

module.exports = sequelize

