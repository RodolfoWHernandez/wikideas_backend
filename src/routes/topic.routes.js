const express = require('express')
const router = express.Router();
const topicController = require('../controllers/topic.controllers')

router.get('/', topicController.getAll);
router.post('/', topicController.save);

module.exports = router