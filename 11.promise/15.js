function ajax(url,fnWin,fnFaild){
//创建Ajax对象
//兼容
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject(“Microsoft.XMLHTTP”);
//建立连接
    xhr.open(“GET”,url,true);
//发送请求
    xhr.send();
//接收数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                if(typeof fnWin == “function”){
                    fnWin(encodeURIComponent(xhr.responseText));
                }
            }
            else{
                if(typeof fnFaild == “function”){
                    fnFaild();
                }
            }
        }
    }
}
