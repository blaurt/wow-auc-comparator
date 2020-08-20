import { User } from '@store/modules/entities/user/UserModel';
import {
  loginErrorAction,
  loginSuccessAction
} from '@store/modules/forms/login';
import { signupErrorAction } from '@store/modules/forms/signup';
import { logoutSuccessAction } from './actions';

export interface AuthState {
  isLoggedIn: boolean;
  user?: User;
  loginError?: string;
  signupError?: string;
}

export const defaultState: AuthState = {
  isLoggedIn: false
};

export function authReducer(
  state: AuthState = defaultState,
  action:
    | ReturnType<typeof loginErrorAction>
    | ReturnType<typeof loginSuccessAction>
    | ReturnType<typeof signupErrorAction>
    | ReturnType<typeof logoutSuccessAction>
): AuthState {
  switch (action.type) {
    case 'LOGIN_ERROR': {
      return {
        isLoggedIn: false,
        loginError: action.payload.message
      };
    }
    case 'LOGIN_SUCCESS': {
      return {
        isLoggedIn: true,
        user: action.payload.user
      };
    }
    case 'SIGNUP_ERROR': {
      return {
        isLoggedIn: false,
        signupError: action.payload.message
      };
    }
    case 'AUTH_LOGOUT_SUCCESS': {
      return { ...defaultState };
    }
  }

  return state;
}
