

let http = require('http')

let fs = require('fs')

let server = http.createServer(function (request,response) {
    fs.readFile('./test.txt',function (err,filecontent) {
        response.setHeader('Content-Type','text/html;charset=UTF-8')
        response.end(filecontent)
    })
})

server.listen(3000)

console.log("服务器已经运行在3000端口")
