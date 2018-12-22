
let  http = require('http')

let server = http.createServer((request, response,)=>{
    console.log(request.connection.address());
    response.end("123")
})

server.listen(3000)
