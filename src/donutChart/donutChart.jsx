import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import config from './donutChartConfig';

class DonutChart extends Component {
    render() {
        return(
            <div className='container mt-5'>
                <ReactHighcharts config={config} />
            </div>
        )
    }
}

export default DonutChart;