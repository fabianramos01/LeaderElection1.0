const express = require('express');
const app = express()
const axios = require('axios');
const morgan = require('morgan');
var leadearElection = true;
var isLeader = true;
var idServer = 9;
var leaderId = 0;

bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './');

//TODO

app.use(morgan('dev'));

/*
app.use(function (req, res, next) {
    console.log('--------------------');
    console.log('Request url: ' +  req.url);
    console.log('Request IP: ' +  req.ip);
    next();
});
*/

app.get('/init', function(req, res) {
    axios({
            method: 'POST',
            url: 'http://localhost:3031/hi',
            data: {
                foo: 'bar', // This is the body part
            }
        }).then(response => {
            res.render('index');
        })
        .catch(error => {
            console.log(error);
            res.send('error');
        });
});

app.post('/selectLeader', function(req, res) {
    console.log(req.body.id);
    if (leadearElection == true) {
        if (req.body.id > idServer) {
            leaderId =req.body.id;
            sendId(req.body.id, res);
        } else if (req.body.id < idServer) {
            sendId(idServer, res);
        } else {
            isLeader = true;
        }
    } else {
        console.log("ser 1");
        sendId(req.body.id, res);
    }
});

function sendId(idServ, res) {
    axios.post('http://localhost:3031/selectLeader', {id: idServ})
        .then(response => {
            console.log('Election in progress');
        })
        .catch(error => {
            res.send('error');
        });
}

app.get('/forefitFromLeader', function(req, res) { //isLeader to false - leaderElection to false
    leadearElection=false;
    axios.post('http://localhost:3031/selectLeader', {id: 0})
        .then(response => {
            console.log('Election in progress');
        })
        .catch(error => {
            res.send('error');
        });
})

app.post('/hi', function(req, res, next) {
    console.log(req.body);
    res.send("ok");
});


app.listen(3030, () => console.log(`Example app listening on port $3030!`))