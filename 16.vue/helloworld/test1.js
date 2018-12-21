

let obj = {}

console.log(Object.__proto__.__proto__.__proto__);


function  fn1(){

    console.log("fn1");
    fn2()
    function  fn2(){
        console.log("fn2");
    }

}

fn1()
// fn2()
