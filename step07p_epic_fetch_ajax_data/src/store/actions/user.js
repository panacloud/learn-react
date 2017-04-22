export default class UserAction {

    static GET_DATA = "GET_DATA";
    static GET_REPO_SUCCESSFUL = "GET_REPO_SUCCESSFUL";
    static GET_FOLLOWERS_SUCCESSFUL = "GET_FOLLOWERS_SUCCESSFUL";

    static getData(){
        return { 
            type: UserAction.GET_DATA
        }
    }

    static getRepoSuccessful(repoList){
        return { 
            type: UserAction.GET_REPO_SUCCESSFUL,
            payload: repoList
        }
    }

    static getFollowersSuccessful(followersList){
        return { 
            type: UserAction.GET_FOLLOWERS_SUCCESSFUL,
            payload : followersList
        }
    }

}