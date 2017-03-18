import { Observable } from "rxjs";
import { ajaxAction } from '../action/action-ajax'
import { api } from './../../services/api';

class AjaxEpic {

    insertName = (action$) =>
        action$.ofType(ajaxAction.INSERT_NAME)
            .switchMap(({ payload }) => {
                return api.insertName(payload)
                    .switchMap(({ response }) => {
                        return (
                            Observable.of({
                                type: ajaxAction.GET_NAMES
                            })
                        )
                    }).catch((error) => {
                        return Observable.of({
                            type: ajaxAction.INSERT_NAME_FAILED,
                        });
                    })
            })
    getName = (action$) =>
        action$.ofType(ajaxAction.GET_NAMES)
            .switchMap(({ payload }) => {
                return api.getNames()
                    .switchMap(({ response }) => {
                        return Observable.of({
                            type: ajaxAction.GET_NAMES_SUCCESS,
                            payload: response
                        });
                    }).catch((error) => {
                        return Observable.of({
                            type: ajaxAction.GET_NAMES_FAILED,
                        });
                    })
            })
}
export let ajaxEpic = new AjaxEpic();