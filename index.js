const express = require('express')
const fs = require('fs');
const app = express()
const path = require('path')
const port = 3000

var appleAppSiteAssociationContents = fs.readFileSync(path.resolve(__dirname, './apple-app-site-association'), 'utf8');

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.sendFile(path.resolve(__dirname, './apple-app-site-association'));
})

app.listen(process.env.PORT ||port, () => {
  console.log(`Example app listening at  shttp://localhost:${port}`)
})