import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
} from '../actions/Types';

export const emailChange = (email) => ({
   type: EMAIL_CHANGE,
   payload: email,
});

export const passwordChange = (password) => ({
  type: PASSWORD_CHANGE,
  payload: password,
});
