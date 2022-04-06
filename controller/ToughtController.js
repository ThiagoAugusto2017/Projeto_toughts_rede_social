const Tought = require('../models/tought');
const User = require('../models/User');

module.exports = class ToughtController {
        static async showtoughts(req, res, next) {
            res.render('toughts/home')
        }


        static async dashboard(req, res, next) {
            res.render('toughts/dashboard')
        }
        static async createpensamentos(req, res, next) {
            res.render('toughts/create')

        }
        static async createpensamentos_save(req, res, next) {
            const pensamento = {
                title: req.body.title,
                userId: req.session.
            }

        }
        //! estamos aqui nesta parte cadastranso o pensamento e
        //! temos que validar os dados antes do pensamento