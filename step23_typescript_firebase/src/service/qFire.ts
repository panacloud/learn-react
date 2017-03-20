import { Observable, Subject } from "rxjs/Rx";

import * as firebase from 'firebase';
let config = {
  
};
firebase.initializeApp(config);

class QFire {

    private mainRef = firebase.database().ref('/');

    node: string = null;
    Obj: any = {};

    constructor() {
        console.log('FirebaseService Constructor node: ');
    }

    child_added(child_added$) {
        this.mainRef.child(this.node).on('child_added', (snapshot: any) => {
            this.setVariables(snapshot.val(), snapshot.key, 'added', child_added$);
        });
    }

    child_changed(child_changed$) {
        this.mainRef.child(this.node).on('child_changed', (snapshot: any) => {
            this.setVariables(snapshot.val(), snapshot.key, 'changed', child_changed$);
        });
    }

    child_removed(child_removed$) {
        this.mainRef.child(this.node).on('child_removed', (snapshot: any) => {
            this.setVariables(snapshot.val(), snapshot.key, 'removed', child_removed$);
        });
    }


    setVariables(obj: any, key: string, evnt: string, subject) {
        let _obj = null;

        if (evnt == 'added' || 'changed') {
            _obj = Object.assign({}, obj);
            _obj['$key'] = key;
        }

        // on child_added
        if (evnt == 'added') {
            this.Obj[key] = _obj;

            _obj['child_added'] = true;
            subject.next(_obj);
        }

        // on child_changed
        if (evnt == 'changed') {
            this.Obj[key] = _obj;

            _obj['child_changed'] = true;
            subject.next(_obj)
        }

        // on child_removed
        if (evnt == 'removed') {
            delete this.Obj[key];

            subject.next(key);
        }

        _obj = null;
    }

    list(node: string) {
        // before events close/off registered all events
        this.mainRef.child(node).off();
        this.node = node;

        let child_added$ = new Subject();
        let child_changed$ = new Subject();
        let child_removed$ = new Subject();


        this.child_added(child_added$);
        this.child_changed(child_changed$);
        this.child_removed(child_removed$);
        return Observable.merge(child_added$, child_changed$, child_removed$);
    }

}


export let qFire = new QFire();

// qFire
//     .list('users').subscribe(dataReader)
// function dataReader(obj: any) {
//     if (obj && obj['child_added']) {
//         console.log('child_added: ', obj)
//     } else if (obj && obj['child_changed']) {
//         console.log('child_changed: ', obj)
//     } else if (obj && typeof (obj) == 'string') {
//         console.log('child_removed: ', obj)
//     }
// }
