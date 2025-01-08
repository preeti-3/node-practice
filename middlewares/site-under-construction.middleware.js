async function siteUnderConstruction(req, res, next) {
    try {
        
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({ message: "You are unauthorized" })
        }
            next()
    } catch (error) {
        console.error("internal server error ", error)
        return res.status(500).json({ error: "internal server error" })
    }
}

module.exports = siteUnderConstruction