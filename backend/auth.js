exports.auth = (req, res, next) => {
    const { secure } = req.cookies
    if (secure) {
        next()
    } else res.send(404)
}