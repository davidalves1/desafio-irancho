const express = require('express')
const peopleController = require('../controllers/people.controller')

const router = express.Router()

router.get('/', peopleController.index)
router.post('/', peopleController.validate('store'), peopleController.store)

module.exports = router

