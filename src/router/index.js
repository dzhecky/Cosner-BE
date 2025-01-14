const express = require('express')
const cosplays = require('./cosplayers')
const router = express.Router()

router.use('/cosplay', cosplays)

module.exports = router;