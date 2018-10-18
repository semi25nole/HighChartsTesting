import React, { Component } from "react";
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src';
import config from './highmapsChartConfig';

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