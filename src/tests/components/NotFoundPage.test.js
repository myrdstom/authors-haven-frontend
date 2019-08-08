import React from 'react';
import { mount} from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from '../../components/NotFoundPage';


const wrapper = mount(<MemoryRouter><NotFoundPage /></MemoryRouter>);

describe('The Not Found Page Component', () => {

    it('renders the NotFoundPage without crashing', () => {
        const NotFound = <h1 className="display-1 d-flex justify-content-center">404</h1>;
        expect(wrapper.contains(NotFound)).toEqual(true);
    });

});
