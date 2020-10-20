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
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(54,37,132, 0.5)',
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(90, 206, 86)',
                'rgba(75, 52, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 150)',
                'rgba(240,150,20)',
                'rgba(255, 99, 132)',
                'rgba(230, 162, 235)',
                'rgba(90, 206, 86)',
                'rgba(75, 52, 192)',
                'rgba(153, 102, 115)',
                'rgba(255, 159, 100)',
                'rgba(110,37,20)',
                'rgba(90, 206, 86)',
                'rgba(75, 52, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 150)',
                'rgba(240,150,20)',
                'rgba(255, 99, 132)',
                'rgba(230, 162, 235)',
                'rgba(90, 206, 86)',
                'rgba(75, 52, 192)',
                'rgba(153, 102, 115)',
                'rgba(255, 159, 100)',
                'rgba(110,37,20)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 3
        }]
    },
    
});



getData(myChart)

async function getData(chart){
    const res = await fetch("/main/expenses")
    const data = await res.json()
    console.log(data)
    if(data.length){
        const table = data[0].category
            for (let i = 0; i < data.length; i++) {
                // if(!data[i].category || !data[i].amount_)
            label = data[i].category
            dataP = data[i].amount_expense
            chart.data.labels.push(label)
            chart.data.datasets[0].data.push(dataP)
            
        }

    }
      
    chart.update();
}

