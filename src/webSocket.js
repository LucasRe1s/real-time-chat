const {io} = require("./http");

io.on("connection", ( socket)=> {
    console.log("", socket.id)

    socket.on("disconnect", () => {
        console.log("x desconectou " + socket.id);

    });

    socket.on("msg", (data)=>{
        io.emit("showmsg", data)
        console.log(data)
        
    });
});