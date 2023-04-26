const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes/route')
const {default : mongoose} = require('mongoose')
const app = express()

app.use(bodyParser.json())   //learn about them 
app.use(bodyParser.urlencoded({extended:true})) //learn about this too

mongoose.connect("mongodb+srv://rahul4317:L0Jf8dKS6E1sKl1C@cluster0.dwi1fgs.mongodb.net/Rahul4317" , {
    useNewUrlParser : true
})
.then(()=>console.log("MongoDB is connected"))
.catch((err)=>console.log(err))



app.use('/',route)


app.listen(process.env.PORT || 3000 , function () {
    console.log(`The server is running on port ${process.env.PORT || 3000}`)
})