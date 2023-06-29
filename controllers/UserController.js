const User = require('../models/UserModel')
const db = require('../config/Database')

const getAll = async (req,res) => {
    try {
        const query_data = await db.query("select users.id as id, users.nama as nama, religion.nama as religion, users.alamat as alamat, users.no_hp as no_hp from users inner join religion on religion.id = users.religion_id")
        const data = query_data[0]

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const getOne = async (req,res) => {
    try {
        const {id} = req.params
        const data = await User.findOne({
            where: {
                id: id
            }
        })

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const createData = async (req,res) => {
    try {
        const {nama,religion_id,alamat,no_hp} = req.body
        const data = await User.create({nama,religion_id,alamat,no_hp})

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const updateData = async (req,res) => {
    try {
        const {id} = req.params
        const {nama,religion_id,alamat,no_hp} = req.body
        const data = await User.update({nama,religion_id,alamat,no_hp}, {
            where: {
                id: id
            }
        })

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const deleteData = async (req,res) => {
    try {
        const {id} = req.params

        const data = await User.destroy({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAll,
    getOne,
    createData,
    updateData,
    deleteData
}