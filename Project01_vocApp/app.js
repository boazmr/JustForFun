const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})

app.get('/login', async (req, res) => {
    res.sendFile( __dirname + '/login.html')
})
app.post('/login', (req, res) => {
    const {username, password} = req.body
    console.log(username)
    res.redirect('/')
})

app.all('*', (req, res) => {
    console.log("error page")
    res.send("page not found")
})


app.listen(port)
console.log("APP IS RUNNING")