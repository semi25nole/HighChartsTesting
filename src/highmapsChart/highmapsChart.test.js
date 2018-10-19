import React from 'react';
import { shallow } from 'enzyme';
import Map from './highmapsChart';

describe('Map', () => {

    let subject;

    beforeEach(() => {
        subject = shallow(<Map />);
    })

    it('should render without error', () => {
        expect(subject.find('Map')).toEqual({});
    })
})