const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/', authMiddleware.verifyToken, taskController.createTask);
router.get('/', authMiddleware.verifyToken, taskController.getTasks);

module.exports = router;
