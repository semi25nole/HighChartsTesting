import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import config from './combinationChartConfig';

class ComboChart extends Component {
    render() {
        return(
            <div>
                <ReactHighcharts config={config} />
            </div>
        )
    }
}

export default ComboChart;