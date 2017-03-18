import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

export class api {
    static insertName(name) {
        return Observable.ajax({
            url: "/name",
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: { 'name': name },
            async: true,
            crossDomain: false,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
    static getNames() {
        return Observable.ajax({
            url: "/names",
            method: 'GET',
            async: true,
            crossDomain: false,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
    //we can add more apis here
}