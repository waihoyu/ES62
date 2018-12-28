


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', {
    name: String
});

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


let peopleSchema = new  mongoose.Schema({
    name:String,
    sex:String,
    age:Number,
    hobby:[String],
    scores:[{subject:String,score:Number}]
})

let People = mongoose.model("People",peopleSchema)

let xiaocheng = new People({
    name : "小红",
    sex:"",
    age:15,
    hobby:[""],
    scores:[{subject: String,score: Number}]
})
