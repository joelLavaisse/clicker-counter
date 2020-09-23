const express = require('express');
var path = require('path');

const app = express();

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

app.listen(5000, () => {
  console.log('Node.js web server at port 5000 is running..')
});