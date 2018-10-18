import React from 'react';
import { shallow } from 'enzyme';
import ReactHighcharts from 'react-highcharts';
import GraphComponent from './highchartsGraphComponent';
import config from './graphComponentConfig';


describe('Graph Component', () => {
    let subject;

    beforeEach(() => {
        subject = shallow(<GraphComponent />);
    });

    it('should render without error', () => {
        expect(subject.find(config)).toEqual({});
    })

})