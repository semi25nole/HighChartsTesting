import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import config from './multipleAxesConfig';

class MultipleAxes extends Component {
    render() {
        return(
            <div className='container mt-5 bg-primary mb-5'>
                <ReactHighcharts config={config} />
            </div>
        );
    }
}

export default MultipleAxes;