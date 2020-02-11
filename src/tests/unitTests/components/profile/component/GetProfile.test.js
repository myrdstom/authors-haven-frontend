import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router';
import { toast } from 'react-toastify';
import GetProfile from '../../../../../components/profile/component/GetProfile';

describe('Test suite for the function Get a logged in user\'s profile', () => {
    let wrapper;
    const props = {
        profile: '',
        loading:'',
        user:''

    };

    it('should render the user registration component', () => {
        const wrapper = mount(
            <Router>
                <GetProfile {...props} />
            </Router>
        );
        expect(wrapper.find('container'));
    });
});