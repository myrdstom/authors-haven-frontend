import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toast } from 'react-toastify';
import { GET_ERRORS, SET_CURRENT_USER } from '../../../../redux/actions/types';
import {
    registerUser,
    loginUser,
    setCurrentUser,
} from '../../../../redux/actions/auth/auth';
import users from '../../../__mocks__/users';
import { signUp } from '../../../__mocks__/errors';

jest.mock('axios');
const mockStore = configureMockStore([thunk]);
const userData = {
    username: users.username,
    email: users.email,
    password: users.password,
    confirmPassword: users.confirmPassword,
};

const loginUserData = {
    email: users.email,
    password: users.password,
}
// describe('Test suite for register action', () => {
//     it('Should fail to register a user', () => {
//         const notifyMock = jest.fn();
//         toast.success = notifyMock;
//         const error = { error: 'User already exists' };
//         mockAxios.post.mockImplementationOnce(() => Promise.reject(error));
//         const responseData = {
//             type: GET_ERRORS,
//             payload: { error: 'User already exists' },
//         };
//         const store = mockStore({});
//         store.dispatch(registerUser(userData));
//         expect(mockAxios.post).toHaveBeenCalledTimes(1);
//         // expect(store.getActions()).toEqual(responseData);
//         // expect(notifyMock).toHaveBeenCalledTimes(1);
//     });
//     it('Should register a user', () => {
//         const notifyMock = jest.fn();
//         toast.success = notifyMock;
//         const message = { message: 'Go to your email to verify ' };
//         mockAxios.post.mockImplementationOnce(() => Promise.resolve(message));
//         const responseData = {
//             message: 'Congratulation!! You have been registered!',
//         };
//         const store = mockStore({});
//         store.dispatch(registerUser(userData));
//         expect(mockAxios.post).toHaveBeenCalledTimes(2);
//         // expect(notifyMock).toHaveBeenCalledTimes(1);
//         // expect(store.getActions()).toEqual(responseData);
//     });
// });

// describe('Test suite for login action', () => {
//     it('Should fail to login a user', () => {
//         const error = { error: 'User does not exist' };
//         mockAxios.post.mockImplementationOnce(() => Promise.reject(error));
//         const responseData = {
//             type: GET_ERRORS,
//             payload: { error: 'User does notexist' },
//         };
//         const store = mockStore({});
//         store.dispatch(loginUser(loginUserData));
//         expect(mockAxios.post).toHaveBeenCalledTimes(3);
//     });
//     it('Should login a user', () => {
//         const notifyMock = jest.fn();
//         toast.success = notifyMock;
//         const message = { message: 'Congratulation!! You have logged In! ' };
//         mockAxios.post.mockImplementationOnce(() => Promise.resolve(message));
//         const responseData = {
//             message: 'Congratulation!! You have logged In!',
//         };
//         const store = mockStore({});
//         store.dispatch(registerUser(loginUserData));
//         expect(mockAxios.post).toHaveBeenCalledTimes(4);
//     });
// });

describe('Set LoggedIn User', () => {
    const response = { isAuthenticated: false };
    const responseData = {
        type: SET_CURRENT_USER,
        payload: { isAuthenticated: false },
    };
    it('should return action type and payload', () => {
        expect(setCurrentUser(response)).toEqual(responseData);
    });
});
