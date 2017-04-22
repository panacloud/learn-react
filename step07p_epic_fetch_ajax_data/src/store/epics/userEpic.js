import { Observable } from 'rxjs';
import UserAction from '../actions/user'
export default class UserEpic {

    static getRepoData(action$){
        console.log(action$);
        
        return action$.ofType(UserAction.GET_DATA)
            .mergeMap(()=>{
                return Observable.ajax("https://api.github.com/users/zeeshanhanif/repos")
                    .pluck("response")
                    .switchMap((jsonData)=>{
                        console.log("jsondata ==> repos ",jsonData)
                        return Observable.of(UserAction.getRepoSuccessful(jsonData));
                        
                    })
                //return Observable.of(UserAction.getRepoSuccessful([{name:"hello"}]));
            })
    }

    static getFollowersData(action$){
        console.log(action$);
        
        return action$.ofType(UserAction.GET_DATA)
            .mergeMap(()=>{
                return Observable.ajax("https://api.github.com/users/zeeshanhanif/followers")
                    .pluck("response")
                    .switchMap((jsonData)=>{
                        console.log("jsondata ==> followers ",jsonData)
                        return Observable.of(UserAction.getFollowersSuccessful(jsonData));
                        
                    })
                //return Observable.of(UserAction.getFollowersSuccessful([{name:"test"}]));
            })
    }

}