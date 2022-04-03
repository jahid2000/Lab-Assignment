const express = require('express');
const mongoose = require('mongoose');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const app = express();
const PORT = 3000;
const url = 'mongodb://127.0.0.1:27017/assignment2';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

app.get('/', (req, res) => {
    res.send(`<h2> This is home page</h2> </br> </br>  <h3> Name : MD Jahidul Islam </br> Id : 1910176119/h3>`);
});
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


app.listen(PORT, () => {
    console.log(`Server is running..... at http:/localhost/${PORT}`);
});
