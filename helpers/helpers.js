module.exports.helpers_session = (req, res, next) => {

    const userId = req.session.userid

    if (!userId) {
        res.redirect('/login')
    }

    next()

}