var express = require('express');
var axios = require('axios');
var router = express.Router();

router.post('/', function(req, res, next) {
    var list = req.body.list;
    console.log(list);
    list.push('Server2');
	axios.post('http://127.0.0.1:3000/hi',{list: list})
      .then(response => {
        res.send("ok");
      })
      .catch(error => {
          res.send("ok");
      });
});

module.exports = router;
