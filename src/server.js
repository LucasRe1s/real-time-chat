const {httpServer} = require("./http")
const webSocket = require("./webSocket")



httpServer.listen(3000, () => {
    console.log("rodando")
});

