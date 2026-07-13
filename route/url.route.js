const express = require('express')
const urlController = require('../controllers/url.controller');
const router = express.Router()
router.post('/api/shorten', urlController.addLongUrl )

router.get('/:alias' ,urlController.getShortUrl )

module.exports = router;