const express = require("express");
const app = express();
const port = 8080;
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());

app.get('/', function(req, res){
  res.send('Loading');
  });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
