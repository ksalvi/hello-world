'use strict';

const express = require('express');

//Constants
const PORT = 8080;

//App
const app = express();
app.get('/', function (req, res) {
  res.send('Hellllloooooo Universe!!!\nListening on port: '+PORT);

});

app.listen(PORT);

console.log ('Running on http://localhost:'+PORT);
