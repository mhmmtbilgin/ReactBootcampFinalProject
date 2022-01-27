import actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export default function categoryListReducer(state = initialState.form, action){
    switch (action.type) {               
        case actionTypes.SUBMIT_FORM_SUCCESS:
            return action.payload; 
        default:
    }
}