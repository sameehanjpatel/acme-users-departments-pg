const express = require("express")
const app = express();
const db = require('./db.js')
const PORT = 3000

app.get('/users', (req, res, next) => {
    ourDB.findAll()
    .then(users => {
        res.send(users)
    }).catch(next)
})


app.get('/departments', (req, res, next) => {
    ourDB.findAll()
        .then(departments => {
            res.send(departments)
        }).catch(next)
})


app.listen(PORT, ()=>{console.log("YASSSSS")})