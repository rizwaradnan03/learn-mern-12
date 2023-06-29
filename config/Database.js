const {Sequelize} = require('sequelize')

const db = new Sequelize('hkbogsqs','hkbogsqs','74Uqf-wlyXfH-c-iKbTDjCxIdcOY0CcE',{
    host: 'tiny.db.elephantsql.com',
    dialect: 'postgres'
})

module.exports = db;