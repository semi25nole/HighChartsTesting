import React, { Component } from 'react';
import config from './setupTests';
import GraphComponent from './highchartsGraph/highchartsGraphComponent';
import Map from './highmapsChart/highmapsChart';
import config2 from './highmapsChart/highmapsChartConfig';
import Stocks from './highstockChart/highstockChart';
import config3 from './highstockChart/highstockChartConfig';
import config4 from './donutChart/donutChartConfig';
import Donut from './donutChart/donutChart';
import MultipleAxes from './multipleAxes/multipleAxes';
import config5 from './multipleAxes/multipleAxesConfig';

class App extends Component {
  
  render() {
    return (
      <div className="container mt-5" >
        <GraphComponent data={config} />
        <Map config={config2}/>
        <Stocks config={config3}/>
        <Donut config={config4} />
        <MultipleAxes config={config5} />
      </div>
    );
  }
}

export default App;