
export function login(dispatch, username){
    dispatch({type:"login", name:username});
}