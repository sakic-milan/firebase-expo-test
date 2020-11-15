import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const reducer = combineReducers({
  authSlice,
});

const store = configureStore({
  reducer,
});

const authSlice = createSlice({
  name: "auth",
  initialState: { auth: false },
  reducers: {
    login: (state, action) => {
      state.auth = action.payload;
    },
    logout: (state, action) => {
      state.auth = false;
    },
  },
});

export const login = ({ username, password }) => async (dispatch) => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(login({ auth }));
  } catch (e) {
    return console.error(e.message);
  }
};
export const logout = () => async (dispatch) => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logout());
  } catch (e) {
    return console.error(e.message);
  }
};

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// const store = configureStore({
//   auth: authSlice,
// });

// render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
//   )

const AppStore = (props) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};
