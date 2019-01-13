function  formatDate(dt) {
    if (!dt){
        dt = new Date()
    }
    var year  = dt.getFullYear()
    var month = dt.getMonth() + 1
    var day = dt.getDate()
    if (month < 10){
        month = '0'+ month
    }
    return year + '-' + month + '-' + day
}

var dt =  formatDate(new Date())

console.log(dt);
