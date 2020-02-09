var express = require('express');

var router = express.Router();


var seguridadRouter = require('./seguridad/seguridad');


router.use('/seguridad', seguridadRouter);


router.get('/version', function(req, res){
  res.status(200).json({"Version" : "API V1.0"});
});

router.get('/nombre', function(req, res){
  res.status(200).json({"nombre" : "maria lozano xd"});
});

module.exports = router;
