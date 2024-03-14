export function numberAdd2(dispatch){
    dispatch({type: 'add2'});
}
export function numberAdd7(dispatch){
    dispatch({type: 'add7'});
}
export function divBy25(dispatch){
    dispatch({type:"div25"});
}
export function arredondar(dispatch){
    dispatch({type:"arredondar"});
}
export function addAny(dispatch, num){
    dispatch({type:"addany", num:num});
}