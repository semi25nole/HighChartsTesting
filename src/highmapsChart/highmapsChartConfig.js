import { europe } from './europe';

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
            mapData: europe,
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.name}: <b>{series.name}</b>'
            }
        }
    },
    series: [{
        map: true,
        name: 'UTC',
        data: ['IE', 'IS', 'GB', 'PT'].map((code) => {
            return { code: code };
        })
    }, {
        name: 'UTC + 1',
        data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU', 'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map((code) => {
            return { code: code };
        })
    }]
};

export default config;