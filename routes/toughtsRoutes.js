const express = require('express')
const router = express.Router();
const ToughtController = require('../controller/ToughtController')


//*controller for



//*rotas
router.get('/', ToughtController.showtoughts);


module.exports = router;