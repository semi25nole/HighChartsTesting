import React, { Component } from "react";
import config from './highmapsChartConfig';
import ReactHighmaps from 'react-highcharts/ReactHighmaps';

class Map extends Component {
    render() {
        return(
            <div>
                <ReactHighmaps config={config} />
            </div>
        );
    }
}

export default Map;