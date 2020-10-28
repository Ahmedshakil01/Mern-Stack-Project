
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(passport.initialize())
require('./passport')(passport)

app.use('/api/users', require('./routers/userRoute'))
app.use('/api/transactions', require('./routers/transactionRoute'))

app.get('/', (req, res)=>{
    res.json({
        message: 'Welcome to our application'
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
    mongoose.connect('mongodb+srv://diviuser01:shak0177@cluster0.mhlpz.mongodb.net/diviuser01?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

})
mongoose.connect('mongodb+srv://diviuser01:shak0177@cluster0.mhlpz.mongodb.net/diviuser01?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on("connected",function(){
    console.log("connected");
});
mongoose.connection.on("error",function(err){
    console.log("Could not connectc to MongoDB");
})