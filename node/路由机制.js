

let http = require('http')

let fs = require('fs')

let server = http.createServer((request, response)=>{

    if (request.url == "/"){
        response.setHeader('Content-Type','text/html;charset=UTF-8')
        response.end("首页")
    }else if (request.url == "/music"){
        response.end("音乐")
    } else{
        response.end("对不起，没有这个页面")
    }

    // fs.readFile("./test.txt",function (err,filecontent) {
    //     response.setHeader("Content-Type","text/html;charset=UTF-8")
    //     response.end(filecontent)
    // })

})

server.listen(4000)

console.log("服务器已经启动了")
