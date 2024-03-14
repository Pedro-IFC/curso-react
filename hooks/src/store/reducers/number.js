export function numberReducer(state, action){
    switch(action.type){
        case "add2":
            return {...state, number: state.number+2}
        case "add7":
            return {...state, number: state.number+7}
        case "div25":
            return {...state, number: state.number/25}
        case "addany":
            return {...state, number: parseInt(state.number)+parseInt(action.num?action.num:0)}
        case "arredondar":
            return {...state, number: Math.round(state.number)}
        default:
            return state
    }
}