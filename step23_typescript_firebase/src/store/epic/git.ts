import { Observable } from "rxjs";
import { ActionsObservable } from "redux-observable";

import { GitAction } from "./../action/git";
import { HttpService } from "./../../service/http";

class GitEpic {

    getUserData = (action$: ActionsObservable<any>) =>
        action$.ofType(GitAction.GetDataFromUrl)
            .switchMap(({payload}) => {
                return HttpService.get('https://api.github.com/users/uqutub')
                    .switchMap(({response}) => {
                        return Observable.of({
                            type: GitAction.GetDataFromUrl_SUCCESS,
                            payload: response
                        });
                    });
            })

}


export let gitEpic = new GitEpic();