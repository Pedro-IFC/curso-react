import { reducer } from './reducers/index'

const initialState = {
    cart:[],
    products: [],
    user: null,
    number: 0
}
export { 
    reducer,
    initialState
}