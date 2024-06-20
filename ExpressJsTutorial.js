// const jsonString='{"name":"John", "age":30, "city":"New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

// const objectToConvert={"name":"John", "age":30, "city":"New York"};

// const json=JSON.stringify(objectToConvert);
// console.log(json);

const express = require('express');
const app = express(); // express ka complete map ab app me stored h

const db = require('./db') // look in db.js u will find why we did this





const bodyParser=require('body-parser') // parses information and extract info from various forms
app.use(bodyParser.json()) // parse all json format in body tag and convert into object for use

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get("/om", (req,res)=>{
    var om={
        name:'om',
        height:'180cm',
    }
    res.send(om);
});

// import router file

const personRoutes = require('./routes/personRoutes');

// using router

app.use('/person', personRoutes)

// import menu router

const menuRoutes = require('./routes/menuRoutes');

// using menu router

app.use('/menu', menuRoutes);

// added a comment for testing

app.listen(3000,()=>{
    console.log('server is listening on port 3000');
}); // port number jispe request sunega ye