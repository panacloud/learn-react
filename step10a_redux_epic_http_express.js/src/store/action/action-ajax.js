export class ajaxAction {

    static INSERT_NAME = "INSERT_NAME";
    static INSERT_NAME_SUCCESS = "INSERT_NAME_SUCCESS";
    static INSERT_NAME_FAILED = "INSERT_NAME_FAILED";

    static GET_NAMES = "GET_NAMES";
    static GET_NAMES_SUCCESS = "GET_NAMES_SUCCESS";
    static GET_NAMES_FAILED = "GET_NAMES_FAILED";

    static insertName(name) {
        return { type: ajaxAction.INSERT_NAME, payload: name }
    }
    static getNames() {
        return { type: ajaxAction.GET_NAMES }
    }
}