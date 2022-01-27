import * as actionTypes from "./actionTypes";
import appFormService from "../../services/apiFormService";
export const LoginTutorial = (username, password) => async (dispatch) => {
    try {
      const res = await appFormService.get({ username, password });
  
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };