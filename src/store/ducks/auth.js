export const Types = {
  CHECK_PHONE_REQUEST: 'auth/CHECK_PHONE_REQUEST',
  CHECK_PHONE_SUCCESS: 'auth/CHECK_PHONE_SUCCESS',
  CHECK_PHONE_FAILURE: 'auth/CHECK_PHONE_FAILURE',
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
  REGISTER_REQUEST: 'auth/REGISTER_REQUEST',
  REGISTER_SUCCESS: 'auth/REGISTER_SUCCESS',
  REGISTER_FAILURE: 'auth/REGISTER_FAILURE',
};

const initialState = {
  phone: null,
  isLogged: null,
  token: null,
  error: null,
  loading: true,
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case Types.CHECK_PHONE_REQUEST:
      return {
        ...state,
        phone: action.payload.phone,
        loading: true,
        error: null,
      };
    case Types.CHECK_PHONE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case Types.CHECK_PHONE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.LOGIN_REQUEST:
    case Types.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.LOGIN_SUCCESS:
    case Types.REGISTER_SUCCESS:
      return {
        ...state,
        isLogged: true,
        name: action.payload.user.name,
        email: action.payload.user.email,
        token: action.payload.token,
        loading: false,
        error: null,
      };
    case Types.LOGIN_FAILURE:
    case Types.REGISTER_FAILURE:
      return {
        ...state,
        token: null,
        isLogged: false,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: (phone, password, navigation) => ({
    payload: { phone, password, navigation },
    type: Types.LOGIN_REQUEST,
  }),

  loginSuccess: ({ user, token }) => ({
    type: Types.LOGIN_SUCCESS,
    payload: { user, token },
  }),

  loginFailure: error => ({
    payload: { error },
    type: Types.LOGIN_FAILURE,
  }),

  registerRequest: (userInfo, navigation) => ({
    payload: { userInfo, navigation },
    type: Types.REGISTER_REQUEST,
  }),

  registerSuccess: ({ user, token }) => ({
    type: Types.REGISTER_SUCCESS,
    payload: { user, token },
  }),

  registerFailure: error => ({
    payload: { error },
    type: Types.REGISTER_FAILURE,
  }),

  checkPhoneRequest: (phone, navigation) => ({
    payload: { phone, navigation },
    type: Types.CHECK_PHONE_REQUEST,
  }),

  checkPhoneSuccess: () => ({
    type: Types.CHECK_PHONE_SUCCESS,
  }),

  checkPhoneFailure: error => ({
    payload: { error },
    type: Types.CHECK_PHONE_FAILURE,
  }),
};
