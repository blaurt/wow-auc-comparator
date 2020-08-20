import { createAction } from '@reduxjs/toolkit';
import { User } from '@store/modules/entities/user/UserModel';

export const logoutRequestAction = createAction('AUTH_LOGOUT_REQUEST', function(
  userId: User['id']
) {
  return {
    payload: {
      userId
    }
  };
});

export const logoutSuccessAction = createAction('AUTH_LOGOUT_SUCCESS');
export const logoutErrorAction = createAction('AUTH_LOGOUT_ERROR');
