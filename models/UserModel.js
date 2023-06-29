const db = require('../config/Database')
const {Sequelize} = require('sequelize')
const Religion = require('./ReligionModel')

const {DataTypes} = require('sequelize')

const User = db.define('user',{
    nama: {
        type: DataTypes.STRING
    },
    religion_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Religion,
            key: 'id'
        }
    },
    alamat: {
        type: DataTypes.STRING
    },
    no_hp: {
        type: DataTypes.STRING
    }
})

User.belongsTo(Religion, {foreignKey: 'religion_id'})

module.exports = User;

(async () => {
    await db.sync()
    console.log('Success Migrate')
})()