const express = require('express');

const app = express();

const PORT = 3232;
// creating middleware
const firstlogger = (req, res, next) =>{
    console.log("first middle ware");
    return res.json({msg:"returning form the first middle ware"});
    // 🔴 it create problem  
    next();
}

const secondlogger = (req, res, next) =>{
    console.log("logging second logger");
    next();
}

app.get('/home', firstlogger, secondlogger, (req, res) =>{
    console.log('this is the last middleware');
    res.json({
        message: 'ok',
    })
});

app.listen(PORT, ()=>{
    console.log(`successfully created our middle on ${PORT}`);
})