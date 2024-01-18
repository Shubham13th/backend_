require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('SharmaTheGreat')
})

app.get('/login' , (req, res) => {
    res.send('<h1>Jay Shree Ram Jay Shree Ram</h2?')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})