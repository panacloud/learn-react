import { Observable } from "rxjs";
import { ajaxAction } from '../action/action-ajax'
import { api } from './../../services/api';

class AjaxEpic {

    getRepos = (action$) =>
        action$.ofType(ajaxAction.HTTPCALL)
            .switchMap(({ payload }) => {
                return api.getUserRepos(payload)
                    .switchMap(({ response }) => {
                        return Observable.of({
                            type: ajaxAction.HTTPCALL_SUCCESS,
                            payload: response
                        });
                    }).catch((error) => {
                        return Observable.of({
                            type: ajaxAction.HTTPCALL_FAILED,
                        });
                    })
            })
}
export let ajaxEpic = new AjaxEpic();