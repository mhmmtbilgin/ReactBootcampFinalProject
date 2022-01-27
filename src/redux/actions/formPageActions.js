import * as actionTypes from "./actionTypes";
import appFormService from "../../services/apiFormService";

export const FormTutorial = (title, description) => async (dispatch) => {
  try {
    const res = await appFormService.create({ title, description });

    dispatch({
      type: actionTypes.SUBMIT_FORM_SUCCESS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

