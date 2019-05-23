var express = require('express');
var axios = require('axios');
var router = express.Router();

router.get('/', function(req, res) {
    axios.post('http://10.4.73.133:3011', { list: ['server1'] })
        .then(response => {
            res.render('index', { title: 'Express' });
        })
        .catch(error => {
            res.render('index', { title: 'Error' });
        });
});

router.post('/hi', function(req, res, next) {
    console.log(req.body);
    res.send("ok");
});

module.exports = router;