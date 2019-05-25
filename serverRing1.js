var express = require('express');
var app = express()
var axios = require('axios');
var leadearElection = true;
var isLeader = false;
var idServer = 7;

bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './');


app.get('/init', function(req, res) {
    axios.post('http://localhost:3000/hi', { list: ['server2'] })
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

app.get('/selectLeader', function(req, res) {
    if (idServer < req.data) {

    } else {

    }

    axios.post('http:localhost:3001/selectLeader', { list: [idServer] })
        .then(response => {
            console.log('Election in progress');
        })
        .catch(error => {
            res.send('error');
        });
})

app.get('/forefitFromLeader', function(req, res) {
    axios.post('http:localhost:3001/selectLeader', { list: [idServer] })
        .then(response => {
            console.log('Election in progress');
        })
        .catch(error => {
            res.send('error');
        });
})

app.listen(3001, () => console.log(`Example app listening on port $3001!`))