const express = require('express')
const fs = require('fs');
const app = express()
const path = require('path')
const port = 3000

var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
app.get('/apple-app-site-association', function(req, res, next) {
     res.set('Content-Type', 'application/json');
     res.status(200).send(aasa);
});

app.listen(process.env.PORT ||port, () => {
  console.log(`Example app listensing at  shttp://localhost:${port}`)
})