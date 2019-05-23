var express = require('express');
var app = express()
var axios = require('axios');

app.set('view engine', 'ejs');
app.set('views', './');

app.get('/init', function(req, res) {
    axios.post('http://localhost:3001/hi', { list: ['server1'] })
        .then(response => {
            res.send('ok');
        })
        .catch(error => {
            res.send('error');
        });
});

app.get('/', function(req, res) {
    res.render('index');
})

app.post('/hi', function(req, res, next) {
    console.log(req.body);
    res.send("ok");
});


app.listen(3000, () => console.log(`Example app listening on port $3000!`))