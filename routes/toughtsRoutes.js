const express = require('express')
const router = express.router();
const ToughtController = require('../controller/ToughtController')
//*controller for



//*rotas
router.get('/', ToughtController.showAll);


module.exports = router;