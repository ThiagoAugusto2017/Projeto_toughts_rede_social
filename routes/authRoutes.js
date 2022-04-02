const express = require('express')
const router = express.Router();
const AuthController = require('../controller/authController')


//*controller for



//*rotas
//puxamos a view e depois pegamos o controller ea função dela
router.get('/login', AuthController.login);
router.get('/register', AuthController.register);
router.post('/register', AuthController.registerpost); // metodo de registro de dados no banco


module.exports = router;