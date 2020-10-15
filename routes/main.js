const express = require('express');
const router = express.Router();
const db = require("../models")

// function checkAuth(req, res, next){
//   if (req.session.user){
//     next()
//   }else {
//     res.redirect("/login")
//   }
// }

// router.use("/*", checkAuth)

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.Expense.findAll()
    .then((expenses) => {
      db.Budget.findAll()
        .then((budgets) => {
          res.render('main', {
            locals: {
              error: null,
              expenses: expenses,
              budgets: budgets
            }

          })
        })

    })
});

//===========================================================================
router.post("/expense", (req, res)=>{
  if(!req.body.expense || !req.body.category){
    res.render("main", {
      locals: {
        error: "really weird",
        expenses: null,
        budgets: null
      }
    })
    return;
  }
  db.Expense.create({
    category: req.body.category,
    amount_expense: req.body.expense
    
  })
  
  .then((expenses)=>{
    
    
    res.redirect("/main")
  })
  .catch((error)=>{
    console.error(error)
    res.status(500).json({ error: "something wrong"})
  })
})
 //====================== 
router.post("/budget", (req, res) => {
  if(!req.body.budget || !req.body.month){
    res.render("main", {
      locals: {
        error: "Please submit all required fields.",
        budgets: null,
        expenses: null
      }
    })
    return;
  }
  db.Budget.create({
    amount_budget: req.body.budget,
    month: req.body.month
  })
  .then((budget)=> {
    res.redirect("/main")
  })
  .catch((error)=> {
    console.error(error)
    res.status(500).json({ error: "somethings wrong"})
  })
})






module.exports = router;


// rendering=========================================================================