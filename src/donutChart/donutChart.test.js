import React from 'react';
import { shallow } from 'enzyme';
import Donut from './donutChart';

describe('Donut', () => {

    let subject;

    beforeEach(() => {
        subject = shallow(<Donut />);
    });

    it('should render without error', () => {
        expect(subject.find('donut')).toEqual({});
    });
});
