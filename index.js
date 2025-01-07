const express = require('express')
const db = require('./db')
const app = express()

app.get('/movies', (req, res) => {
    try {
        const { skip = 0, limit = 150, search, language, actor, category } = req.query
        const skipInt = parseInt(skip)
        const limitInt = parseInt(limit)

        let result = db.slice(skipInt, skipInt + limitInt)
        if (search) {
            result = result.filter(item =>
                Object.values(item)
                    .filter(value => typeof value === "string")
                    .some(value => value.toLowerCase().includes(search.toLowerCase()))
            );
        }

        if (language) {
            result = result.filter(item => item.language.toLowerCase().includes(language.toLowerCase())
            );
        }

        if (category) {
            result = result.filter(item => item.category.toLowerCase().includes(category.toLowerCase())
            );
        }
        if (actor) {
            result = result.filter(item => item.actor.toLowerCase().includes(actor.toLowerCase())
            );
        }

        return res.status(200).json({ data: result })
    } catch (error) {
        return res.status(500).json({ error: "internal server error" })
    }
})


app.listen(3001, () => {
    console.log("server is running on port 3001")
})