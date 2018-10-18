import React, { Component } from 'react';
import config from './setupTests';
import GraphComponent from './highchartsGraph/highchartsGraphComponent';

class App extends Component {
  render() {
    return (
      <div>
        <GraphComponent data={config} />
      </div>
    );
  }
}

export default App;
