var express = require('express');
var fs = require('fs');
var app = express();

app.configure(function() {
  app.use(express.static(__dirname));
});

app.listen(41113);