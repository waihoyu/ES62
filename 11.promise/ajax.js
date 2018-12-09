function success(){
    console.log("成功");
}

function fail(){
    console.log("失败");
}

let request = new XMLHttpRequest()

request.onreadystatechange = function () {
    if (request.readyState === 4){
        if (request.status === 2000){
            return success()
        }else {
            return fail()
        }
    }else{

    }
}

request.open('GET','')

request.send()
