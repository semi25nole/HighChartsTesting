import React from 'react';
import { shallow } from 'enzyme';
import ComboChart from './combinationChart';

describe('ComboChart', () => {

    let subject;

    beforeEach(() => {
        subject = shallow(<ComboChart />);
    });

    it('should render without error', () => {
        expect(subject.find('ComboChart')).toEqual({});
    });
});
