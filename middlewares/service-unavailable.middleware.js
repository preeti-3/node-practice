const movies = require("../db")

async function serviceUnavailable(req, res, next) {
    try {
        const { isAvailable } = req.query
        let result = movies
        if (isAvailable) {
            result = result.filter(item => { return isAvailable === 'true' ? item.isAvailable === true : null })
        }

        const token = req.headers.authorization

        const isAvailableMovies = result.filter(item => item.isAvailable === true)

        if (!token) {
            return res.status(401).json({ message: "You are unauthorized" })
        }
        else if (isAvailableMovies.length === 0) {
            return res.status(503).json({ message: "seats are not available" })
        }
        next()
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "internal server error" })
    }
}

module.exports = serviceUnavailable