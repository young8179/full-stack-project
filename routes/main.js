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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('main')
});

//===========================================================================
router.post("/", (req, res)=>{
  if(!req.body.expense || !req.body.category){
    res.render("main", {
      locals: {
        error: "really weird"
      }
    })
    return;
  }
  db.Expense.create({
    category: req.body.category,
    amount_expense: req.body.expense
    
  })
  
  .then((expenses)=>{
    
    res.json(expenses)
  })
  .catch((error)=>{
    console.error(error)
    res.status(500).json({ error: "something wrong"})
  })
})
  
  





module.exports = router;


// rendering=========================================================================