const express = require('express');
const router = express.Router();
const morgan = require('morgan');

//TODO

router.get('/init', function(req, res) {
    /*
    axios({
            method: 'POST',
            url: 'http://localhost:3031/hi',
            data: {
                foo: 'bar', // This is the body part
            }
        }).then(response => {
            res.render('index.ejs');
        })
        .catch(error => {
            console.log(error);
            res.send('error');
        });
    */
    res.render('index');
});

router.get('/login', function(req, res) {
   res.render('login');
});

module.exports = router;