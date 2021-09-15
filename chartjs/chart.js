
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data,
      options: {
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                      const nanoseconds = value;
                      const number = Number(nanoseconds);
                      const milliseconds = number / 1000000;
                      const seconds = number / 1000000000;
                      if(seconds > 1) return `${seconds} seconds`;
                      if(milliseconds > 1) return `${milliseconds} ms`;
                      if(nanoseconds > 1) return `${nanoseconds} ns`;
                    }
                }
            }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'YubaPerf'
          }
        }
      },
});