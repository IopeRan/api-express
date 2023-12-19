const logRequest = (req, res, next) => {
    console.log('Terjadi Request ke Path: ', req.path)
    next()
}

module.exports = logRequest