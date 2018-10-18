import React, { Component } from 'react';
import ReactHighCharts from 'react-highcharts';
import config from './graphComponentConfig';

class GraphComponent extends Component {
    render() {
        return(
            <div>
                <ReactHighCharts config={config} />
            </div>
        );
    }
}

export default GraphComponent;