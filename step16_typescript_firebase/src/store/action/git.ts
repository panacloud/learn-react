
export class GitAction {

    static GetDataFromUrl = 'GetDataFromUrl';
    static GetDataFromUrl_SUCCESS = 'GetDataFromUrl_SUCCESS';
    static GetDataFromUrl_FAIL = 'GetDataFromUrl_FAIL';

    static getDataFromUrl() {
        return {
            type: GitAction.GetDataFromUrl
        };
    }
}
