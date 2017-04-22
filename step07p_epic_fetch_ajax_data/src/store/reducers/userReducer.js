
import UserAction from '../actions/user'


const INITIAL_STATE = {
    repoList : [],
    followersList: [],
}

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
  case UserAction.GET_REPO_SUCCESSFUL:
    return {...state, repoList: action.payload}
  case UserAction.GET_FOLLOWERS_SUCCESSFUL:
    return {...state, followersList: action.payload}
  default:
    return state
  }
}

export default userReducer;