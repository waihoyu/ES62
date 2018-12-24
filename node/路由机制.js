

let http = require('http')
let fs = require('fs')
let querystring = require('querystring')
let path = require('path')
let server = http.createServer((request, response)=>{
    console.log(request.url);
    response.setHeader('Content-Type','text/html;charset=UTF-8')
    if (request.url == "/"){

        response.end("首页")
    }
    else if (request.url == "/music"){
        response.end("音乐")
    }
    else if (/^\/student\/[\d]{6}$/.test(request.url)){
        response.setHeader('Content-Type','text/html;charset=UTF-8')
        let reg = /\/student\/([\d]{6})/
        let xuehao = reg.exec(request.url)[1]
        fs.readFile("./db.json",function (err,data) {
            if (err){
                response.end("文件读取失败")
                return
            }
            let dataObj = JSON.parse(data.toString())
            response.end("<h1>学生信息，学号：" + dataObj[xuehao]['xiaoming'] + "</h1>")
        })

    }
    else{
        response.end("对不起，没有这个页面")
    }

})

server.listen(4000)

console.log("服务器已经启动了")



