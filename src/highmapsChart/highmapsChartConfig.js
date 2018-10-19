const config = {
    chart: {
        spacingBottom: 20
    },
    title: {
        text: 'Europe time zones'
    },
    legend: {
        enabled: true
    },
    plotOptions: {
        map: {
            allAreas: false,
            joinBy: ['iso-a2', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                style: {
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.name}: <b>{series.name}</b>'
            }
        }
    },
    series: [{
        name: 'UTC',
        data: ['IE', 'IS', 'GB', 'PT'].map((countryCode) => {
            return { code: countryCode };
        })
    }, {
        name: 'UTC + 1',
        data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU', 'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map((countryCode) => {
            return { code: countryCode };
        })
    }]
};

export default config;