const express = require('express');

const fileController = require('../controllers/api/v1/fileController');
const fileUploadMiddleware = require('../middleware/fileUpload');

const router = express.Router();

router.post('/files/upload', fileUploadMiddleware.single('image'), fileController.upload);
router.get('/files/:imageId', fileController.get);

module.exports = router;
