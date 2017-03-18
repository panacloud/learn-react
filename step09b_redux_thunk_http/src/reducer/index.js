export var getRepoReducer = (state = [],action)=>{
    switch(action.type){
        case "SEARCH_REPO":
        var data = action.searchData;
        return data
        default :
        return state;
    }
}