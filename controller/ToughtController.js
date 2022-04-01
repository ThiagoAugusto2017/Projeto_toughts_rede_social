const Tought = require('../models/tought');
const User = require('../models/user');

module.exports = class ToughtController {
    static async showAll(req, res, next) {
        res.render('tou')
    }
}