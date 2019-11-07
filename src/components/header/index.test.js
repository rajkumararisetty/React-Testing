import React from 'react';
import { shallow  } from 'enzyme';
import { findByTestAttr } from '../../../Utils';
import Header from './index';

const setup = (props={}) => {
    return shallow(<Header {...props} />);
}

describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setup();
    });
    
    it('should render header tag', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    })

    it('should render without errors', () => {
        const wrapper = component.find('.wrap');
        expect(wrapper.length).toBe(1);
    });

    it('should render a logo', () => {
        const logo = findByTestAttr(component, 'logoComponent');
        expect(logo.length).toBe(1);
    });
});
