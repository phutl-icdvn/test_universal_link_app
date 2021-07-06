const express = require('express')
const fs = require('fs');
const app = express()
const path = require('path')
const port = 3000

var aasa = fs.readFileSync(__dirname + '/.well-known/apple-app-site-association');
app.get('/.well-known/apple-app-site-association', function(req, res, next) {
     res.set('Content-Type', 'application/pkcs7-mime');
     res.status(200).send(aasa);
});

app.get('/',function(req, res, next){
  res.status(200).send("Hello world");
})

app.listen(process.env.PORT ||port, () => {
  console.log(`Example app listensing at  shttp://localhost:${port}`)
})