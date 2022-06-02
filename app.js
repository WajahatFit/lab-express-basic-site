const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',(req, res, next) => {
    res.sendFile(__dirname + '/views/home');
} )

app.get('/about',(req, res, next) => {
    res.sendFile(__dirname + '/views/about');
} )

app.get('/bonus',(req, res, next) => {
    res.sendFile(__dirname + '/views/bonus');
} )

app.get('/work',(req, res, next) => {
    res.sendFile(__dirname + '/views/work');
} )
console.log(__dirname);


app.listen(3000, () => { console.log('Server running on port 3000 🛫') });


