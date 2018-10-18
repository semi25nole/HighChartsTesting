import React, { Component } from 'react';
import config from './setupTests';
import GraphComponent from './highchartsGraph/highchartsGraphComponent';
import Map from './highmapsChart/highmapsChart';
import config2 from './highmapsChart/highmapsChartConfig';

class App extends Component {
  
  render() {
    return (
      <div className="container mt-5" >
        <GraphComponent data={config} />
        <Map config={config2}/>
      </div>
    );
  }
}

export default App;