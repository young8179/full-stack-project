var express = require('express');
var router = express.Router();
const db = require("../models")
// const app = express();

module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const checkAuth = (req, res, next) => {
  if(req.session.user){
    next();
  }else{
    res.redirect('/login');
  }
}

router.get('/', checkAuth, (req, res) => {
  res.render('index', {
    locals: {
      user: req.session.user
    }
  });
})




