// this file is used for estanblishing connection between nodejs and mongodb
const mongoose = require('mongoose');

// define mongodb url

const mongoURL = 'mongodb://localhost:27017/mydb' // any database name

// setup mongodb connection

mongoose.connect(mongoURL,{
    useNewURLParser: true,
    useUnifiedTopology:true
})

// connection has not established yet it will be established once create object

// get defaukt connection
// Mongoose maintains a default connection object representing the mongodb connection
const db=mongoose.connection;

// define event listeners for database connections

db.on('connected',()=>{
    console.log("Connected to mongodb server.")
})
db.on('error',(err)=>{
    console.log("mongodb connection error: ", err)
})
db.on('disconnected',()=>{
    console.log("mongodb disconnected")
})

// export database connection
module.exports=db;