//定义用于存储XMLHttpRequest对象的变量
var xmlHttp = null;

//创建XMLHttpRequest对象
function creatXMLHTTP()
{
    //判断浏览器是否支持ActiveX控件
    if(window.ActiveXObject)
    {
        //将所有可能出现的ActiveXObject版本都放在一个数组中
        var arrXmlHttpTypes = ['Microsoft.XMLHTTP','MSXML2.XMLHTTP.6.0',,'MSXML2.XMLHTTP.5.0','MSXML2.XMLHTTP.4.0','MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP'];
        //通过循环创建XMLHttpRequest对象
        for(var i=0;i<arrXmlHttpTypes.length;i++)
        {
            try
            {
                //创建XMLHttpRequest对象
                xmlHttp = new ActiveXObject(arrXmlHttpTypes[i]);
                //如果创建XMLHttpRequest对象成功，则跳出循环
                break;
            }
            catch(ex)
            {
            }
        }
    }
    //判断浏览器是否将XMLHttpRequest作为本地对象实现
    else if(window.XMLHttpRequest)
    {
        xmlHttp = new XMLHttpRequest();
    }
}

//响应XMLHttpRequest对象状态变化的函数
function httpStateChange()
{
    // alert("xmlHttp.readyState=" + xmlHttp.readyState);
    if (xmlHttp.readyState==4)
    {
        if (xmlHttp.status==200 || xmlHttp.status==0)
        {
            switch (0) {
                case 0:
                    var node = document.getElementById("xlContainer");
                    //node.innerHTML = xmlHttp.responseText;
                    console.log(xmlHttp.responseText)
                    break;
                case 1:
                    alertWin(" 线路信息：", xmlHttp.responseText, 400, 330);
                    break;
            }

        }
    }
}

//发送http请求
function sendHttpReq(url)
{
    //创建XMLHttpRequest对象
    creatXMLHTTP();

    if (xmlHttp!=null)
    {
        //创建响应XMLHttpRequest对象状态变化的函数
        xmlHttp.onreadystatechange = httpStateChange;
        //创建HTTP请求
        xmlHttp.open("post",url);
        for(var i = 0; i< 100; i++){
            console.log("test1")
        }
        //发送HTTP请求
        xmlHttp.send(null);
        for(var i = 0; i< 100; i++){
            console.log("test2")
        }
    }
    else
    {
        alert("您的浏览器不支持XMLHTTP，请更换浏览器后再进行注册。");
    }
}

/*************************************************
 Function:        SavePatrol
 Description:    发送http请求
 Input:            无
 Output:            无
 return:            无
 *************************************************/
function SavePatrol() {

    var url = "http://www.baidu.com";
    sendHttpReq(url);

}
SavePatrol()

for(var i = 0; i< 100; i++){
    console.log(i)
}






