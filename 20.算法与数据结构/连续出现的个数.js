/**
 *
 * @type {module:readline}
 *
 *
 *给定一个字符串，请你将字符串重新编码，将连续的字符替换成“连续出现的个数+字符”。比如字符串AAAABCCDAA会被编码成4A1B2C1D2A。
 */
var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(data) {
    // 获取输入
    var inputs = data.trim().split(' ');

    // 处理
    var result = deal(data);

    // 输出结果
    console.log(result);
});

/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {

    var result = '';
    var length = inputs.length
    var flag = ''
    var count = 0

    if (inputs.length>0){
        flag = inputs[0]
        count++
    }else
    {
        return "输入有误"
    }

    for (var i = 1 ; i <inputs.length ; i++){
        if (flag == inputs[i]){
            count++
        }else {
            result = result + count + flag
            count=1
            flag= inputs[i]
        }
    }
    result = result + count + flag

    return result;
}
