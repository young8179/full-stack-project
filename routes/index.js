var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../models")
// const app = express();



/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    locals: {
      error: null,
    },
  });
});


const checkAuth = (req, res, next) => {
  if(req.session.user){
    next();
  }else{
    res.redirect('/main');
  }
}



module.exports = router;

