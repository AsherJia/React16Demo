import { combineReducers } from 'redux';
import { pageData } from '../modules/home/reducer'

const rootReducer = combineReducers({
    pageData,
})

export default rootReducer
