var express = require('express');
var axios = require('axios');
var router = express.Router();

router.post('/', function(req, res, next) {
    var list = req.body.list;
    console.log(list);
    list.push('Server2');
    axios.post('http://10.4.16.1:3010/hi', { list: list })
        .then(response => {
            res.send("ok");
        })
        .catch(error => {
            res.send("ok");
        });
});

module.exports = router;