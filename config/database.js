const mongoose = require('mongoose')

setupDB = ()=>{
    mongoose.connect('mongodb://localhost:27017/url-shortner', {useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
        console.log('connected to DB')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = setupDB