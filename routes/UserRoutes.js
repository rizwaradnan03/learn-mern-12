const express = require('express')
const {
    getAll,
    getOne,
    createData,
    updateData,
    deleteData,
} = require('../controllers/UserController')

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', createData)
router.patch('/:id', updateData)
router.delete('/:id', deleteData)

module.exports = router;