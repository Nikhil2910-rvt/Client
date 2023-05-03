import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import axios from 'axios'

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", user, { withCredentials: true });
    console.log(res.data)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};