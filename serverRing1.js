var express = require('express');
var app = express()
var axios = require('axios');

app.set('view engine', 'ejs');
app.set('views', './');

app.get('/init', function(req, res) {
    axios.post('http://10.4.17.163:3000/hi', { list: ['server2'] })
        .then(response => {
            res.render('index', { title: 'Express' });
        })
        .catch(error => {
            res.render('index', { title: 'Error' });
        });
});

app.get('/', function(req, res) {
    res.render('index');
})

app.post('/hi', function(req, res, next) {
    console.log(req.body);
    res.send("ok");
});


app.listen(3001, () => console.log(`Example app listening on port $3001!`))