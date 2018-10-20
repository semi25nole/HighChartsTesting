import React, { Component } from 'react';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import Config from './highstockChartConfig';

class stock extends Component {
    render() {
        return(
            <div className='container mt-5'>
                <ReactHighstock config={Config} />
            </div>
        )
    }
}

export default stock;