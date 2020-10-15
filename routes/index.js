var express = require('express');
var router = express.Router();
<<<<<<< HEAD
const bcrypt = require("bcrypt");
const db = require("../models")
=======
const db = require("../models")
const bcrypt = require("bcrypt");
>>>>>>> main
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
<<<<<<< HEAD
    res.redirect('/main');
=======
    res.redirect('/');
>>>>>>> main
  }
}


router.post('/', (req, res)=>{
  // console.log('\n\nLogin triggered\n\n')
  if(!req.body.email || !req.body.password){
    res.render('/', {
      locals: {
        error: 'Please submit all required fields'
      }
    })
    return;
  }


<<<<<<< HEAD
module.exports = router;
=======
db.User.findOne({
  where: {
    email:req.body.email
  }
})
  .then(user=>{
    if(!user){
      res.render('/', {
        locals: {
          error: 'No user with that email'
        }
      })
      return;
    }

    bcrypt.compare(req.body.password, user.password, (err, matched) =>{
      if (matched){
        // res.send('YOU LOGGED IN')
        req.session.user = user;
        res.redirect('/main');
      } else {
        res.render('/', {
          locals: {
            error: 'Incorrect password. Please try again.'
          }
        })
      }
      return;
    })
  })
})
>>>>>>> main

