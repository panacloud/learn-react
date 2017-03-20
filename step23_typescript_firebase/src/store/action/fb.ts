import { createAction } from 'redux-actions';

export class FbAction {

    static SYNCUSERS = 'SYNCUSERS';
    static ADD = 'ADD';
    static UPDATE = 'UPDATE';
    static DEL = 'DEL';

    static asyncUsers() {
        return {
            type: FbAction.SYNCUSERS
        };
    }

  

}
