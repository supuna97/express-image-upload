const express = require('express');

const fileController = require('../controllers/api/v1/fileController');
const fileUploadMiddleware = require('../middleware/fileUpload');

const router = express.Router();

router.post('/files', fileUploadMiddleware.single('filename'), fileController.post);
router.get('/files', fileController.get);

module.exports = router;
