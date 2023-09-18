const express = require("express");
const http = require("http")
const  {Server} = require("socket.io");

const router = require('./routes/router');
const app = express()



const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.use(router);



app.get("/", (req, res) => {
    res.render("index")
})



module.exports = {
    httpServer, io
}