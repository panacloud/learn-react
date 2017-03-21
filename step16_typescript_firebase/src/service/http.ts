import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

// https://xgrommx.github.io/rx-book/content/rxjs_bindings/dom/index.html#rxdomrequestgetjsonurl
// https://github.com/ReactiveX/rxjs/blob/master/src/observable/dom/AjaxObservable.ts

export class HttpService {

    static get(url: string, headers: Object = null): Observable<any> {
        return Observable.ajax({
            url,
            method: 'GET',
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    } // get

    static post(url: string, body: any, headers = { 'Content-Type': 'application/json' }): Observable<any> {
        return Observable.ajax({
            url,
            method: 'POST',
            body,
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    } // post
}