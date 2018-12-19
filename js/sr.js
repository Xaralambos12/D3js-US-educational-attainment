 var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',  // bar etc see other types eg 'horizontalBar' here https://www.chartjs.org/docs/latest/charts/

        // The data for our dataset
        data: {
            labels: ["France", "Germany", "Japan", "South Korea", "UK", "US", "Global"],
            datasets: [
              {
                label: "Sales per month in €", // Graph label
                //Add new rgb colors TO backgroundColor array to make each bar differently colored.
                backgroundColor: [ 'rgb(12, 12, 39)',
                                   'rgb(112, 46 ,515)',
                                   'rgb(245, 237, 133)',
                                   'rgb(8, 1, 213)',
                                   'rgb(86, 91, 109)',
                                   'rgb(197, 128, 14)',
                                   'rgb(295, 990, 12)',  ],
                               
                data: [6.14, 6.11, 5.48, 4.42, 7.15, 6.44, 5.96],
               },
              
            ]
        },

        
        
        
                // Configuration options go here
                options: {
                  //responsive:true,
                  //maintainAspectRatio: false
                  cutoutPercentage: 90,    //50% is the default. A doughnut pie is a 50% of normal pie chart
                 

                  
                  
                  
                  
                }    

    }); 

