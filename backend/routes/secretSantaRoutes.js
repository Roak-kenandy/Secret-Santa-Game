const express = require('express');
const multer = require('multer');
const { assignSecretSanta } = require('../controllers/secretSantaController');

const router = express.Router();
const upload = multer({ dest: 'uploads/'});

router.post('/assignments', upload.fields([
{
    name: 'employees'
},
{
    name: 'previous'
}
]), assignSecretSanta);

module.exports = router;