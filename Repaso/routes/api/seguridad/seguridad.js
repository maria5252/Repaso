var express = require('express');
var router = express.Router();

var userModel = require('./seguridad.model');

router.get('/users/all', (req, res)=>{
  return res.status(200).json(userModel.getAll());
});

router.get('/users/:id', (req, res)=>{
  var id = parseInt( req.params.id );
  var user = userModel.getById(id);
  return res.status(200).json(user);
});


module.exports = router;
