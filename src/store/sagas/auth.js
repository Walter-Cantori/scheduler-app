import { call, put } from 'redux-saga/effects';

import { Creators as AuthActions } from '../ducks/auth';
import api from '../../services/api';

export function* checkPhoneRequest({ payload }) {
  try {
    const response = yield call(api.get, `/checkPhone/${payload.phone}`);
    yield put(AuthActions.checkPhoneSuccess());
    const routeName = response.data.phoneExists ? 'Login' : 'Register';
    payload.navigation.navigate(routeName);
  } catch (err) {
    yield put(AuthActions.checkPhoneFailure(err));
  }
}

export function* loginRequest({ payload }) {
  try {
    const { phone, password } = payload;
    const response = yield call(api.post, '/signin', { phone, password });
    yield put(AuthActions.loginSuccess(response.data));
    payload.navigation.navigate('Scheduler');
  } catch (err) {
    yield put(AuthActions.loginFailure(err));
  }
}

export function* registerRequest({ payload }) {
  try {
    const { userInfo, navigation } = payload;
    const response = yield call(api.post, '/signup', userInfo);
    yield put(AuthActions.loginSuccess(response.data));
    navigation.navigate('Scheduler');
  } catch (err) {
    yield put(AuthActions.loginFailure(err));
  }
}
