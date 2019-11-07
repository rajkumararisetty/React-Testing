import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils';
import Headline from './index';

const setUp = (props={}) => {
    return shallow(<Headline {...props} />);
}

describe('headline component', () => {
    describe('Checking PropTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArray: [{
                    firstName: 'Test fn',
                    lastName: 'Test ln',
                    email: 'test@email.com',
                    age: 26,
                    onlineStatus: true,
                }]
            };

            const propsError = checkProps(Headline, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc',
            };
            wrapper = setUp(props);
        });

        it('should render without any issue', () => {
            expect(wrapper.type()).not.toBeNull();
        });

        it('should render with headline header', () => {
            const h1 = findByTestAttr(wrapper, 'headlineHeader');
            expect(h1.length).toBe(1);
        });

        it('should render with headline description', () => {
            const desc = findByTestAttr(wrapper, 'headlineDesc');
            expect(desc.length).toBe(1);
        });
    });

    describe('have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('should render null', () => {
            expect(wrapper.type()).toBeNull();
        });
    });
});