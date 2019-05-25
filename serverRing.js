var express = require('express');
var app = express()
var axios = require('axios');
var leadearElection = true;
var isLeader = true;
var idServer = 9;

app.set('view engine', 'ejs');
app.set('views', './');

//TODO


app.get('/init', function(req, res) {
    axios({
            method: 'POST',
            url: 'http://localhost:3001/hi',
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

app.get('/forefitFromLeader', function(req, res) { //isLeader to false - leaderElection to false
    axios.post('http:localhost:3001/selectLeader', idServer)
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


app.listen(3000, () => console.log(`Example app listening on port $3000!`))