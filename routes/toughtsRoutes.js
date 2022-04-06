const express = require('express')
const router = express.Router();
const ToughtController = require('../controller/ToughtController')

//* Importando os dados de helpers

const helpers_session = require('../helpers/helpers').helpers_session // posso usar a função com o mesmo nome da importação


//*controller for



//*rotas
router.get('/', ToughtController.showtoughts);
router.get('/dashboard', helpers_session, ToughtController.dashboard);
router.get('/add', helpers_session, ToughtController.createpensamentos);
router.post('/add', helpers_session, ToughtController.createpensamentos_save);

module.exports = router;