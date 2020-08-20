import {
  loginErrorAction,
  loginSuccessAction
} from '@store/modules/forms/login';
import { authReducer, defaultState } from '../reducer';
import { signupErrorAction } from '@store/modules/forms/signup';
import { logoutSuccessAction } from '../actions';

describe('Auth reducer', () => {
  describe('Login cases', () => {
    it('LOGIN_ERROR', () => {
      const action = loginErrorAction('Test reason');

      expect(authReducer(defaultState, action)).toEqual({
        isLoggedIn: false,
        loginError: 'Test reason'
      });
    });

    it('LOGIN_SUCCESS', () => {
      const action = loginSuccessAction({
        id: 1,
        email: 'test@mail.com',
        username: 'testUsername',
        createdAt: 123
      });

      expect(authReducer(defaultState, action)).toEqual({
        isLoggedIn: true,
        user: {
          id: 1,
          email: 'test@mail.com',
          username: 'testUsername',
          createdAt: 123
        }
      });
    });
  });

  describe('Signup cases', () => {
    it('SIGNUP_ERROR', () => {
      const action = signupErrorAction('Test reason');

      expect(authReducer(defaultState, action)).toEqual({
        isLoggedIn: false,
        signupError: 'Test reason'
      });
    });
  });

  describe('Logout cases', () => {
    it('AUTH_LOGOUT_SUCCESS', () => {
      const action = logoutSuccessAction();

      expect(authReducer(defaultState, action)).toEqual({
        isLoggedIn: false
      });
    });
  });
});
