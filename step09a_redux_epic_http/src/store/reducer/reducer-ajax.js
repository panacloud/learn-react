import { ajaxAction } from "../action/action-ajax";

const initialState = {
    data: null,
    isError: false,
    loading: false,
};
export function ajaxReducer(state = initialState, action) {
    switch (action.type) {

        case ajaxAction.HTTPCALL:
            return { ...state, loading: true, isError: false, };
            break;

        case ajaxAction.HTTPCALL_SUCCESS:
            return { ...state, data: action.payload, isError: false, error: null, loading: false };
            break;

        case ajaxAction.HTTPCALL_FAILED:
            return { ...state, isError: true, loading: false };
            break;

        default:
            return state;
    }
}