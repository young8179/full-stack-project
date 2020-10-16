var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
// const app = express();



/* GET home page. */
<<<<<<< HEAD
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
=======
router.get('/', (req, res) => {
  res.render('index', {
    locals: {
      error: null,
    },
  });
>>>>>>> main
});

const checkAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
};

<<<<<<< HEAD
router.get('/', checkAuth, (req, res) => {
  res.render('index', {
    locals: {
      user: req.session.user,
    },
  });
});
=======
>>>>>>> main

router.post('/', (req, res) => {
  // console.log('\n\nLogin triggered\n\n')
<<<<<<< HEAD
  if (!req.body.email || !req.body.password) {
    res.render('/', {
=======
  if(!req.body.email || !req.body.password){
    res.render('index', {
>>>>>>> main
      locals: {
        error: 'Please submit all required fields',
      },
    });
    return;
  }

  db.User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(user => {
    if (!user) {
      res.render('/', {
        locals: {
          error: 'No user with that email',
        },
      });
      return;
    }

    bcrypt.compare(req.body.password, user.password, (err, matched) => {
      if (matched) {
        // res.send('YOU LOGGED IN')
        req.session.user = user;
        res.redirect('/main');
      } else {
        res.render('/', {
          locals: {
            error: 'Incorrect password. Please try again.',
          },
        });
      }
      return;
<<<<<<< HEAD
    });
  });
});
=======
    })
  })
})

module.exports = router;
>>>>>>> main
