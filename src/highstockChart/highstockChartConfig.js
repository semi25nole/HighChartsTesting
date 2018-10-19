import Data from './highstockChartData';

let Config = {
    rangeSelector: {
        selected: 1
    },
    title: {
        text: 'AAPL Stock Price'
    },
    series: [{
        name: 'AAPL',
        data: Data,
        tooltip: {
            valueDecimals: 2
        }
    }]
};

export default Config;