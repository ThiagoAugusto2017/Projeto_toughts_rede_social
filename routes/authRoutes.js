const express = require('express')
const router = express.Router();
const AuthController = require('../controller/authController')


//*controller for



//*rotas
//puxamos a view e depois pegamos o controller ea função dela
router.get('/login', AuthController.login);
router.post('/login', AuthController.loginpost);
router.get('/register', AuthController.register);
router.post('/register', AuthController.registerpost); // metodo de registro de dados no banco
router.get('/logout', AuthController.logout); //saida do sistema

module.exports = router;