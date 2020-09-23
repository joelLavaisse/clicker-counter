const express = require('express');
var path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/:folder/:file', (req, res) => {
  res.sendFile(path.join(__dirname + `/${req.params.folder}/${req.params.file}`));
})

app.get('(/index.html|/)', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/sw.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/sw.js'));
})

app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname + '/manifest.json'));
})

app.listen(port, () => {
  console.log(`App is running at port ${port}`)
});