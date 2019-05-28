const express = require('express');
const router = express.Router();
const axios = require('axios');

var leadearElection = true;
var isLeader = true;
var idServer = 9;
var leaderId = 0;

var ip = "http://localhost:3031"

router.post('/selectLeader', function(req, res) {
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
    axios.post(ip + '/selectLeader', {id: idServ})
        .then(response => {
            console.log('Election in progress');
        })
        .catch(error => {
            res.send('error');
        });
}

router.get('/forefitFromLeader', function(req, res) { //isLeader to false - leaderElection to false
    leadearElection=false;
    axios.post(ip + '/selectLeader', {id: 0})
        .then(response => {
            console.log('Election in progress');
        })
        .catch(error => {
            res.send('error');
        });
})

module.exports = router;