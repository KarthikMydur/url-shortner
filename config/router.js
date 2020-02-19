const express = require('express')
const router = express()

const urlController = require('../app/controllers/urlController')

router.get('/urls', urlController.list)
router.post('/urls', urlController.create)
router.get('/urls/:id', urlController.show)
router.delete('/urls/:id', urlController.destroy)
router.put('/urls/:id', urlController.update)
module.exports = router