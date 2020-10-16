function total(expenses){       //budget = ${ expense.amount_budget }
    let sum = 0
    expenses.forEach((expense)=>{
        sum += expense.amount_expense
    })
    return sum;
}
module.exports = total;