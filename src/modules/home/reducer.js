import { INCREMENT, REDUCTION, SET_PAGE_DATA } from './constants/actionTypes'

const initPageData = {
    title: 'Home',
    counter: 0,
    autoIncrementCount: null
}

export const pageData = (state = initPageData, action = {}) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 }
        case REDUCTION:
            return { ...state, counter: state.counter - 1 }
        case SET_PAGE_DATA:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export const pageFlag = (state = initPageData, action = {}) => {
    switch (action.type) {
        case 'Test':
            return { ...state }
        default:
            return state
    }
}
