const chart = require('chart.js')

function r(b, s, u) {
    return b*s*(1/u)
}

function sir(c, b, s, i, t, u, p) {
    let data = {
        labels: [],
        datasets: [{ 
            data: [s],
            label: "Suseptible",
            borderColor: "#42f5ec"
        },
        { 
            data: [i],
            label: "Infected",
            borderColor: "#3e95cd"
        },
        { 
            data: [0],
            label: "Recovered",
            borderColor: "#42f57b"
        }]
    }

    for(var x = 0; x<t; x++){
        data.datasets[0].data.push(data.datasets[0].data[x]-(b*data.datasets[0].data[x]*data.datasets[1].data[x]/p))
        data.datasets[1].data.push(data.datasets[1].data[x]+(b*data.datasets[0].data[x]*data.datasets[1].data[x]/p)-u*data.datasets[1].data[x])
        data.datasets[2].data.push(data.datasets[2].data[x]+u*data.datasets[1].data[x])
        data.labels.push("Day " +(x+1).toString())
    }
    console.log(data.datasets)
    
    var myLineChart = new Chart(c, {
        type: 'line',
        data: data,
        options: {
          title: {
            display: true,
            text: 'Total Cases'
          }
        }      
    });
}