

function Elem(id) {
    this.elem = document.getElementById(id)
}


Elem.prototype.html = function (val){
    let elem = this.elem
    if (val){
        elem.innerHTML = val
        return this
    } else
    {
        return elem.innerHTML
    }
}

Elem.prototype.on=function (type,fn){
    let elem = this.elem
    elem.addeventlistener(type,fn)
}


let div1 = new Elem('div1')

console.log(div1.html());

