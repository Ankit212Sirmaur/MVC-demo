const express = require('express');

const PORT = 3232;
const app = express();


// middleware is just a function who have the access of req, res and next middleware
const mylooger = (req, res, next) =>{
    console.log("logging from middleware");
    return res.send('u cant send any response in middle of opearations of middleware');
    /**
     * it give a errror ❌❌ 
     * at the same when it is started preparing to send something the next middleware is called 
     * if u want to send any thing in middle of then have to return it
     */ 
    // ✅✅ return res.send('return from this operation not go further');
    next();
}

const extlogger = (req, res, next) =>{
    console.log('this is another midddle ware');
    next();
}

const middleware = [mylooger, extlogger];
app.get('/home',middleware  , (req, res) =>{
    console.log('last middleware is controller ');  // send the req to backend logic like moduel
    res.send('this is home page');
    /**
     * it also prepare json object which is received from the backend
     */
})

app.listen(PORT, function fun(){
    console.log('server is now runnign on port : ', PORT);
})