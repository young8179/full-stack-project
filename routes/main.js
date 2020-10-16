const express = require('express');
const router = express.Router();
const db = require('../models');
const total = require('../lib/total');

function checkAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
}
router.get('/', checkAuth, (req, res) => {
  db.Expense.findAll({
    where: {
      UserId: req.session.user.id,
    },
    order: [['date', 'DESC']],
  }).then(expenses => {
    db.Budget.findOne({
      where: {
        UserId: req.session.user.id,
      },
      order: [['createdAt', 'DESC']],
    }).then(budgets => {
      console.log(total(expenses));
      res.render('main', {
        locals: {
          error: null,
          expenses: expenses,
          budgets:
            budgets && budgets.amount_budget
              ? {
                  amount: budgets.amount_budget,
                  total: total(expenses),
                  remaining: budgets.amount_budget - total(expenses),
                }
              : null,
          user: req.session.user,
        },
      });
    });
  });
});
// router.use("/*", checkAuth)

/* GET users listing. */

//===========================================================================
router.post('/expense', (req, res) => {
  if (!req.body.expense || !req.body.category || !req.body.date) {
    res.render('main', {
      locals: {
        error: 'Please submit all required field.',
        expenses: null,
        budgets: null,
      },
    });
    return;
  }
  db.Expense.create({
    category: req.body.category,
    amount_budget: req.body.expense,
    date: req.body.date,
    UserId: req.session.user.id,
  })

    .then(expenses => {
      res.redirect('/main');
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'something wrong' });
    });
});
//======================
router.post('/budget', (req, res) => {
  if (!req.body.budget) {
    res.render('main', {
      locals: {
        error: 'Please submit all required fields.',
        budgets: null,
        expenses: null,
      },
    });
    return;
  }
  db.Budget.create({
    amount_budget: req.body.budget,
    UserId: req.session.user.id,
  })
    .then(budget => {
      res.redirect('/main');
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'somethings wrong' });
    });
});

//logout===================================
router.get('/logout', (req, res) => {
  req.session.user = null;
  res.redirect('/');
});

module.exports = router;

// rendering=========================================================================
