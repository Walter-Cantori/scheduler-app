import { takeLatest, all } from 'redux-saga/effects';

import { Types as AuthTypes } from '../ducks/auth';

import { loginRequest, checkPhoneRequest, registerRequest } from './auth';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.CHECK_PHONE_REQUEST, checkPhoneRequest),
    takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest),
    takeLatest(AuthTypes.REGISTER_REQUEST, registerRequest),
  ]);
}
