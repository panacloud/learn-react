var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');

var app = express(); //creating express app
app.set('port', (process.env.PORT || 3000)); // setting up port to listen
app.use(bodyParser.json()); //parsing body to json

var names = []; //for now we are setting up a local variable for keeping data, in real application we will have a database such as mongodb

app.post("/name", (req, res, next) => {
    console.log("body: ", req.body);
    names.push(req.body.name);
    res.send("name inserted success");
});

app.get("/names", (req, res, next) => {
    res.send(names);
});

app.use(express.static(path.resolve(__dirname + "/build"))); //setting up static folder

app.listen(app.get('port'), () => {
    console.log('listening at: ' + app.get('port'))
});