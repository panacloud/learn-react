import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

export class api {
    static getUserRepos(username) {
        return Observable.ajax({
            url: "https://api.github.com/users/" + username + "/repos",
            method: 'GET',
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
    //we can add more apis here
}