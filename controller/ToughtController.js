const Tought = require('../models/tought');
const User = require('../models/User');

module.exports = class ToughtController {
    static async showtoughts(req, res, next) {
        res.render('toughts/home')
    }
}