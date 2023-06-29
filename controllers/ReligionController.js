const Religion = require('../models/ReligionModel')

const getAll = async (req,res) => {
    try {
        const data = await Religion.findAll()

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const getOne = async (req,res) => {
    try {
        const {id} = req.params
        const data = await Religion.findOne({
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
        const {nama} = req.body
        const data = await Religion.create({nama})

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const updateData = async (req,res) => {
    try {
        const {id} = req.params
        const {nama} = req.body
        const data = await Religion.update({nama}, {
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

        const data = await Religion.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json(data)
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