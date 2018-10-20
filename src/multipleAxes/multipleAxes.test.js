import React from 'react';
import { shallow } from 'enzyme';
import MultipleAxes from './multipleAxes';

describe('MultipleAxes', () => {

    let subject;

    beforeEach(() => {
        subject = shallow(<MultipleAxes />);
    });

    it('should render without error', () => {
        expect(subject.find('MultipleAxes')).toEqual({});
    });
});
