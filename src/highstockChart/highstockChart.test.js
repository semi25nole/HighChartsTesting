import React from 'react';
import { shallow } from 'enzyme';
import Stocks from './highstockChart';

describe('Stocks', () => {

    let subject;

    beforeEach(() => {
        subject = shallow(<Stocks />);
    })

    it('should render without error', () => {
        expect(subject.find('Stocks')).toEqual({});
    })
});