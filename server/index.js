
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
var socket = require('socket.io');
require('dotenv').config();

var app = express();
app.use(bodyParser.json());

var {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env


app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

const io = socket(
    app.listen(SERVER_PORT, console.log(`Zombies to fight on port ${SERVER_PORT}`)))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log("Database is locked and loaded")
}).catch(err => {
    console.log(err)
})

//app.use(express.static(`__dirname/build`));

io.on("connection", socket => {
    console.log("person connected", socket.userid)
    socket.on("player-join", )
})





//app.listen(SERVER_PORT, console.log(`Zombies to fight on port SERVER_PORT`));