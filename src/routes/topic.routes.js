const express = require('express')
const router = express.Router();
const topicController = require('../controllers/topic.controllers')

router.get('/', topicController.getAll);

module.exports = router