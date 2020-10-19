const ctx = document.getElementById('myChart').getContext('2d');
let expense = []
let amount = []
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: expense,
        datasets: [{
            label: '# of Votes',
            data: amount,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54,37,132,0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(90, 206, 86, 0.2)',
                'rgba(75, 52, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 150, 0.2)',
                'rgba(240,150,20,0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(230, 162, 235, 0.2)',
                'rgba(90, 206, 86, 0.2)',
                'rgba(75, 52, 192, 0.2)',
                'rgba(153, 102, 115, 0.2)',
                'rgba(255, 159, 100, 0.2)',
                'rgba(110,37,20,0.2)'
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    
});

getData(myChart)
console.log(myChart.data.datasets[0].data)
console.log(expense)


async function getData(chart){
    const res = await fetch("http://localhost:3000/main/expenses")
    const data = await res.json()
    // console.log(data)
    const table = data[0].category
        for (let i = 0; i < data.length; i++) {
        label = data[i].category
        dataP = data[i].amount_expense
        chart.data.labels.push(label)
        chart.data.datasets[0].data.push(dataP)
        
    }
      
    chart.update();
}
   // table.forEach(row =>{
    //         const dataE = data.split(",")
    //         const amount_expense = dataE.amount_expense
    //         const category = dataE.category
    //         expense.push(category)
    //         // amount.push(amount_expense)
    //         console.log("=====data====")
    //         console.log(dataE)
    //         console.log(category)
    //         // console.log(amount_expense)
    //         // console.log(table)
            
    
    //     })