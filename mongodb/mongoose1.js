


const mongoose1 = require('mongoose');
mongoose1.connect('mongodb://localhost:27017/student', {useNewUrlParser: true});

const Cat = mongoose1.model('Cat', {
    name: String
});

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


let peopleSchema = new  mongoose1.Schema({
    name:String,
    sex:String,
    age:Number,
    hobby:[String],
    scores:[{subject:String,score:Number}]
})

let People = mongoose1.model("People",peopleSchema)

let xiaocheng = new People({
    name : "小红",
    sex:"",
    age:15,
    hobby:[""],
    scores:[{subject: String,score: Number}]
})
