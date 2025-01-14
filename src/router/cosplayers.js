const express = require('express')
const {getCosplayers} = require('../controller/cosplayers')
const router = express.Router()


router.get('/', getCosplayers)

module.exports = router;