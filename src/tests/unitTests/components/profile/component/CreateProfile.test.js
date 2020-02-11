import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router';
import { toast } from 'react-toastify';
import CreateProfile from '../../../../../components/profile/component/CreateProfile';
import Registration from '../../../../../components/auth/component/Registration';

describe('Test suite for the function Create or Edit a profile', () => {
    let wrapper;
    const props = {
        avatar: '',
        firstName: '',
        errors: '',
        user:'',
        onChange: jest.fn(),
        onSubmit: jest.fn(),
        onMouseClick: jest.fn()
    };

    it('should render the user registration component', () => {
        const wrapper = mount(
            <Router>
                <CreateProfile {...props} />
            </Router>
        );
        expect(wrapper.find('form')).toHaveLength(1);
    });
});
