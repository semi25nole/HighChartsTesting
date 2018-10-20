let config = {
    title: {
        text: 'Combination Chart'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
    },
    labels: {
        items: [{
            html: 'Total fruit consumption',
            style: {
                left: '50px',
                top: '18px',
                color: 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Jane',
        data: [3,2,1,3,4]
    }, {
        type: 'column',
        name: 'John',
        data: [2,3,5,7,6]
    }, {
        type: 'column',
        name: 'Joe',
        data: [4,3,3,9,0]
    }, {
        type: 'spline',
        name: 'average',
        data: [3,2.67,3,6.33,3.33],
        marker: {
            lineWidth: 2,
            lineColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total consumption',
        data: [{
            name: 'Jane',
            y: 13,
            color: 'yellow'
        }, {
            name: 'John',
            y: 23,
            color: 'Blue'
        }, {
            name: 'Joe',
            y: 19,
            color: 'orange'
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            dataLabels: {
                enabled: false
            }
        }
    }]
}

export default config;