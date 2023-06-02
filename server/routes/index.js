var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {

});
router.get('/get', function(req, res, next) {
    res.send("Hello")
});
module.exports = router;
