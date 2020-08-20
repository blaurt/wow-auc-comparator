import {
  logoutRequestAction,
  logoutSuccessAction,
  logoutErrorAction
} from '../actions';
import { User } from '@store/modules/entities/user/UserModel';

describe('Auth actions', () => {
  it(`should return action with type ${logoutRequestAction.type}`, () => {
    const action = logoutRequestAction(1 as User['id']);
    expect(action).toEqual({
      type: logoutRequestAction.type,
      payload: {
        userId: 1
      }
    });
  });

  it(`should return action with type ${logoutErrorAction.type} and error message in payload`, () => {
    const action = logoutErrorAction();
    expect(action).toEqual({
      type: logoutErrorAction.type
    });
  });

  it(`should return action with type ${logoutSuccessAction.type}`, () => {
    const action = logoutSuccessAction();
    expect(action).toEqual({
      type: logoutSuccessAction.type
    });
  });
});
