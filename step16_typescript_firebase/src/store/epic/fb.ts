import { Observable } from "rxjs";
import { ActionsObservable } from "redux-observable";

import { FbAction } from "./../action/fb";
import { qFire } from '../../service/qFire';

class FbEpic {

    getUserData = (action$: ActionsObservable<any>) =>
        action$.ofType(FbAction.SYNCUSERS)
            .switchMap(({payload}) => {
                return qFire.list('users')
                    .switchMap((obj) => {
                        if (obj && obj['child_added']) {
                            return Observable.of({
                                type: FbAction.ADD,
                                payload: obj
                            });
                        } else if (obj && obj['child_changed']) {
                            // console.log('onChildChnaged ', obj)
                            return Observable.of({
                                type: FbAction.UPDATE,
                                payload: obj
                            });
                        } else if (obj && typeof (obj) == 'string') {
                            // console.log('onDelete ', obj)
                            return Observable.of({
                                type: FbAction.DEL,
                                payload: obj
                            });
                        }
                    });
            })

}


export let fbEpic = new FbEpic();