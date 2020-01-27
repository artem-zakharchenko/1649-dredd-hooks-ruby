const express = require('express')

const app = express()

app.get('/machines', (req, res) => {
    res.status(200).json({ ok: true })
})

app.post('/machines', (req, res) => {
    res.status(400)
})

app.listen(8000, () => {
    console.log('http://localhost:8000')
})