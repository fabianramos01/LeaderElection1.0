var express = require('express');
var app = express()
var axios = require('axios');
var leadearElection = true;
var isLeader = false;
var idServer = 7;
var leaderId = 0;

bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './');


app.get('/init', function(req, res) {
    axios.post('http://localhost:3032/hi', { id: ['server2'] })
        .then(response => {
            res.render('index', { title: 'Express' });
        })
        .catch(error => {
            res.render('index', { title: 'Error' });
        });
});

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/hi', function(req, res, next) {
    console.log(req.body);
    res.send("ok");
});

app.post('/selectLeader', function(req, res) {
    if (leadearElection == true) {
        if (req.body.id > idServer) {
            leaderId =req.body.id;
            sendId(req.body.id, res);
        } else if (req.body.id < idServer) {
            leaderId =idServer;
            sendId(idServer, res);
        } else {
            isLeader = true;
            console.log("Lider");
        }
    } else {
        sendId(req.body.id, res);
    }
});

function sendId(idServ, res) {
    axios.post('http://localhost:3032/selectLeader', {id: idServ})
        .then(response => {
            console.log('Election in progress');
        })
        .catch(error => {
            res.send('error');
        });
}

app.get('/forefitFromLeader', function(req, res) {
    leadearElection=false;
    axios.post('http://localhost:3032/selectLeader', {id: 0})
        .then(response => {
            console.log('Election in progress');
        })
        .catch(error => {
            res.send('error');
        });
});


app.listen(3031, () => console.log(`Example app listening on port $3031!`))