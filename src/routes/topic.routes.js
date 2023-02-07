const express = require('express')
const router = express.Router();
const topicController = require('../controllers/topic.controllers')

router.get('/', topicController.getAll);
router.get('/:id', topicController.get);
router.post('/', topicController.save);
router.patch('/:id', topicController.update);
router.delete('/:id', topicController.delete);

module.exports = router