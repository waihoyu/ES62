

console.log(b)
 var b=9



function fn() {
    console.log("test is running")
    // console.log(age)
    age = 20
    // console.log(typeof  age)
    // console.log(this === window);
}

fn()

var fn3 = function (name) {
    console.log('fn3' + name)
    console.log(this);
}

fn3.bind({y:300})

fn3(1)

