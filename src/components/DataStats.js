import React from 'react';
import ReactHighcharts from 'react-highcharts';
require('highcharts-exporting')(ReactHighcharts.Highcharts);

class DataStats extends React.Component {

    render(){
        var config={
              title: {
                  text: 'Files count by month/release'
                          },
              xAxis: {
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  title:{text:'Time'}
              },
             yAxis: {
                title:{text:'Count'}
             },
              series: [{
                      data: [29, 71, 106, 129, 144, 145, 146, 148, 216, 294, 295, 454]
              }],
            credits: {
                    enabled: false
                  },
        };
        return (
            <div id="datastats">
                <ReactHighcharts config={config} ></ReactHighcharts>
            </div>
        )
    }
}

export default DataStats;
