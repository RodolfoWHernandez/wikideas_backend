const express = require('express')
const router = express.Router();
const categoryController = require('../controllers/category.controller')

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.get);
router.post('/', categoryController.save);
router.patch('/:id', categoryController.update);
router.delete('/:id', categoryController.delete);

module.exports = router