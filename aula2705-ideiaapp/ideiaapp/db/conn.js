const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('ideias_db', 'leonardopauli', '02052007Pauli', {
    host: 'dadosappideiaspauli.mysql.database.azure.com',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Connectado ao servidor Azure MySQL!')
}catch(error){
    console.error(`Error MySQL: ${error}`)
}

module.exports = sequelize